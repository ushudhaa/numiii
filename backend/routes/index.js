import express from 'express';
import empRoute from "./employeeRoutes.js";
import authRoutes from"./authroutes.js"

const router = express.Router();

//mount route models
router.use("/employees",empRoute)
router.use('/auth',authRoutes)
// router.use('/auth',authRoutes);
export default router;