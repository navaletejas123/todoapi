const User = require("../Model/User");
const bycrpt = require("bcrypt")
const jwt = require('jsonwebtoken')



exports.createUser = async (req, res) => {
    try {
        const ExitingUser = await User.findOne({ Email: req.body.Email });
        if (ExitingUser) return res.status(400).json({ errors: true, message: 'User already exiest' })
        const salut = await bycrpt.genSalt(10);
        const EnPassword = await bycrpt.hash(req.body.Password, salut);
        const user = new User({ Name: req.body.Name, Email: req.body.Email, Password: EnPassword });
        const data = await user.save();
        return res.status(200).json({ errors: false, data: data });
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message });
    }
};

exports.getAllUser = async (req, res) => {
    try {
        const data = await User.find();
        return res.status(200).json({ errors: false, data: data });
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message });
    }
};

exports.getUserByID = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findById(id);
        return res.status(200).json({ errors: false, data: data });
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json({ errors: false, data: data });
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id);
        return res.status(200).json({ errors: false, data: data });
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message });
    }
};


exports.login = async (req, res) => {
    try {
        const ExitingUser = await User.findOne({ Email: req.body.Email });
        if (!ExitingUser) return res.status(400).json({ errors: true, message: 'Email or Password is invalid' })

        const encryptedPass = await bycrpt.compare(req.body.Password, ExitingUser.Password);
        if (!encryptedPass) return res.status(400).json({ errors: true, message: 'Email or Password is invalid' })

        const token = await jwt.sign({ _id: ExitingUser._id }, process.env.SEC);

        return res.status(200).json({ errors: false, data: { token: token, user: ExitingUser } });



    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message });

    }
}