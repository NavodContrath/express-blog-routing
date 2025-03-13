const express = require('express')
const router = express.Router()
const posts = require('../posts')

//index
router.get('/', (req, res) => {
    res.json(posts)
})
//byId(show)
router.get('/:slug', (req, res) => {
    posts.forEach((post) => {
        console.log(post.slug)
        if (req.params.slug === post.slug) {
            res.json(post)
        } else ('item not in database')
    })
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