// issues the npm command to publish the package
import child_process from 'node:child_process';
import os from 'node:os';
import { readPackageJSON } from './read-package-json.js';

if (process.argv.length < 3) {
  console.error('Usage: fetch-and-publish <NPM_OTP>');
  process.exit(1);
}

const packageJson = readPackageJSON();

const otp = process.argv[process.argv.length - 1];
const version = packageJson.version;

let repo = packageJson.repository?.url;
if (!repo) {
  throw new Error('Please add a repository.url section to package.json');
}

repo = repo.replace(/\.git$/, '');

if (!repo.startsWith('https://')) {
  throw new Error('Invalid Repository URL: it must start with https://');
}

const npmPostfixCommand = name => (os.platform() === 'win32' ? `${name}.cmd` : name);

const npmProc = child_process.spawn(npmPostfixCommand('npm'), [
  'publish',
  `${repo}/releases/download/v${version}/${packageJson.name}-${version}.tgz`,
  '--access',
  'public',
  '--otp',
  otp
]);

npmProc.stdout.on('data', data => {
  console.log(data.toString());
});

npmProc.stderr.on('data', data => {
  console.error(data.toString());
});
