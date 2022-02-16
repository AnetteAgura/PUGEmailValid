const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.use(express.urlencoded())

app.use('/', function (req, res) {
    let Email = req.body.email
    let message = null
    let messagea = null
    if (req.body.email) {
        if (Email.includes("@") && Email.includes(".")) {

            message = "✅ The email you entered is valid ✅"
        } else {
            messagea = "⛔ The email you entered is not valid ⛔"
        }
    }
    res.render('index', {
        title: 'Email format validation',
        message, messagea
    })
})

app.listen(4000, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Connection has been established on port 4000')
    }
})