import { useState, useEffect } from 'react'
/**
 * 设置localStorage
 * @param {*} key localStorage键
 * @param {*} defaultValue localStorage值
 * @returns
 */
export default function useLocalStorage(key, defaultValue) {
	const [message, setMessage] = useState(defaultValue)
	/**
	 * message或者key变化 都会存
	 */
	useEffect(() => {
		window.localStorage.setItem(key, message)
	}, [key, message])
	/**
	 * message 是值
	 * setMessage 在外面设置值
	 */
	return [message, setMessage]
}
