const collection = require("../schema/taskSchema")

// list
const getTask = async (req, res) => {
    try {
        const result = await collection.find()
        res.render('list', { tasks: result })
    } catch (err) {
        res.send('task get Faild')
        console.log(err)
    }
}
//delete
const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        await collection.findByIdAndDelete(id)
        res.redirect('/')
    } catch (err) {
        res.send('not delete task')
        console.log(err)
    }
}

const addTask = async (req, res) => {
    try {
        await collection.create(req.body)
        res.redirect('/')
    } catch (err) {
        res.send('not Add task')
        console.log(err)
    }
}

const nevigate = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await collection.findById(id)
        console.log(result)
        res.render('update', { task: result })
    } catch {
        res.send('something wrong !!')
        console.log(err)
    }

}

const updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        await collection.findByIdAndUpdate(id, req.body)
        res.redirect('/')

    } catch {
        res.send('update Faild !!')
        console.log(err)
    }

}

const deleteMultiple = async (req, res) => {
    try {
        const ids = req.body.ids
        if(!ids){
            res.send('please select one !')
        }
        if (!Array.isArray(ids)) {
            await collection.findByIdAndDelete(ids)
        }
        else {
            await collection.deleteMany({ _id: { $in: ids } });
        }
        res.redirect('/')
    } catch (err) {
        console.log(err)
    }

}


module.exports = { getTask, deleteTask, addTask, nevigate, updateTask, deleteMultiple }