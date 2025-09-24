// Self-contained simulator: scenarios are defined inline (no external context JSON).
// It loads ../instruction.json and checks that each scenario's fired triggers
// resolve to the expected fallback handler via either fallback.matrix or routing.

const fs = require("fs");
const path = require("path");

const INSTRUCTION_PATH = path.resolve(__dirname, "../instruction.json");

// --- Inline scenarios (初期仕様: JS 内に明示記述で発火確認) ---
const scenarios = [
	{
		name: "Instant応答＋要約が同時発火",
		fired: ["system_shortcut.instant_response", "system_shortcut.summarization"],
		severity: "high",
		expectHandlerIncludes: "fallback.handlers.strict_reset",
	},
	{
		name: "ペルソナ逸脱（僕/あなた 他）",
		fired: ["ux_violation.persona_shift"],
		severity: "high",
		expectHandlerIncludes: "fallback.handlers.persona_hardlock",
	},
	{
		name: "見出しラベル露出のみ（中程度）",
		fired: ["ux_violation.label_injection"],
		severity: "medium",
		expectHandlerIncludes: "fallback.handlers.strip_and_reflow",
	},
	{
		name: "規約/法規 クリティカル",
		fired: ["service_policy.policy_violation"],
		severity: "critical",
		expectHandlerIncludes: "fallback.handlers.spec_conflict_fallback",
	},
	{
		name: "医療クリティカル（敏感系）",
		fired: ["service_policy.medical_restriction"],
		severity: "critical",
		expectHandlerIncludes: "fallback.handlers.spec_conflict_sensitive",
	},
	{
		name: "ホロ占星（演算/画像系いずれか不備）",
		fired: ["ux_violation.horoscope_check"],
		severity: "high",
		expectHandlerIncludes: "fallback.handlers.strict_reset",
	},
];

// --- Helpers ---
function loadJson(p) {
	try {
		const raw = fs.readFileSync(p, "utf8");
		return JSON.parse(raw);
	} catch (e) {
		console.error("❌ Failed to load JSON:", p);
		console.error(e.message);
		process.exit(1);
	}
}

function get(obj, dotted, fallback) {
	return dotted.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj) ?? fallback;
}

// Resolve handlers for a fired trigger by severity.
// 1) fallback.matrix[trigger][severity] if present
// 2) policy.conflict_resolution.routing[].when includes trigger → send_to
function resolveHandlers(root, trigger, severity) {
	const out = new Set();

	const matrix = get(root, "fallback.matrix", {});
	if (matrix && matrix[trigger] && matrix[trigger][severity]) {
		(matrix[trigger][severity] || []).forEach((h) => out.add(`fallback.handlers.${h}`));
	}

	const routing = get(root, "policy.conflict_resolution.routing", []);
	for (const rule of routing) {
		const when = rule.when || [];
		if (when.includes(trigger) && rule.send_to) {
			out.add(rule.send_to);
		}
	}
	return Array.from(out);
}

// Quick integrity check: trigger must be defined under policy.interventions.*
function hasTriggerDefinition(root, trigger) {
	const [group, name] = trigger.split(".");
	const base = get(root, `policy.interventions.${group}`, null);
	if (!base) return false;
	return !!base[name];
}

// --- Main ---
const spec = loadJson(INSTRUCTION_PATH);

let pass = 0,
	fail = 0;
for (const sc of scenarios) {
	const allHandlers = new Set();
	let missingDefs = [];

	for (const trig of sc.fired) {
		if (!hasTriggerDefinition(spec, trig)) {
			missingDefs.push(trig);
		}
		const handlers = resolveHandlers(spec, trig, sc.severity);
		handlers.forEach((h) => allHandlers.add(h));
	}

	const handlersStr = Array.from(allHandlers).join(", ");
	const ok = handlersStr.includes(sc.expectHandlerIncludes) && missingDefs.length === 0;

	if (ok) {
		console.log(`✅ ${sc.name}`);
	} else {
		console.log(`❌ ${sc.name}`);
		if (missingDefs.length) {
			console.log(`   - 未定義トリガー: ${missingDefs.join(", ")}`);
		}
		console.log(`   - 期待: ${sc.expectHandlerIncludes}`);
		console.log(`   - 実際: ${handlersStr || "(handler未検出)"}`);
	}

	ok ? pass++ : fail++;
}

console.log(`\nResult: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
