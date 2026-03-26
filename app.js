const express = require('express')
const app = express()
const path = require('path')
const controller = require('./controller/taskController')
const connectDB = require('./database/db')
const port = 3000

//database call
connectDB();

//set view engin
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

//path
const filepata = path.resolve('public')
app.use(express.static(filepata))

// list
app.get('/', controller.getTask)

//delete
app.get('/delete/:id', controller.deleteTask)

// add page render
app.get('/add',(req,res)=>{
    res.render('add')
})
// add task
app.post('/addtask', controller.addTask)

//nevigate
app.get('/nevigate/:id',controller.nevigate)

//update
app.post('/update/:id', controller.updateTask)

//multiple item delete
app.post('/delete-multiple',controller.deleteMultiple)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})