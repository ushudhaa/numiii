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
trim: true
}
});
const employee = mongoose.model('employee', employeeScheme)
export default employee;