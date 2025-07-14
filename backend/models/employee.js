import mongoose from 'mongoose';


const employeeScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match:  [/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type: String,
        required: true,
        trim: true,

    },
    role:{
        type : String,
        enum: ['admin','employee','manager'],
        default:'employee'
    }

});
const employee = mongoose.model('employee', employeeScheme)
export default employee;