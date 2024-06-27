import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(import.meta.url);

function findPackageJson(currentPath) {
  let filePath = path.join(currentPath, 'package.json');

  while (!fs.existsSync(filePath) && currentPath !== path.parse(currentPath).root) {
    currentPath = path.dirname(currentPath);
    filePath = path.join(currentPath, 'package.json');
  }

  return fs.existsSync(filePath) ? filePath : null;
}

export function readPackageJSON(currentPath) {
  const packageJsonPath = currentPath ? findPackageJson(currentPath) : findPackageJson(__dirname);

  if (packageJsonPath) {
    try {
      const data = fs.readFileSync(packageJsonPath, 'utf8');
      const packageData = JSON.parse(data);
      return packageData;
    } catch (err) {
      console.error('Error reading package.json:', err);
      return null;
    }
  } else {
    console.error('package.json not found');
    return null;
  }
}
