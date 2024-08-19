const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const fs = require('fs')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/jadval', (req, res) => {
    fs.readFile('./jadval.txt', 'utf8', function(err, data) {
        if (err) throw err;
        const jadval = JSON.parse(data)
        return res.json(jadval)
    });
})

app.post('/jadval', async (req, res) => {
    const data = req.body
    const a = await fs.writeFileSync( './jadval.txt', JSON.stringify(data) );
    return res.json({message: "data inserted"})
})

app.get('/duration', (req, res) => {
    fs.readFile('./davomiylik.txt', 'utf8', function(err, data) {
        if (err) throw err;
        const jadval = JSON.parse(data)
        return res.json(jadval)
    });
})

app.post('/duration', async (req, res) => {
    const data = req.body
    const a = await fs.writeFileSync( './davomiylik.txt', JSON.stringify(data) );
    return res.json({message: "data inserted"})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
