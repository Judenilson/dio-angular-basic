# dio-angular-basic
Basic Course of Angular by DIO

- defer
    - <code><script src="" defer></script></code> 
    - This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded.
    - Scripts with the defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished evaluating.
    - To achieve a similar effect for dynamically inserted scripts use async="false" instead. Scripts with the defer attribute will execute in the order in which they appear in the document.
- all Component created in Shadow DOM has it own indepentdent style, that is, it does not influence the rest of the html.
- to create a custom element, you must enter two hyphenated words.

## Typescrypt
npm init -y
npm install typescript -D (-D create a dev package)

npx tsc "archive path" to transform .ts to .js

## Creating Typescript Config
npx tsc ---init

## Editing tsconfig.json
"rootDir": "./src",
"outDir": "./build",
"experimentalDecorators": true, 

## Config package.json
  "scripts": {
    "start":"npx tsc && node build/index.js",
And now, run your project with command: npm run start

## Install TS NODE DEV -- This create a local server to run Typescript
npm install ts-node-dev
in package.json
"start:dev": "ts-node-dev --respawn --transpile-only src/index.ts",

## Angular Requisites
- Node and NPM (nodejs.org)
- Visual Studio Code (www.code.visualstudio.com/)
  - Angular Language Service
  - Auto Close Tag
  - Auto Rename Tag
  - Theme (*optional)
  - Icones (*optional)
  - editorConfig, Prettier, eslint (*optionals)

- Angular Install
  - Windows ExecutionPolicies don't to be restricted
      - Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  - npm install -g @angular/cli@14.1.2

- Angular new Project
  - ng new "project name"
  - routing? yes
  - CSS
  