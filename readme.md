# android-deliver [![Build Status](https://travis-ci.org/stephanebachelier/android-deliver.svg?branch=master)](https://travis-ci.org/stephanebachelier/android-deliver)

## Notice

Currently in heavy development..

## Install

```
$ npm install --save android-deliver
```


## Usage

```js
const deliver = require('android-deliver');

deliver('unicorns');
//=> 'unicorns & rainbows'
```


## API

### deliver(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global android-deliver
```

```
$ android-deliver --help

  Usage
    android-deliver [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ android-deliver
    unicorns & rainbows
    $ android-deliver ponies
    ponies & rainbows
```


## License

MIT © [Stéphane Bachelier](http://github.com/stephanebachelier)
