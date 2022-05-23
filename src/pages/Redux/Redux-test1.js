import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import store  from "../../redux/index.js"
export default function ReduxTest1(){
    const navigation = useNavigate()
    const [num, setNum] = useState(store.getState().OneReducer.count || 0 )
    const add = () => {
        store.dispatch({
            type: 'add'
        })
    }
    const reduce = () => {
        store.dispatch({
            type: 'remove'
        })
        
    }
    store.subscribe(()=>{
        console.log("更新了 就会触发", store.getState().OneReducer.count);
        setNum(store.getState().OneReducer.count);
    })
    return (
        <div>
            <p>计算器</p>
            <button onClick={add}>加</button>
            <p>{ num }</p>
            <button onClick={reduce}>减</button>        

            <p onClick={() => navigation(`/redux-test1-details`)}>跳转</p>
        </div> 
    )
}
