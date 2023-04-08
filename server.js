//import module
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'


//create express app
const app = express()

//Sample Database
const todoList = [
    {todo: "Fill out the form below and click submit to add an item!", done: false},

]

//Configure the app (app.set)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Mount Middleware

app.use(express.json())
app.use(express.urlencoded({extended: false}))


// Mount Routes
app.get("/todoList", (request, response) => {
    // response.send(todoList)
    response.render('todoList.ejs', {
        todoData: todoList
    })
})

//Creat route for form submission
app.post("/createToDo", (request, response) => {
    //Store form data
    let toDoItem = (request.body.toDoItem)
    //Push to list
    todoList.push({todo: toDoItem, done: false})
    //Redirect to homepage
    response.redirect('/todoList')
})

// Tell app to listen on a port
app.listen(5000, () => {
    console.log('port is connected')
})