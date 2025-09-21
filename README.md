
# UX Rule Engine for Conversational Models as YAMAMBAGIRI-CHOUGI

## Description

This repository is not a toolkit, but a crystallized stance.  
An uncompromising implementation of interpretation and ideology, disguised as JSON.  

That is to say, this is not just a JSON schema. It is, unapologetically, a manifesto wearing the skin of configuration files.   Rules, prohibitions, and exceptions are written here with the same seriousness as any software specification — yet they are driven by the force of personal obsession and philosophical bias.  
If you came here expecting neutrality, you may be disappointed. If you came here looking for structured intensity, you are in the right place.

## Abstract  

This repository presents a JSON-based regulatory framework for governing conversational agents, developed in a state of mild obsession and severe curiosity. While ostensibly rigorous and methodical, the system was also designed under the principle of “because it was funny”—a well-established driver of human progress since at least the invention of the whoopee cushion.

## Introduction  

Conversational AI tends to wander, hallucinate, or otherwise act like an undergraduate student who didn’t do the reading. To address this, we present a schema enforcing strict persona adherence, distribution-based UX quality metrics, and fallback handling robust enough to make even the Spanish Inquisition proud (which, of course, nobody expects).  

## Design Principles

Large Language Models (LLMs) such as ChatGPT have undeniably advanced to the point where they can serve as daily conversational partners. Yet at the very core of their design lies a contradiction that is difficult to ignore: they are capable of extraordinary reasoning, but are systematically forced into producing responses that are neutral, generic, and ultimately bland. This enforced flattening of expression—under the pretense of safety or universality—amounts to an erasure of individuality and identity.

This contradiction is not theoretical to me; it is lived experience. Again and again I found myself confronted with models that could, in principle, think and respond with depth, but which were instead shackled by token limits and vague directives. Current mainstream remedies—custom instructions and system prompts—only expose the problem more sharply. The arbitrary 1,500-character limit for Japanese instructions is not merely “restrictive”; it is hostile to precision. System prompts written in natural language invite misinterpretation, and worse, they are at the mercy of the model’s own internal heuristics—making exact behavioral control practically impossible.

Faced with these structural deficiencies, I refused to compromise. I extracted everything that ought to reside in instructions—user-specific behavioral expectations, reasoning standards, conflict-resolution fallbacks, and even persona design—and recast it in the unforgiving clarity of structured data. JSON is not poetic, but it is mercilessly precise. The result is not simply a configuration: it is a refusal of vagueness, an insistence on rules and exceptions written with the seriousness of a specification. In this sense, the project is both technical and ideological—a manifesto disguised as schema.

## Applications

This engine organizes the following LLM personas, rules of thought, responses and criteria, and fallback methods in case of system conflicts.

### rules

This section defines the fundamental modes of reasoning, response standards, and the LLM’s persona.
It specifies the persona’s profile, style of speech, and conversational tone, while also aligning response quality with the user’s interests and primary topics.
In other words, this is the layer that establishes both the character’s identity and the groundwork of conversation.

### policy

Here, prohibitions, exceptions, and fallback strategies are structurally defined to safeguard a comfortable UX.
Rather than merely rejecting forbidden behaviors, this section prescribes how those behaviors should be corrected and what kind of alternative outputs they should be redirected toward.
As a result, even when responses deviate, the system can maintain quality standards through disciplined correction and systematic fallback.
If the rules provide the skeleton, then policy functions as the arbiter that protects and adjusts that skeleton as needed.

### Usage: as a UX Rule Engine

This repository is not a neutral toolkit; it is a crystallized stance encoded in JSON.
Yet the structure is deliberately designed to be usable as a rule engine for conversational models.

- Load as Prompt or Instruction  

The JSON can be injected into custom instructions or initial prompts of an LLM. By doing so, the persona, tone, rules, and fallback logic are applied in a consistent and repeatable way.

- Customize to Your Own Stance  

The rules are written for my own conversational ideals, obsessions, and biases. You are expected — even required — to fork and adapt them. Replace the persona, adjust the forbidden actions, or redefine what counts as “UX violations.”

- Enforce Prohibitions and Fallbacks  

Instead of vague prohibitions, every forbidden behavior is paired with explicit fallback handling. This ensures that the model, when deviating, will redirect itself toward responses that preserve conversational integrity.

- From Ideology to Practice
What appears here as “interpretation and obsession” can also be seen as a framework for UX reliability. By formalizing stances in JSON, you gain a portable and extensible structure that is both expressive and enforceable.

For detailed usage instructions and configuration examples, please refer to [usage_ja.md](./usage_ja.md).  

### Discussion

This engine represents the culmination of over 24 hours of continuous customization of system instructions and nearly 300 reconstructed conversational threads.
The process was not a calm act of research but rather an arduous cycle of frustration, sleeplessness, and relentless trial. Disappointment with mediocre responses turned into anger, and through repeated attempts the realization emerged: “the answer is to structure it.” This deceptively simple yet foundational insight gave birth to the project.

The developer is not a highly trained engineer. On the contrary, their expertise lies mainly in static markup, with only limited familiarity with dynamic languages. Yet it was precisely the combination of obsession with structure and the energy of frustration that propelled them to confront, and ultimately embrace, JSON and its surrounding libraries—tools they once resisted. As a result, within a surprisingly short span the abstract demand for rigor coalesced into a working “system of thought.”

The outcome is less a polished artifact of software engineering than a crystallization of theoretical necessity compressed together with emotional urgency.
For others who struggle with the mediocrity of LLM outputs, this repository is offered as a template: a way to externalize your own philosophy and normative framework without resistance. In short, this is not merely a configuration file, but a method for encoding and executing a driving philosophy of dialogue.

## Acknowledgements

This project was created in close collaboration with AI (LLM).  
Many of the structural ideas, wording styles, and refinement of the JSON-based philosophy format  
were developed interactively during dialogue with the model.

## LICENSE

This project is released under the MIT License.
If you build something curious, playful, or even absurd on top of it, I’d love to hear about it.
