const router = require('express').Router()
const events_controller = require('../controllers')
const { verifyToken } = require('../utils/auth')

router.put('/like',verifyToken, events_controller.likeContentController)
router.put('/read',verifyToken, events_controller.readContentController)
router.get('/top/liked', events_controller.topLikedContents)
router.get('/top/reads', events_controller.topReadContents)
router.get('/:content_id/likes',verifyToken, events_controller.getContentLikes)
router.get('/:content_id/reads',verifyToken, events_controller.getContentReads)

module.exports = router