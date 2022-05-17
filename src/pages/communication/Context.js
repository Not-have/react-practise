// 1、导入
import Context from './util/createContext'
import ContextOne from './componentts/Context-one'
export default function ContextTop() {
	/**
	 * 2、结构出来(可结构出来下面两个)
	 * Provider 传入（他取消包括需要传入值的子组件）
	 * Consumer 接受（接受的时候 必须是表达式（回调函数））
	 */
	return (
		<div>
			父组件（也就是顶层）
			{/* 3、传值 */}
			<Context.Provider value={'跨组件通信'}>
				<ContextOne />
			</Context.Provider>
		</div>
	)
}
