#!/usr/bin/env node
'use strict';
var meow = require('meow');
var deliver = require('./');

var cli = meow([
	'Usage',
	'  $ deliver [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ deliver',
	'  unicorns & rainbows',
	'  $ deliver ponies',
	'  ponies & rainbows'
]);

console.log(deliver(cli.input[0] || 'unicorns'));
