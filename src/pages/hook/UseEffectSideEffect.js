import { useState, useEffect } from 'react'
function Com() {
	useEffect(() => {
		let time = setInterval(() => {
			console.log('定时器')
		}, 1000)
		// 如果 不这样写，这个计时器 就算组件销毁了，他也会以一直执行
		return () => {
			clearInterval(time)
		}
	}, [])
	return <div>组件</div>
}

export default function UseEffectSideEffect() {
	const [show, setShow] = useState(true)
	return (
		<div>
			<button onClick={() => setShow(!show)}>组件显示隐藏</button>
			{show ? <Com /> : null}
		</div>
	)
}
