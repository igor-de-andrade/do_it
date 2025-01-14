class Quickview { 

    openQuickview() {
        const quickview = document.createElement('div')
        quickview.classList.add('quickview')

        console.log('teste2')

        quickview.innerHTML = `
        <div class="quickview__header">
            <p class="quickview__header__title">Tarefa</p>
        </div>
        <div class="quickview__body">
            <div class="input-text">
                <label class="label" required>Título</label>
                <input type="text" class="input-text__field" width="100%"></input>
            </div>
            <div class="textarea">
                <label class="label" required>Descrição</label>
                <textarea class="textarea__field"></textarea>
            </div>

            <div class="task-details">
                <div class="select">
                    <label class="label" required>Categoria</label>
                    <select class="select__field">
                        <option value="opcao1">Nenhuma</option>
                    </select>
                </div>

                <div class="input-date">
                    <label class="label" required>Prazo</label>
                    <input type="date" class="input-date__field">
                </div>

                <div class="select">
                    <label class="label" required>Status</label>
                    <select class="select__field">
                        <option value="opcao1">A fazer</option>
                        <option value="opcao2">Em andamento</option>
                        <option value="opcao3">Concluída</option>
                    </select>
                </div>

                <div class="input-date">
                    <label class="label" required>Conclusão</label>
                    <input type="date" class="input-date__field">
                </div>
            </div>

        </div>
        <div class="quickview__footer">
            <button class="button primary-button">Salvar</button>
            <button class="button secundary-button">Fechar</button>
        </div>
        `

        return quickview
    }
}

export default new Quickview;