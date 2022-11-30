import express,{ Request, Response } from "express";
import Todo from "../model/todo";



export const createTodo=async(req: Request, res: Response)=>{

    try {
        const todo = new Todo({
            description: req.body.description,
            status: req.body.status,
        })
        const saved = await todo.save()
        if(saved){
            return res.status(200).json({
                message: "To-do added successfully"
            })
        }else{
            return res.status(400).json({
                message: "Your to-do failed to saved"
            })
        }
    } catch (error) {
            res.status(500).json({
            Error: "Internal server error",
            route: "/todo/createtodo"
        });
    }

}

export const showAll=async(req: Request, res: Response)=>{
    try {
        const todos = await Todo.find()
        return res.status(200).json({
            todos
        })
    } catch (error) {
            res.status(500).json({
            Error: "Internal server error",
            route: "/todo/showall"
        });
    }
   
}

export const showOne=async(req: Request, res: Response)=>{
    try {
        const id = req.params.id
        const todo = await Todo.findById(id)
        return res.status(200).json({
            todo
        })
    } catch (error) {
            res.status(500).json({
            Error: "Internal server error",
            route: "/todo/showall"
        });
    }
   
}

export const updateOne=async(req: Request, res: Response)=>{
    const id = req.params.id
    console.log(id);
    
    const updated = {
        description: req.body.description,
        status: req.body.status
    }

    const update = await Todo.findByIdAndUpdate(id, {$set: updated})
    if(update){
        return res.status(200).json({
            message: "To-do updated successfully"
        })
    }else{
        return res.status(400).json({
            message: "Your to-do failed to saved"
        })
    }
}

export const deleteOne=async(req: Request, res: Response)=>{
    const id = req.params.id as string
    const deleted = await Todo.findOneAndRemove({id})
    if(deleted){
        return res.status(200).json({
            message: "To-do deleted successfully"
        })
    }else{
        return res.status(400).json({
            message: "Your to-do failed to saved"
        })
    }
}







