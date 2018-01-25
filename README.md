# Bootstrap-React-Components

## Release Process
#### Manual
1. git flow release start vMM.mm.pp
2. npm run test:src
3. npm run test:harness
4. npm run test:host:start
5. npm run test:behavior
6. npm version major/minor/patch
6. npm build
7. npm publish