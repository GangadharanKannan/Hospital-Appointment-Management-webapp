const jwt = require('jsonwebtoken');

const authDoctor = async (req,res,next) => {
    try {

        const { dtoken } = req.headers;

        if (!dtoken) {
            return res.json({success:false, message: "Not Authorized Login again"})
        }
        const token_decode = jwt.verify( dtoken, process.env.JWT_SECRET)
        req.docId =  token_decode.id
        next();

    } catch (error) {
        res.json({success:false, message: error.message})
    }
}

module.exports = authDoctor