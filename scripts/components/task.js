import taskApi from "../api/task.js"
import convertDate from "../util/convertDate.js"

class TaskComponent {

    createTask(task) {
        const taskElement = document.createElement('div')
        taskElement.classList.add('task')
        
        const taskElementName = document.createElement('p')
        taskElementName.classList.add('task__name')
        taskElementName.textContent = task.name
        
        const taskElementDescription = document.createElement('p')
        taskElementDescription.classList.add('task__description')
        taskElementDescription.textContent = task.description

        const taskElementDetails = document.createElement('div')
        taskElementDetails.classList.add('task__details')

        const taskElementDeadline = document.createElement('div')
        taskElementDeadline.classList.add('task__deadline')

        const deadline = convertDate(task.deadline)

        taskElementDeadline.innerHTML = `
            <p><b>Prazo:</b></p>
            <p>${deadline}</p>
        `

        const taskElementTag = document.createElement('p')
        taskElementTag.classList.add('tag')

        switch (task.status) {
            case "TO_DO":
                taskElement.classList.add('to-do')
                taskElementTag.classList.add('tag__to-do')
                taskElementTag.textContent = "A fazer"
                break;
            case "IN_PROGRESS":
                taskElement.classList.add('in-progress')
                taskElementTag.classList.add('tag__in-progress')
                taskElementTag.textContent = "Em andamento"
                break;
            case "COMPLETED":
                taskElement.classList.add('completed')
                taskElementTag.classList.add('tag__completed')
                taskElementTag.textContent = "Concluída"
                break;
        }

        taskElementDetails.appendChild(taskElementDeadline)
        taskElementDetails.appendChild(taskElementTag)
        taskElement.appendChild(taskElementName)
        taskElement.appendChild(taskElementDescription)
        taskElement.appendChild(taskElementDetails)

        return taskElement
    }

    async renderTask() {
        try {
            const tasks = await taskApi.getAllTasks()
            const taskList = document.getElementById('task-list')

            tasks.forEach(task => {
                const taskElement = this.createTask(task)
                taskList.appendChild(taskElement)
            })

        } catch (error) {
            console.error('Erro ao renderizar tarefas:', error)
        }
    }
}

export default new TaskComponent;