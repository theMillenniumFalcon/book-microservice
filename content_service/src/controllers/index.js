const service = require('../service/content')

exports.createContentController = async (req,res,next) => {
    try {
        const user_id = req.user_id
        const {title,story} = req.body
        const data = await service.createcontent(title,story,user_id)
        res.status(201).json({result:data})
    } catch(err) {
        next(err)
    }
}

exports.getContentController = async (req,res,next) => {
    try {
       const data = await service.getcontent(req.params.content_id)
       res.status(201).json({result:data}) 
    } catch(err) {
        next(err)
    }
}

exports.getNewContentsController = async (req,res,next) => {
    try {
        const data = await service.getnewcontents()
        res.status(201).json({result:data})
    } catch(err) {
        next(err)
    }
}

exports.updateStory = async (req,res,next) => {
    try {
        const {story} = req.body
        const content_id = req.params.content_id
        const data = await service.updatestoty(content_id,story)
        res.status(200).json({success:true})
    } catch(err) {
        next(err)
    }
}

exports.updateTitle = async (req,res,next) => {
    try {
        const {title} = req.body
        const content_id = req.params.content_id
        const data = await service.updateTitle(content_id,title)
        res.status(200).json({success:true})
    } catch(err) {
        next(err)
    }
}

exports.getTopLikedContents = async (req, res,next) => {
    try {
        const data = await service.getTopLikedContents() 
        res.status(201).json({result:data})
    } catch(err) {
        next(err)
    }
} 

exports.getTopReadContents = async (req, res,next) => {
    try {
        const data = await service.getTopReadContents() 
        res.status(201).json({result:data})
    } catch(err) {
        next(err)
    }
} 

exports.deleteContent = async (req,res,next) => {
    try{
        const content_id = req.query.content_id
        const data = await service.deleteContent(content_id) 
        res.status(201).json({ success: true })
    } catch(err) {
        next(err)
    }
}