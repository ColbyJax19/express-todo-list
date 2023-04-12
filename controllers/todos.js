import {todoList} from "../models/todo.js"


const getTodosList = (request, response) => {
    // response.send(todoList)
    response.render('todoList.ejs', {
        todoData: todoList
    })
}

const getTodoDetail = (req, res) => {
    let todoId = req.params.todoId
    let todoDetail = todoList.find(todo => todo._id == todoId)
    res.render('todoDetail.ejs',{
        todo: todoDetail
    })
}

const newTodoPage = (req, res) =>{
    res.render('newTodo.ejs')
}

const createTodo = (request, response) => {
    //Store form data
    let toDoItem = (request.body.toDoItem)
    let todoId = todoList.length + 1
    //Push to list
    todoList.push({todo: toDoItem, done: false})
    //Redirect to homepage
    response.redirect('/todoList')
}

export{
    getTodosList, 
    createTodo,
    newTodoPage,
    getTodoDetail
}