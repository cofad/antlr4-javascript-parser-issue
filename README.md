# Antlr4 Parser Issue JavaScript

This repo is to demonstrate an issue when building the [JavaScript grammar](https://github.com/antlr/grammars-v4/tree/master/javascript/javascript) for the [JavaScript target](https://github.com/antlr/grammars-v4/tree/master/javascript/javascript/JavaScript) with the Antlr4 tool.

## Issue

When the Antlr4 parser is generated for the JavaScript target using the JavaScript Antlr4 grammar, the following error is shown when the parser is run:

```cmd
(node:16848) UnhandledPromiseRejectionWarning: SyntaxError: Identifier '_alt' has already been declared
    at Loader.moduleStrategy (internal/modules/esm/translators.js:145:18)
```

## Prerequisites

1. [Antlr4](https://www.antlr.org/)
1. [NodeJs](https://nodejs.org)
1. [NPM](https://nodejs.org)

## Install and Run

1. Install [Antlr4](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md) to build lexer/parser.
1. Download and build the lexer/parser:

   ```cmd
   npm run download-and-build
   ```

1. Run the test file to see the error:

   ```cmd
   npm run start
   ```

1. Run the fixer script to correct the issue:

   ```cmd
   npm run fix-parser
   ```

1. Re-run the test file, this time no error will be thrown:

   ```cmd
   npm run start
   ```
