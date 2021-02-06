#!/usr/bin/env node

const argv = process.argv; 
const action = argv[2];
const dirName = argv[3];

require('../lib/index')(action, dirName);