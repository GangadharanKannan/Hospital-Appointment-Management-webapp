const jwt = require('jsonwebtoken');

const authUser = async (req,res,next) => {
    try {

        const { token } = req.headers;

        if (!token) {
            return res.json({success:false, message: "Not Authorized Login again"})
        }
        const token_decode = jwt.verify( token, process.env.JWT_SECRET)
        req.userId =  token_decode.id
        next();

    } catch (error) {
        res.json({success:false, message: error.message})
    }
}

module.exports = authUser