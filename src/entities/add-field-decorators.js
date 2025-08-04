// // add-field-decorators.js
// const fs = require("fs");
// const path = require("path");

// // Directory containing your entity files
// const ENTITIES_DIR = path.join(__dirname, 'atlantisEntities'); // <-- CHANGE THIS

// const DECORATORS = [
//   "@Column",
//   "@OneToOne",
//   "@ManyToOne",
//   "@OneToMany",
//   "@ManyToMany"
// ];

// // Utility: add @Field decorator above specified lines
// function addFieldDecorators(content) {
//   const lines = content.split("\n");
//   let outLines = [];
//   for (let i = 0; i < lines.length; i++) {
//     const line = lines[i];

//     // Skip if @Field already present
//     if (line.trim().startsWith("@Field")) {
//       outLines.push(line);
//       continue;
//     }

//     const isRelDecorator = DECORATORS.some(d => line.trim().startsWith(d));

//     if (isRelDecorator) {
//       // For collections (OneToMany/ManyToMany), add array @Field
//       if (
//         line.trim().startsWith("@OneToMany") ||
//         line.trim().startsWith("@ManyToMany")
//       ) {
//         // Try to get field name/type for better annotation (optional)
//         // Otherwise, generic fallback:
//         outLines.push(`  @Field(() => [Object], { nullable: true })`);
//       } else {
//         outLines.push(`  @Field({ nullable: true })`);
//       }
//     }
//     outLines.push(line);
//   }
//   return outLines.join("\n");
// }

// // Read all .entity.ts files and process
// fs.readdirSync(ENTITIES_DIR).forEach(file => {
//   if (!file.endsWith(".entity.ts")) return;
//   const filePath = path.join(ENTITIES_DIR, file);
//   let content = fs.readFileSync(filePath, "utf8");

//   // Avoid duplicating import
//   if (!content.includes(`import { Field`)) {
//     content = `import { Field } from "@nestjs/graphql";\n` + content;
//   }

//   const updated = addFieldDecorators(content);

//   fs.writeFileSync(filePath, updated, "utf8");
//   console.log(`Processed: ${file}`);
// });

// fix-field-decorators.js
const fs = require("fs");
const path = require("path");

const folderPath =  path.join(__dirname, 'atlantisEntities'); // <-- CHANGE THIS


const files = fs.readdirSync(folderPath).filter(f => f.endsWith(".ts"));

const relationDecorators = [
  "@OneToMany",
  "@ManyToOne",
  "@OneToOne",
  "@ManyToMany"
];

files.forEach(filename => {
  const fullPath = path.join(folderPath, filename);
  let content = fs.readFileSync(fullPath, "utf8");

  // Use regex to find each @Field followed by a relation decorator
  // Capture the class name inside the relation decorator
  content = content.replace(
    /@Field\(\(\) => \[(.*?)\], ?\{[^)]*\}\)\s*\n\s*@OneToMany\(\(\) => ([A-Za-z0-9_]+),/g,
    (_match, _fieldType, relationClass) =>
      `@Field(() => [${relationClass}], { nullable: true })\n  @OneToMany(() => ${relationClass},`
  );

  // Repeat for non-array relations
  content = content.replace(
    /@Field\(\(\) => (Object), ?\{[^)]*\}\)\s*\n\s*@(OneToOne|ManyToOne|ManyToMany)\(\(\) => ([A-Za-z0-9_]+),/g,
    (_match, _fieldType, decoratorType, relationClass) =>
      `@Field(() => ${relationClass}, { nullable: true })\n  @${decoratorType}(() => ${relationClass},`
  );

  fs.writeFileSync(fullPath, content, "utf8");
  console.log(`Fixed: ${filename}`);
});

console.log("Done!");