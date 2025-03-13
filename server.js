const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts')

//listening to server
app.listen(port, () => {
    console.log(`server starte in local host: http://localhost:${port}`)
})
//middleware
app.use('/posts', postsRouter)
