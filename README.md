# FDZ Hooks

A simple way to add hooks in any javascript aplication - Vanilla JS

## Browser Support

This library relies on [Map API](http://www.ecma-international.org/ecma-262/6.0/#sec-map-objects). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
49+ ✔ | 54+ ✔ | 47+ ✔ | 10.1+ ✔ | 11 ✔ |

## Dependencies

This library is totally make in Vanilla JS

## Installation

```sh
$ npm install fdz-hook --save
```

## How to use

### ES6

```js
// to import a specific method
import Hook from 'fdz-hook';

const hook = new Hook();

// using  method
hook.register('click', () => console.log('Works!'));
```

### CommonJS

```js
const Hook = require('fdz-hook');

const hook = new Hook();
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="fdz-hook.umd.js"></script>

<!-- to import minified version -->
<script src="fdz-hook.umd.min.js"></script>
```

After that the library will be available to the Global as `Hook`. Follow an example:

```js

const hook = new Hook();

hook.register('beforeOpen', () => {
  console.log('Opening!');
});
```

## Methods

> Follow the methods that the library provides.

### hook.register(name, fn)

> Register a hook inside hook object

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`name`   |*string* | 'inform a hook name'|
|`fn`   |*function* | 'provide a callback'|

**Example**

```js
hook.register('beforeMount', (instance) => {
  // do something
});
```

### hook.call(name, args1, args2...)

> Call a hook from hook object

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`name`   |*string* | 'inform a hook name'|
|`args`   |*any* | 'provide arguments one by one'|

**Example**

```js
hook.call('beforeMount', { name: 'Lorem' });
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
