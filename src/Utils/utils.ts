
export const formatDateToString = (d:Date):string => {
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`.replace(/\n|\r/g, '');
}

export default "";