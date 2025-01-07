import TaskComponent from "./components/task.js"

// const newTask = document.getElementById('new-task')

// newTask.addEventListener('click', async () => {
//     try {
//         const tasks = await taskApi.getAllTasks()
//         console.log(tasks)
//     } catch(error) {
//         console.error('Erro supremo:', error)
//     }
// })

document.addEventListener('DOMContentLoaded', async () => {
    TaskComponent.renderTask()
})