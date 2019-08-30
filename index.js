let express = require("express")
let app = express()

app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.send({hi: 'tehre'})
})

const PORT = process.env.PORT || 6969;
app.listen(PORT)

