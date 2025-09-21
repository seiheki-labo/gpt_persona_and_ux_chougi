const fs = require('fs');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const schema = JSON.parse(fs.readFileSync('../schema.json','utf8'));
const data   = JSON.parse(fs.readFileSync('../instruction.json','utf8'));

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);
const validate = ajv.compile(schema);
const ok = validate(data);

if (ok) {
  console.log('✅ JSON valid!');
} else {
  console.error('❌ JSON invalid:\n', validate.errors);
  process.exit(1);
}