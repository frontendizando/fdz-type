# FDZ TypeChecker

A simple way to add hooks in any javascript aplication - Vanilla JS

## Browser Support

This library relies on [Map API](http://www.ecma-international.org/ecma-262/6.0/#sec-map-objects). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
49+ ✔ | 54+ ✔ | 47+ ✔ | 10.1+ ✔ | 11 ✔ |

## Dependencies

A tiny tool to become type check validation easy pizzy - Vanilla JS

## Installation

```sh
$ npm install fdz-typechecker --save
```

## How to use

### ES6

```js
// to import a specific method
import Typechecker from 'fdz-hook';

// using  method
Typechecker.is('string', someValue);
```

### CommonJS

```js
const Typechecker = require('fdz-typechecker');

const boolValue = Typechecker.is('string', "foo");
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="fdz-typechecker.umd.js"></script>

<!-- to import minified version -->
<script src="fdz-typechecker.umd.min.js"></script>
```

After that the library will be available to the Global as `Typechecker`. Follow an example:

```js

Typechecker.is('object', {});
```

## Methods

> Follow the methods that the library provides.

### Typechecker.is(type, value)

> Register a hook inside hook object

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`type`   |*string* | 'inform a type name'|
|`value`   |*any* | 'any value'|

**Example**

```js
Typechecker.is('object', {}); // true
Typechecker.is('string', {}); // false
```

### Typechecker.of(value)

> Call a hook from hook object

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`name`   |*any* | 'inform any value'|

**Example**

```js
hTypechecker.of({}); // object
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

|  ![Daniel Simão](https://avatars2.githubusercontent.com/u/4645658?v=4&s=460)|
|:---------------------:|
|  [Daniel Simão](https://github.com/simaodeveloper/)   |

See also the list of [colaborators](https://github.com/orgs/frontendizando/people) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
