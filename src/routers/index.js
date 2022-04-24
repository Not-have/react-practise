/* 
    路由有两种模式：
    一种是HashRouter，带有#，
    一种是BrowserRouter，不带#，但需要后端支持修改根目录地址
    开发阶段可以先使用BrowserRouter
*/
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'
import getInvoices from './menu.js'
import Home from '../pages/home/Index.jsx'
import State from '../pages/setState是异步的/Index.jsx'
import HomeOne from '../pages/home-one/index.js'
import HomeTwo from '../pages/home-two/index.js'
import NotFound from '../pages/error/404'
import SetState from '../pages/setState是异步的/Index.jsx'
import Mine from '../pages/mine/Mine.jsx'
// 定义一个纯路由组件
const BasicRoute = () => {
	return (
		<HashRouter>
			<div className="menu">
				{getInvoices().map((item, index) => {
					return (
						<NavLink
							key={index}
							to={item.path}
							style={({ isActive }) => {
								console.log(isActive)
								return {
									display: 'inline-block',
									marginLeft: '20px',
									color: isActive ? 'red' : ''
								}
							}}>
							{item.title}
						</NavLink>
					)
				})}
			</div>
			<Routes>
				{/* 谁的二级路由，就写在谁的里面 */}
				<Route path="/home" element={<Home />}>
					{/* 定义二级路由是  不加斜杠, 默认二级路由把path去掉 */}
					<Route index element={<HomeOne />} />
					<Route path="home-one" element={<HomeOne />} />
					<Route path="home-two" element={<HomeTwo />} />
				</Route>
				<Route path="/state" element={<State />} />
				<Route path="/setState" element={<SetState />} />
				<Route path="/mine" element={<Mine />} />
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</HashRouter>
	)
}

export default BasicRoute
