const User = require("../models/User");

const registerNewUser = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) return res.status(400).json({ 'message': 'Username and password are required.' });
    const duplicate = await User.findOne({ username }).exec();

    if (duplicate) return res.sendStatus(409);

    try {
        const createdUser = await User.create({ username, email, password });
        console.log(createdUser);
        res.status(201).json({ msg: `New user ${createdUser.username} registered successfully` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error.message });
    }
}

module.exports = { registerNewUser };