#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import program from 'commander';

console.log(chalk.white(figlet.textSync('W-FN', { horizontalLayout: 'full' })));

program
  .version('1.0.0')
  .name('wfn')
  .description('Functions to automate some works')
  .option('-a, --all', 'Set all functions')
  .option('-g, --git', 'Set git functions')
  .option('-m, --mvn', 'Set mvn functions')
  .option('-j, --java', 'Set java functions')
  .option('-n, --node', 'Set node functions')
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
