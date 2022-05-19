import { useContext } from 'react'
import { Context } from './utils'
export default function Children2(){
    const { state } = useContext(Context)
    return (
        <div>
            <p style={{backgroundColor: state.a}}>子组件二 {state.a}</p>
        </div>
    )
}