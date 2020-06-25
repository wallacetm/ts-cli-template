# Typescript CLI template

This is a nodejs typescript cli template for github repositories.
This repository has only a few configuration files and a initial cli parameters and helper output.

## Configurations

### eslint

Already configured some eslint rules, es6 env, ecmaVersion and typescript-eslint plugin like:

```json
{
  "parser": "@typescript-eslint/parser",
  "env": {
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "linebreak-style": [
      "error",
      "unix"
    ],
    "max-len": [
      "error",
      {
        "code": 80,
        "tabWidth": 2
      }
    ],
    "semi": [
      "error",
      "always"
    ],
    "arrow-parens": ["error", "as-needed"],
    "quotes": ["error", "single"],
    "array-bracket-spacing": ["error", "never"],
    "object-curly-spacing": ["error", "always"]
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  }
}
```

### Typescript Config

In the `tsconfig.json` file we set target to `ES2020` and module `commonjs` as default.

```json
{
  "compilerOptions": {
    "target": "ES2020",                       /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "declaration": true,                      /* Generates corresponding '.d.ts' file. */
    "outDir": "./dist/",                      /* Redirect output structure to the directory. */
    "rootDir": "./src/",                      /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    "strict": true,                           /* Enable all strict type-checking options. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    "skipLibCheck": true,                     /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  },
  "include": ["src"]
}

```

## CLI

The CLI have a few configured parameters as example: 

```javascript
import program from 'commander';

program
  .version('1.0.0')
  .name('tscli')
  .description('Template for a nodejs Typescript CLI')
  .option('-a, --all', 'Set all parameters')
  .option('-f, --foo', 'Set foo parameter', true)
  .option('--bar [value]', 'Set bar parameter', 'boo')
  .option('--baz <path>', 'Set baz parameter')
  .parse(process.argv);
```

An default helper output:

```javascript
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
```

This should have the output in the console:

```
  _____   ____             ____   _       ___
 |_   _| / ___|           / ___| | |     |_ _|
   | |   \___ \   _____  | |     | |      | |
   | |    ___) | |_____| | |___  | |___   | |
   |_|   |____/           \____| |_____| |___|

Usage: tscli [options]

Template for a nodejs Typescript CLI

Options:
  -V, --version  output the version number
  -a, --all      Set all parameters
  -f, --foo      Set foo parameter (default: true)
  --bar [value]  Set bar parameter (default: "boo")
  --baz <path>   Set baz parameter
  -h, --help     display help for command
```
