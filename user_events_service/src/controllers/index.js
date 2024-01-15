const service = require('../service')

exports.likeContentController = async(req, res, next) => { 
    try {
        const user_id = req.user_id
        const content_id = req.query.content_id
        const data = await service.updateLike(content_id, user_id)
        res.status(201).json({ success: true })
    } catch(err){
        next(err)
    }
}

exports.readContentController = async(req, res, next) => { 
    try {
        const user_id = req.user_id
        const content_id = req.query.content_id
        const data = await service.updateRead(content_id, user_id)
        res.status(201).json({ success: true })
    } catch(err){
        next(err)
    }
}

exports.getContentLikes = async(req, res, next) => {
    try {
        const content_id = req.params.content_id
        const data = await service.getContentLikes(content_id)
        res.status(201).json({ result: data })
    } catch(err){
        next(err)
    }
}

exports.getContentReads = async(req, res, next) => {
    try {
        const content_id = req.params.content_id
        const data = await service.getContentReads(content_id)
        res.status(201).json({ result: data })
    } catch(err){
        next(err)
    }
}

exports.topLikedContents = async(req, res, next) => {
    try {
       const data = await service.getPopularLikesContents()
        res.status(201).json({ result: data })
    } catch(err){
        next(err)
    }
}

exports.topReadContents = async(req, res, next) => {
    try {
        const data = await service.getPopularReadContents()
        res.status(201).json({ result: data })
    } catch(err) {
        next(err)
    }
}