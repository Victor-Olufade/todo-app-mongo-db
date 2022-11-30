"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.updateOne = exports.showOne = exports.showAll = exports.createTodo = void 0;
const todo_1 = __importDefault(require("../model/todo"));
const createTodo = async (req, res) => {
    try {
        const todo = new todo_1.default({
            description: req.body.description,
            status: req.body.status,
        });
        const saved = await todo.save();
        if (saved) {
            return res.status(200).json({
                message: "To-do added successfully"
            });
        }
        else {
            return res.status(400).json({
                message: "Your to-do failed to saved"
            });
        }
    }
    catch (error) {
        res.status(500).json({
            Error: "Internal server error",
            route: "/todo/createtodo"
        });
    }
};
exports.createTodo = createTodo;
const showAll = async (req, res) => {
    try {
        const todos = await todo_1.default.find();
        return res.status(200).json({
            todos
        });
    }
    catch (error) {
        res.status(500).json({
            Error: "Internal server error",
            route: "/todo/showall"
        });
    }
};
exports.showAll = showAll;
const showOne = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await todo_1.default.findById(id);
        return res.status(200).json({
            todo
        });
    }
    catch (error) {
        res.status(500).json({
            Error: "Internal server error",
            route: "/todo/showall"
        });
    }
};
exports.showOne = showOne;
const updateOne = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const updated = {
        description: req.body.description,
        status: req.body.status
    };
    const update = await todo_1.default.findByIdAndUpdate(id, { $set: updated });
    if (update) {
        return res.status(200).json({
            message: "To-do updated successfully"
        });
    }
    else {
        return res.status(400).json({
            message: "Your to-do failed to saved"
        });
    }
};
exports.updateOne = updateOne;
const deleteOne = async (req, res) => {
    const id = req.params.id;
    const deleted = await todo_1.default.findOneAndRemove({ id });
    if (deleted) {
        return res.status(200).json({
            message: "To-do deleted successfully"
        });
    }
    else {
        return res.status(400).json({
            message: "Your to-do failed to saved"
        });
    }
};
exports.deleteOne = deleteOne;
