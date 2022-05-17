import { useState, useEffect } from 'react'
import useWindowScroll from './useWindowScroll'
import useLocalStorage from './useLocalStorage'
export default function UseEffectPager() {
	const [count, setCount] = useState(0)
	/**
	 * 1、做组件更新，副作用函数 会一直更新
	 * 2、useEffect里面第一个参数，是一个回调函数
	 */
	const [x, y] = useWindowScroll()
	const [message, setMessage] = useLocalStorage('key', count)
	useEffect(() => {
		document.title = '清理副作用' + count
		// count 改变 上面的就会执行
	}, [count])
	const fun = () => {
		setCount(count + 1)
		console.log(count)
		setMessage(count)
	}
	return (
		<div>
			<button onClick={fun}>{count}</button>
			{x}____{y}
			{message}
			<div style={{ height: '4000px' }}></div>
		</div>
	)
}
