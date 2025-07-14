import { get } from 'mongoose';
import Employee from '../models/employee.js';
import bcrypt from 'bcryptjs';

const createEmployee = async (req, res) => { 
  try {
    const employee = new Employee(req.body);
    const hashedPassword = await bcrypt.hash(employee.password, 10);
    employee.password = hashedPassword;
    const savedEmployee = await employee.save();
    
    res.status(201).json({
      success: true,
      message: 'Employee created successfully',
      data: savedEmployee
    });
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).json({
      success: false,


      
      message: 'Error creating employee',
      error: error.message
    });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({
      success: true,
      message: 'Employees retrieved successfully',
      data: employees
    });
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving employees',
      error: error.message
    });
  }
};

const getEmployeeById = async (req, res) => {
  const { id } = req.params;

  
  
  try {
    const employee = await Employee.findById(id);
    if (!employee)
    return res.status(400).json({
      success: false,
      message: 'Employee ID does not exist'
    });
    res.status(200).json({
      success: true,
      message: 'Employee retrieved successfully',
      data: employee
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving employee',
      error: error.message
    });
  }
}

const deleteEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Employee deleted successfully',
      data: employee
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting employee',
      error: error.message
    });
  }
}

const updateEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    if (password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;
    }
    const employee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
    if (!employee) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Employee updated successfully',
      data: employee
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating employee',
      error: error.message
    });
  }
}

export {createEmployee, getEmployees, getEmployeeById, deleteEmployeeById, updateEmployeeById};