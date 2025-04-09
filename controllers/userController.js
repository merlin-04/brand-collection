const users = require('../models/userModel')
const jwt = require('jsonwebtoken')


//register
exports.registerController = async (req, res) => {
    console.log("Inside Register controller");
    console.log(req.body);
    const { username, email, password } = req.body
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("Already Existing User..Please Login")
        } else {
            const newUser = new users({
                username, email, password, profilePic: ""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }

    } catch (err) {
        console.log(err);

    }
}
//login

exports.loginController = async (req, res) => {
    console.log("loginController");
    const { email, password } = req.body
    console.log(email, password);
    try {
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            //jwt token generation
            const token = jwt.sign({ userId: existingUser._id }, process.env.JWTPASSWORD)
            res.status(200).json({ user: existingUser, token })
        } else {
            res.status(404).json("Incorrect email/password")
        }
    } catch (err) {
        res.status(401).json(err)
    }


}
//profile update
// need authorization
exports.editUserController = async (req, res) => {
    console.log("inside editUserController");

    const { username, email, password, profilePic } = req.body
    const uploadProfileImg = req.file ? req.file.filename : profilePic
    const userId = req.userId
    try {
        const updatedUser = await users.findByIdAndUpdate({ _id: userId }, {
            username, email, password,profilePic: uploadProfileImg
        }, { new: true })
        await updatedUser.save()
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(401).json(err)
    }
}

//user deletion
exports.deleteUserController = async(req,res)=>{
    console.log("inside deleteUserController");
    const { id } = req.params.id
    try {
        const deleteUser = await projects.findByIdAndDelete({ _id: id })
        res.status(200).json(deleteUser)
    } catch (err) {
        res.status(401).json(err)
    }
    
}