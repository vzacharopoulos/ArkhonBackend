const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'atlantisEntities'); // <-- CHANGE THIS

const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.ts'));

// Util to insert @ObjectType() before first @Entity
function insertObjectTypeDecorator(content) {
  // Only insert if not already present
  if (content.includes('@ObjectType()')) return content;

  const entityIndex = content.indexOf('@Entity');
  if (entityIndex === -1) return content; // Not an entity

  // Find line start for @Entity
  const before = content.substring(0, entityIndex);
  const after = content.substring(entityIndex);

  return `${before}@ObjectType()\n${after}`;
}

files.forEach(file => {
  const filePath = path.join(folderPath, file);
  let code = fs.readFileSync(filePath, 'utf8');

  // 1. Add import { ObjectType } from ... at the top (if not present)
  if (!code.includes('import { ObjectType } from "@nestjs/graphql";')) {
    code = `import { ObjectType } from "@nestjs/graphql";\n` + code;
  }

  // 2. Insert @ObjectType() before first @Entity
  code = insertObjectTypeDecorator(code);

  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`Added ObjectType decorator to: ${file}`);
});
