import express from 'express'
// Initialize Our Router Object
const router = express.Router()
// DONT forget the .js extension for ES Modules
import * as todoController from '../controllers/todos.js'
// import { getTodosList, createTodo } from '../controllers/todos.js'
// Write Routes Below
// Add routes for our endpoints
// app.get(), app.post(), app.delete(), app.put(), app.patch() etc...

// We can call the variable after the : whatever we want
router.get('/todo/:todoId', todoController.getTodoDetail)


router.get('/newTodo', todoController.newTodoPage)


router.get('/todoList', todoController.getTodosList)
// Create ToDo route 
// <form method="post" action="/createTodo">
router.post('/createTodo', todoController.createTodo)
// Export our Router object
export {
    router
}