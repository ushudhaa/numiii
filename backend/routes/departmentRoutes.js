import express from 'express';
import { getDepartmentById,createDepartment,updateDepartment,deleteDepartment, getDepartments } from '../controllers/departmentControllers'
import { authenticateToken } from '../middlewares/authMiddleware';


const router=express.Router();

//protected employee routes (router authentication)
router.get('/',getDepartments);
router.post("/",createDepartment);
router.put("/:id",updateDepartment);
router.delete("/:id",deleteDepartment);

export default router;
