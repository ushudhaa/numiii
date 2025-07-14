import express from 'express';
import {createEmployee, getEmployees, getEmployeeById, deleteEmployeeById,updateEmployeeById} from "../controllers/employeeController.js"
import { authenticateToken, roleMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

//const empRoute = router.post("/", createEmployee);
router.post('/',[authenticateToken,roleMiddleware(['admin','manager'])],createEmployee);
router.get('/',authenticateToken,getEmployees);
router.get('/:id',authenticateToken,getEmployeeById );
router.delete('/:id', [authenticateToken,roleMiddleware(['admin','manager'])],deleteEmployeeById);
router.put('/:id',[authenticateToken,roleMiddleware(['admin','manager'])],updateEmployeeById);

export default router;
