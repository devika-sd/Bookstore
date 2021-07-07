// import jwt from 'jsonwebtoken'
const jwt =require( 'jsonwebtoken')
const generateToken = (id) =>{
    return jwt.sign({id} , process.env.JWT_SECRET_KEY ,{
        expiresIn: '30d' })
}
// export default generateToken
module.exports= generateToken