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
//store(create)
router.post('/', (req, res) => {
    res.send("store post in server")
})
//update
router.put('/:slug', (req, res) => {
    res.send(`update post with slug:${req.params.slug}`)
})
//modify(partially update)
router.patch('/:slug', (req, res) => {
    res.send(`modify post wth slug:${req.params.slug}`)
})
//delete
router.delete('/:slug', (req, res) => {
    res.send(`delete post with slug:${req.params.slug}`)
})
module.exports = router