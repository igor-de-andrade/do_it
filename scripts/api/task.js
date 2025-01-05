const URL_BASE = 'http://localhost:8080'

const taskApi = {
    async getAllTasks() {
        try {
            const response = await axios.get(`${URL_BASE}/tasks`)
            return response.data
        } catch (error) {
            console.log('Erro ao buscar tarefas:', error)
            throw error
        }
    },
}

export default taskApi;