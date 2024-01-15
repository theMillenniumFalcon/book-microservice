const events = require('../domain')

exports.updateLike = async(content_id, user_id) => {
    const data = await events.updateLike(content_id, user_id)
    return data
}

exports.updateRead = async(content_id, user_id) => {
    const data = await events.updateRead(content_id, user_id)
    return data
}

exports.getPopularLikesContents = async() => {
    const data = await events.getPopularLikesContents()
    return data
}

exports.getPopularReadContents = async() => {
    const data = await events.getPopularReadContents()
    return data
}

exports.getContentLikes = async(content_id) => {
    const data = await events.getContentLikes(content_id)
    return data
}

exports.getContentReads = async(content_id) => {
    const data = await events.getContentReads(content_id)
    return data
}