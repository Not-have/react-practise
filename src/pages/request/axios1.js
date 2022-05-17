import { useEffect } from 'react'
export default function Axios() {
	useEffect(() => {
		console.log(1222)
		fetch(
			'https://mock.mengxuegu.com/mock/60434bccf340b05bceda3906/practise-nuxtjs/test'
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(res)
			})
	})
	return <div>数据请求</div>
}
