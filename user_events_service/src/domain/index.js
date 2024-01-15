const User_Events = require('../schema')

exports.updateLike = async(content_id, user_id) => {
    const options =  {upsert: true, new: true, setDefaultsOnInsert: true}
    const data = await User_Events.findOneAndUpdate(
       { content_id },
       {$addToSet:{liked_by:user_id}},
       options 
    )
    return data
}

exports.updateRead = async(content_id, user_id) => {
    const options =  {upsert: true, new: true, setDefaultsOnInsert: true}
    const data = await User_Events.findOneAndUpdate(
        { content_id },
        {$addToSet:{
            read_by: user_id
        }},
        options 
    )
    return data
}

exports.getContentLikes = async(content_id) => {
    const data = await User_Events.findOne({ content_id }, 'liked_by')
    return data
}

exports.getContentReads = async(content_id) => {
    const data = await User_Events.findOne({ content_id }, 'read_by')
    return data
}

exports.getPopularLikesContents = async() => {
    const data = await User_Events.aggregate([
        {
            $project:{
                _id:0,
                content_id: 1,
                liked_by:1,
                length:{$size:'$liked_by'}
            }
        },
        {$sort:{
            length: -1
        }}
    ])
    return data
}

exports.getPopularReadContents = async() => {
    const data = await User_Events.aggregate([
        {
            $project:{
                _id:0,
                content_id: 1,
                read_by:1,
                length:{$size:'$read_by'}
            }
        },
        {$sort:{
            length: -1
        }}
    ])
    return data
}