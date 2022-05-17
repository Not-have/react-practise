import { createContext, useContext } from 'react'
// 1、创建对象(不在同一个文件的时候，可以使用 export导出，在使用import导入)
const Context = createContext()

function ComB() {
	return (
		<div>
			<p>组件B</p>
			<ComC />
		</div>
	)
}
function ComC() {
	// 3、在孙子组件中使用
	const num = useContext(Context)
	return (
		<>
			<p>组件C</p>
			{num}
		</>
	)
}

export default function ComA() {
	return (
		/**
		 * 2、在顶层组件传值:
		 * 使用value传
		 */
		<Context.Provider value={33}>
			<ComB />
		</Context.Provider>
	)
}
