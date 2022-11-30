import express,{ Request, Response } from "express";
import { createTodo, deleteOne, showAll, showOne, updateOne } from "../controller/todo";


const router = express.Router()

router.post('/createtodo', createTodo)
router.get('/showall', showAll)
router.get('/showone/:id', showOne)
router.put('/updateone/:id', updateOne)
router.delete('/deleteone/:id', deleteOne)





export default router