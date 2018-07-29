const express = require('express');
const cors = require('cors');
const data = require('./api/cohorts');
const port = parseInt(process.env.PORT || 8080);

const app = express();
app.use(cors())

function findMatch(data, id) {
    for (i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            return data[i];
        }
    }
    return null;
}

app.get('/', (req, res) => {
    res.json({ data });
})

app.get('/:id', function (req, res) {
    const cohort = findMatch(data, req.params.id);
    if (!cohort) {
        res.status(404).json({
            error: {
                message: 'Error, ID does not exit!'
            }
        })
    } else {
        res.json({ data: cohort })
    }
})

app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
