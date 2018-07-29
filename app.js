const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./api/cohorts');
const port = parseInt(process.env.PORT || 8080);
const cohorts = require('./cohorts');

// 'use strict';

// module.exports = require('./lib/express');

app.use(cors())

app.get('/', (req, res, next) => {
    res.send(JSON.stringify(cohorts))
})

app.get('/4', req, res, next) => {
    const person = findMatch(req.params.id, cohorts)
    if (!person) {
        res.status = 404
        res.json({
            error: {
                message: 'Error, ID does not exit!'
            }
        })
    }
    res.json({ cohorts: person })
}

app.listen(port, () => {
    console.log('listening here ', port)
})