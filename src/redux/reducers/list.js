const ListReducer = (prevState = { list: [] }, action) => {
    let nweList = {...prevState}
    switch (action.type) {
        case 'changeList':
            nweList.list = action.payload
            break;
        default:
            nweList = prevState || action
            break;
    }
    return nweList || action
}
export default ListReducer