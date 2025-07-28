const jwt = require('jsonwebtoken');

const authAdmin = async (req,res,next) => {
    try {

        const { atoken } = req.headers;

        if (!atoken) {
            return res.json({success:false, message: "Not Authorized Login again"})
        }
        const token_decode = jwt.verify( atoken, process.env.JWT_SECRET)

        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success:false, message: "Not Authorized Login again"})
        }

        next();

    } catch (error) {
        res.json({success:false, message: "Invalid Credentials"})
    }
}

module.exports = authAdmin