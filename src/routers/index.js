import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import getInvoices from './menu.js'
import Home from '../pages/home/Index.jsx'
import State from '../pages/setState是异步的/Index.jsx'
import HomeOne from '../pages/home-one/index.js'
import HomeTwo from '../pages/home-two/index.js'
import NotFound from '../pages/error/404'
import SetState from '../pages/setState是异步的/Index.jsx'
import Mine from '../pages/mine/Mine.jsx'
import UseStatePage from '../pages/hook/useState.jsx'
import UseEffect from '../pages/hook/useEffect'
import UseEffectSideEffect from '../pages/hook/UseEffectSideEffect'
import Axios1 from '../pages/request/axios1'
import UseRefDom from '../pages/hook/useRef'
import UseContext from '../pages/hook/useContext'
import FatherAndSon from '../pages/communication/fatherAndSon'
import ReverseFather from '../pages/communication/reverseFather'
import Brother from '../pages/communication/brother'
import ContextTop from '../pages/communication/Context'
import Props from '../pages/communication/props'
import UseCallback from '../pages/hook/useCallback'
import UseMemo from '../pages/hook/useMemo'
import ReduceComponentLevel from '../pages/hook/useReducer-useContext'
import ReduxTest1 from '../pages/Redux/Redux-test1'
import ReduxTest1Details from '../pages/Redux/two-router/redux-test1-details'
// 定义一个纯路由组件
const BasicRoute = () => {
	return (
		<BrowserRouter>
			<div className="menu">
				{getInvoices().map((item, index) => {
					return (
						<NavLink
							key={index}
							to={item.path}
							style={({ isActive }) => {
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
			<hr />
			<br />
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
				<Route path="/useState" element={<UseStatePage />} />
				<Route path="/UseEffect" element={<UseEffect />} />
				<Route
					path="/UseEffectSideEffect"
					element={<UseEffectSideEffect />}
				/>
				<Route path="/Axios1" element={<Axios1 />} />
				<Route path="/UseRefDom" element={<UseRefDom />} />
				<Route path="/useContext" element={<UseContext />} />
				<Route path="/FatherAndSon" element={<FatherAndSon />} />
				<Route path="/ReverseFather" element={<ReverseFather />} />
				<Route path="/Brother" element={<Brother />} />
				<Route path="/ContextTop" element={<ContextTop />} />
				<Route path="/props" element={<Props />} />
				<Route path="/UseCallback" element={<UseCallback />} />
				<Route path="/UseMemo" element={<UseMemo />} />
				<Route
					path="/ReduceComponentLevel"
					element={<ReduceComponentLevel />}
				/>
				<Route path="/ReduxTest1" element={<ReduxTest1 />} />
				<Route path="/redux-test1-details" element={<ReduxTest1Details />} />

				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default BasicRoute
