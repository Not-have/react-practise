import React, { useRef, useEffect } from 'react'
class Com extends React.Component {
	fun = () => {
		console.log('方法')
	}
	render() {
		return <div>组件</div>
	}
}
export default function UseRefDom() {
	const dom = useRef(null)
	const com = useRef(null)
	/**
	 * 获取元素：
	 * 变量.current
	 */

	useEffect(() => {
		console.log(dom.current)
		com.current.fun()
	})
	return (
		<div>
			<Com ref={com} />
			<p ref={dom}>元素</p>
		</div>
	)
}
