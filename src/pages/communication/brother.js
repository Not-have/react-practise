/**
 * 真实项目中分开书写
 */
import { useState } from 'react'
// a组件
function A({ str }) {
	return <div>A组件{str}</div>
}
// b组件
function B({ fun }) {
	return <div onClick={() => fun('兄弟通讯')}>B组件</div>
}
// a、b的父组件
export default function Brother() {
	const [str, setStr] = useState('')
	const fun = (str) => {
		console.log(str)
		setStr(str)
	}
	return (
		<>
			<p>父组件</p>
			<br />
			<A str={str} />
			<B fun={fun} />
		</>
	)
}
