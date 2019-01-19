# Setup
Because of the use of font-awesome you'll need to do the following
in your code:
```javascript
import {library} from '@fortawesome/fontawesome-svg-core'
import {
	faBan,
	faEdit,
	faPlus,
	faSave,
	faSync,
	faTrash
}                from '@fortawesome/free-solid-svg-icons'


library.add(
	faBan,
	faEdit,
	faPlus,
	faSave,
	faSync,
	faTrash
)
```

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
