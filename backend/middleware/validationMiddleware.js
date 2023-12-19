const validateUserData = (req, res, next) => {
    const formData = req.body;
    if (formData.type === 2) {
        console.log('card is valid')
    } else {
        if (formData.age < 18 || formData.age > 65) {
            return res.status(400).json({ status: 'Invalid age. Must be between 18 and 65.' });
        }
    }
    next();
};

module.exports = { validateUserData };
