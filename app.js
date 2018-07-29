/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000

// 'use strict';

// module.exports = require('./lib/express');

app.listen(port, () => {
    console.log('listening here ', port)
})