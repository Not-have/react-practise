import { useEffect, useState } from 'react'
import store from '@/redux/index.js'
import requestList from "@/redux/action/request-list.js"
export default function ReduxTest1Details() {
	const [list, setList] = useState(store.getState().ListReducer.list)
	useEffect(() => {
		if(store.getState().ListReducer.list.length === 0) {
			// axios.get('https://mock.mengxuegu.com/mock/60434bccf340b05bceda3906/practise-nuxtjs/list').then(res => {
			// 	console.log(res);
			// })
			// 4、调用action
			store.dispatch(requestList())
		}else {
			console.log("store.getState().ListReducer.list 缓存");
		}
		// 5、订阅（订阅 每次 都会走）
		store.subscribe(() => {
			console.log(store.getState().ListReducer.list);
			setList(store.getState().ListReducer.list)
		})
    }, [])
	return (
		<div>
			<p>列表</p>
			{
				list.map((item, index) => {
					return <div key={index}>{item.title}</div>
				})
			}
		</div>
	)
}
