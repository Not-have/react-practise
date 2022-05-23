/**
 * 1、引入redux
 * combineReducers 是合并reducer 的
 * applyMiddleware 使用中间件
 */
import { createStore, combineReducers, applyMiddleware } from 'redux'
// 2、引入redux-thunk
import reduxThunk from 'redux-thunk'
import OneReducer from './reducers/one.js'
import ListReducer from './reducers/list.js'
const reducer = combineReducers({
    //获取的时候，要根据这边的命名获取
    OneReducer,
    ListReducer
})
// 3、创建store
const store = createStore(reducer, applyMiddleware(reduxThunk))

export default store