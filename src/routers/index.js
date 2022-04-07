import React from 'react'
/* 
    路由有两种模式：
    一种是HashRouter，带有#，
    一种是BrowserRouter，不带#，但需要后端支持修改根目录地址
    开发阶段可以先使用BrowserRouter
*/
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useHistory
} from 'react-router-dom'
import Home from '../pages/home/Index.jsx'
import Mine from '../pages/mine/Mine.jsx'

// 定义一个纯路由组件
const BasicRoute = () => {
	return (
		<Router history={useHistory}>
			{/* 套用Switch作路由匹配 */}
			<Switch>
				<Route exact path="/home" component={Home} />
				<Route exact path="/detail" component={Mine} />
			</Switch>
		</Router>
	)
}

export default BasicRoute
