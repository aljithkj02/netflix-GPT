
export const getIndexBW = (start = 0, end = 0) => {
    return Math.floor(Math.random() * (end - start) + start);
}