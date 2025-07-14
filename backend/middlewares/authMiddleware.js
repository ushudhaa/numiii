import jwt from 'jsonwebtoken';
import employee from '../models/employee.js';

const authenticateToken = async (req,res,next) =>{
    
try{
const token = req.cookies.token;


if(!token){
    res.status(401).json({
        status: false,
        message: "Unauthorized"
    })
}

const decoded = jwt.verify(token,"a-string-secret");
req.employee = await employee.findById(decoded.Id).select('-password');

next()
}
catch(Exception){
    console.log(Exception.message);
    res.status(401).json({
        status:false,
        message: "unauthorized"
    })
}
}

const roleMiddleware = (role) => {
    return (req,res,next) =>{
        // if(!req.employee.role === role){
        if(!role.includes(req.employee.role)){
            return res.status(401).json({
                status:false,
                message: "unauthorized"
            })
        }
        next();
    }
}
export {authenticateToken, roleMiddleware};