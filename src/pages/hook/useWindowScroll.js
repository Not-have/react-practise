/**
 * 获取滚动条距离
 */
import { useState } from 'react'
export default function useWindowScroll() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	window.addEventListener('scroll', () => {
		const top = document.documentElement.scrollTop
		setX(top)
		const left = document.documentElement.scrollLeft
		setY(left)
	})
	return [x, y]
}
