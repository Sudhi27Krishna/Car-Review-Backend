const User = require('../models/User');

const handleLogin = async (req, res) => {
    const { username, password } = req.body;

    const foundUser = await User.findOne({ username, password }).exec();

    if (!foundUser) return res.sendStatus(401);

    return res.json(foundUser);
}

module.exports = { handleLogin };