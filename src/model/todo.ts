import mongoose, {Schema} from 'mongoose'


interface todoInstance{
    _id: string;
    description: string;
    status: string
}

const todoSchema = new Schema({
    description: {type: String},
    status: {type: String}
},
{
   timestamps: true
})

const Todo = mongoose.model<todoInstance>("Todos", todoSchema)

export default Todo