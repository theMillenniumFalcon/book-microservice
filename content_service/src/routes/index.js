const router = require('express').Router()
const contents = require('../controllers')
const { verifyToken } = require('../utils/auth')

router.post('/', verifyToken, contents.createContentController)
router.get('/new', verifyToken, contents.getNewContentsController)
router.get('/top/liked', verifyToken, contents.getTopLikedContents)
router.get('/top/reads', verifyToken, contents.getTopReadContents)
router.get('/:content_id', verifyToken, contents.getContentController)
router.patch('/:content_id/update-story', verifyToken, contents.updateStory)
router.patch('/:content_id/update-title', verifyToken, contents.updateTitle)
router.delete('/', verifyToken, contents.deleteContent)

module.exports = router