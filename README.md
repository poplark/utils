# wukong-utils

## Commands

1. `npm run update`

	import xx.js (an util) into index.js automatically

2. `npm run dev`

	export development version into `dist` folder

	***The `dist` folder is the temporary folder.***

3. `npm test`

	run test function base on the lib in `dist` folder

	`npm run test -- --part xxx` will run `xxx` test only

4. `npm run build`

	build the src file into `lib` folder

## Function points

- clone
- debounce & throttle [防抖&节流](https://blog.csdn.net/duola8789/article/details/78871789)

- DOM event
	- on
	- off
- isType

	- isArray
	- isBoolean
	- isDate
	- isFunction
	- isNaN
	- isNil
	- isNull
	- isNumber
	- isObject
	- isPlainObject
	- isRegex
	- isString
	- isUndefined


## Todo

Basic

- Promise
- Symbol
- defineProperty, editable...

DOM

- getClientRectange
- vertical center
- ...
