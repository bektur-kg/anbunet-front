export const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = date.getUTCDate()
    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getUTCFullYear()

    return `${day} ${month} ${year}`
}

export const formatDateWithTime = (inputDate) =>  {
    const date = new Date(inputDate);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${+hours+6}:${minutes}`
}