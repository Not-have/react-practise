import { useReducer } from 'react'
// 也可把方法 写在这
import { Context, intialState, reducer } from './utils'
import Children1 from './child1'
import Children2 from './child2'
import Children3 from './child3'
export default function ReduceComponentLevel() {
	/**
	 * 1、useReducer 只能写一个，然后把变量和方法 给里面穿
	 * 只能在hooks中使用
	 */
	const [state, dispatch] = useReducer(reducer, intialState)
	return (
		<div>
			<p>父组件</p>
			<hr />
			{/* 使用createContext给组件传方法和变量 */}
			<Context.Provider value={{ state, dispatch }}>
				<Children1 />
				<Children2 />
				<Children3 />
			</Context.Provider>
		</div>
	)
}

