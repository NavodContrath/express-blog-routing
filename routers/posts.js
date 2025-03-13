const express = require('express')
const router = express.Router()

//index
router.get('/', (req, res) => {
    res.send("send all posts")
})
//byId(show)
router.get('/:slug', (req, res) => {
    res.send(`show post with slug:${req.params.slug}`)
})
