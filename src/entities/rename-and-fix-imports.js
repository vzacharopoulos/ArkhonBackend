const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'atlantisEntities'); // <- CHANGE THIS!

// 1. Get all files in the folder (not recursive)
const files = fs.readdirSync(folderPath).filter(f => f.match(/\.(js|ts)$/));

// 2. Rename files (add .entity before extension)
files.forEach(file => {
  const ext = path.extname(file);
  const base = path.basename(file, ext);

  if (base.endsWith('.entity')) return; // Already renamed

  const oldPath = path.join(folderPath, file);
  const newFileName = `${base}.entity${ext}`;
  const newPath = path.join(folderPath, newFileName);

  fs.renameSync(oldPath, newPath);
  console.log(`Renamed: ${file} -> ${newFileName}`);
});

// 3. Get the new file list for fixing imports
const entityFiles = fs.readdirSync(folderPath).filter(f => f.match(/\.entity\.(js|ts)$/));

// 4. For each file, update its imports
entityFiles.forEach(file => {
  const filePath = path.join(folderPath, file);
  let code = fs.readFileSync(filePath, 'utf8');

  // Replace import paths that match ./SomeFile or ../SomeFile, but NOT if already .entity
  entityFiles.forEach(entityFile => {
    const ext = path.extname(entityFile);
    const base = path.basename(entityFile, ext);
    const withoutEntity = base.replace(/\.entity$/, '');

    // Patterns: "./Customer" or '../Customer' etc
    // Only update if not already importing .entity
    const importRegex = new RegExp(`(['"\`])((\\.\\.?\\/)+)${withoutEntity}(\\1)`, 'g');
    const importEntityPath = `$1$2${base}$1`;
    code = code.replace(importRegex, importEntityPath);
  });

  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`Fixed imports in: ${file}`);
});
