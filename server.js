//import module
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import{router as todoRouter} from './routes/todos.js'


//create express app
const app = express()



//Configure the app (app.set)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Mount Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//mount router
app.use('/', todoRouter)

// Tell app to listen on a port
app.listen(5000, () => {
    console.log('port is connected')
})