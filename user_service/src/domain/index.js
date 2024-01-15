const User = require('../schema')

exports.createuser = async({name, email, password, phoneNo})=>{
    const doc = new User({
        name: name,
        email: email,
        password: password,
        phoneNo: phoneNo
    })
    const data = await doc.save()
    return data
}

exports.checkuser = async({email, password}) => {
    const data = await User.findOne({email, password})
    return data
}

exports.getuserbyid = async(id) => {
    const data = await User.findById(id,'name email phoneNo').exec()
    return data
}
exports.getuserbymail = async(email) => {
    const data = await User.findOne({email:email}, '_id name')
    return data
}

exports.getlistofusers = async() => {
    const data = await User.find({},'-password -phoneNo')
    return data
}

exports.deleteuser = async(id) => {
    const data = await User.findByIdAndDelete(id)
    return data
}

exports.updatename = async(id, newName) => {
    const data = await User.findOneAndUpdate(
        {id: id},
        {name: newName},
        {new: true}
    )
    return data

}

exports.updatephone = async(id, newPhone) => {
    const data = await User.findOneAndUpdate(
        {id: id},
        {phone: newPhone},
        {new: true}
    )
    return data

}

exports.updatepassword = async(id, newPassword) =>{ 
    const data = await User.findOneAndUpdate(
        {id: id},
        {password: newPassword},
        {new: true}
    )
    return data
}