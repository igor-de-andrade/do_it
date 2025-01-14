import TaskComponent from "./components/task.js"
import Quickview from "./components/quickview.js"

const newTask = document.getElementById('new-task')

newTask.addEventListener('click', () => {
    console.log('teste')
    const quickviewElement = Quickview.openQuickview()

    document.body.appendChild(quickviewElement)
})

document.addEventListener('DOMContentLoaded', async () => {
    TaskComponent.renderTask()
})