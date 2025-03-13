const express = require('express')
const app = express()
const port = 3000

//listening to server
app.listen(port, () => {
    console.log(`server starte in local host: http://localhost:${port}`)
})
