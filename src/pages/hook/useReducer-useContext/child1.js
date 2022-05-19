import { useContext } from 'react'
import { Context } from './utils'
export default function Children1(){
    const { dispatch } = useContext(Context)
    return (
        <div style={{border: '1px solid red', padding: '10px'}}>
            <p>子组件一</p>
            <button onClick={() => { dispatch({ type: 'change-two', value: '#d3db22' }) }}>改变组件二</button>
            <button onClick={() => { dispatch({ type: 'change-three', value: "#22dbcf" }) }}>改变组件三</button>
        </div>
    )
}