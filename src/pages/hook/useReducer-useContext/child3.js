import { useContext } from 'react'
import { Context } from './utils'
export default function Children3(){
    const { state } = useContext(Context)
    return (
        <div>
            <p style={{backgroundColor: state.b}}>子组件三</p>
        </div>
    )
}