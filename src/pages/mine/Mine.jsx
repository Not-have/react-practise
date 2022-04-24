import { useParams } from "react-router-dom"
export default function Mine(){
	// 获取路由传参
	const params = useParams()
	return (
		<div>
			<p>我的</p>
			<p>id为{ params.id }</p>
		</div>
	)
}
