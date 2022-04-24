// 1、引入
import { Outlet } from "react-router-dom"
export default function Home(){
	return <div>
		首页
		<div>
			<hr />
			{/* home下有二级路由，所以在这写二级路由的出口 */}
			<Outlet />
		</div>
	</div>
}