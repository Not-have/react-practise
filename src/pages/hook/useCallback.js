import { useCallback, useMemo } from 'react'
export default function UseCallback() {
	/**
	 * 只有name改变后， 这个函数才会重新声明一次
	 * 如果传入空数组， 那么就是第一次创建后就被缓存， 如果name后期改变了,拿到的还是老的name。
	 * 如果不传第二个参数，每次都会重新声明一次，拿到的就是最新的name.
	 */
	let name = '哈哈'
	console.log(name)
	const fun = useMemo(() => {
		console.log(name)
		name = 'heh '
	})
	return (
		<div>
			<p onClick={fun}>UseCallback</p>
		</div>
	)
}
