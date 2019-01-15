const express = require("express")
const path = require("path")
const cors = require('cors')

const app = express()
const publicFolderPath = path.join(__dirname, "public")

app.use(express.json())
app.use(express.static(publicFolderPath))
app.use(cors())

let users = {}
let userID = 1

// add POST request listener here
app.post('/api/user/', function (req, res) {

    const responseBody = req.body
    console.log(responseBody.username)

    if (!users[responseBody.username]) {
        users[responseBody.username] = responseBody
        users[responseBody.username].id = userID
        userID++
        res.statusCode = 201

        res.send(req.body)
        res.end()
    } else {
        res.statusCode = 409
        res.end("USERNAME OR PASSWORD ALREADY TAKEN")
    }
})

app.get('/api/user/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/javascript');
    const responseBody = JSON.stringify(users);
    res.send(responseBody);
    res.end(responseBody)
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});