#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import program from 'commander';

console.log(
  chalk.white(figlet.textSync('TS-CLI', { horizontalLayout: 'full' }))
);

program
  .version('1.0.0')
  .name('tscli')
  .description('Template for a nodejs Typescript CLI')
  .option('-a, --all', 'Set all parameters')
  .option('-f, --foo', 'Set foo parameter', true)
  .option('--bar [value]', 'Set bar parameter', 'boo')
  .option('--baz <path>', 'Set baz parameter')
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
} else {
  console.log('Selected envs: ');
  console.log(`--all: ${program.all}`);
  console.log(`--foo: ${program.foo}`);
  console.log(`--bar: ${program.bar}`);
  console.log(`--baz: ${program.baz}`);
}
