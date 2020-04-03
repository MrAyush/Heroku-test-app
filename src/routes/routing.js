const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({
        'status': 'success',
        'message': 'Hello world'
    })
})

router.get('/heroku', (req, res, next) => {
    res.json({
        'status': 'success',
        'message': 'Heroku serverip' + res.ip
    })
})

router.all('*', (req, res, next) => {
    let err = new Error('404, Page not found!!')
    err.status = 404
    next(err)
})

module.exports = router