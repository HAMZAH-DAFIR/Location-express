const User = require('../models/user');

exports.singUp = (req, res) => {
    const user = new User(req.body);
    // return res.json(user);
    user.save((err, user) => {
        if (err) return res.status(400).json({
            error: 'your credentiels incorrect'
        });
        return res.status(201).json({
            success: true,
            message: 'your compte was created successfully',
            user: user
        });
    })
}