/**
 * 在这定义初始值
 */
 const OneReducer = (prevState = { count: 0 }, action) => {
    let nweCount = {...prevState}
    switch (action.type) {
        case 'add':
            nweCount.count++
            return nweCount
        case 'remove':
            nweCount.count--
            return nweCount
        default:
            return nweCount
    }
}
export default OneReducer