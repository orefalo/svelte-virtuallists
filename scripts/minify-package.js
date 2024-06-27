import { minify } from 'minify';

import { createMinifier } from './dtsminify/main.js'; // dts-minify on npm
import fs from 'fs';
import ts from 'typescript';

const dtsminifier = createMinifier(ts);

const simpleErrorCB = err => {
  if (err) throw err;
};

async function processPackage(path) {
  console.log('Minimizing package...');

  try {
    const files = fs.readdirSync(path);
    files.forEach(file => {
      const filePath = path + '/' + file;
      console.log('reading ' + filePath);

      if (file.endsWith('.d.ts')) {
        const f1 = filePath;
        const input = fs.readFileSync(filePath, 'utf8');
        const output = dtsminifier.minify(input);
        fs.unlink(f1, err => {
          if (err) throw err;
          fs.writeFile(f1, output, simpleErrorCB);
        });
      } else if (file.endsWith('.js')) {
        const f2 = filePath;
        minify(f2).then(output => {
          fs.unlink(f2, err => {
            if (err) throw err;
            fs.writeFile(f2, output, simpleErrorCB);
          });
        });
      } else if (file.endsWith('.svelte')) {
        const options = {
          js: {
            mangle: false,
            mangleClassNames: false,
            removeUnusedVariables: false,
            removeConsole: false
          },
          html: {
            collapseWhitespace: true,
            removeComments: true,
            removeEmptyAttributes: false,
            removeEmptyElements: false,
            removeOptionalTags: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyJS: true,
            minifyCSS: true
          },
          css: {
            compatibility: '*'
          }
        };

        const f3 = filePath;
        fs.rename(f3, f3 + '.html', err => {
          if (err) throw err;
          minify(f3 + '.html', options).then(output => {
            fs.unlink(f3 + '.html', err => {
              if (err) throw err;
              fs.writeFile(f3, output, simpleErrorCB);
            });
          });
        });
      } else {
        console.log('Ignoring file with unknown extension:', filePath);
      }

      //fs.writeFileSync(file + '.new', output);
    });
  } catch (err) {
    console.error('Error reading directory or files:', err);
  }
}

processPackage('./package/dist');
// TODO
// for each file in package/dist
// .js -> minifyJS
// .svelte -> minifySvelte
// .d.ts -> minifyDTS
