"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = require("../controller/todo");
const router = express_1.default.Router();
router.post('/createtodo', todo_1.createTodo);
router.get('/showall', todo_1.showAll);
router.get('/showone/:id', todo_1.showOne);
router.put('/updateone/:id', todo_1.updateOne);
router.delete('/deleteone/:id', todo_1.deleteOne);
exports.default = router;
