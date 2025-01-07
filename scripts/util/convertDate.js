export function convertDate(dateISO) {
    const date = new Date(dateISO)

    const formattedDate = date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })

    return formattedDate
}

export default convertDate;