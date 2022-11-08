export const dateFormat = (stringDate: string) => {
    const date: Date = new Date(stringDate)
    const formatDate: string = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`

    return formatDate
}