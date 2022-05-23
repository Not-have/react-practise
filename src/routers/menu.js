const invoices = [
	{
		path: '/home',
		title: '首页'
	},
	{
		path: '/state',
		title: 'state中数组的修改'
	},
	{
		path: '/setState',
		title: 'setState是异步的'
	},
	{
		path: '/mine',
		title: '我的'
	},
	{
		path: '/useState',
		title: 'useState'
	},
	{
		path: '/UseEffect',
		title: 'UseEffect'
	},
	{
		path: '/UseEffectSideEffect',
		title: '清理useEffect的副作用'
	},
	{
		path: '/Axios1',
		title: '数据请求一'
	},
	{
		path: '/UseRefDom',
		title: '获取DOM'
	},
	{
		path: '/useContext',
		title: '传值'
	},
	{
		path: '/FatherAndSon',
		title: '父子传值'
	},
	{
		path: '/ReverseFather',
		title: '子传父'
	},
	{
		path: '/Brother',
		title: '兄弟组件传值'
	},
	{
		path: '/ContextTop',
		title: '跨组件通信（Context）'
	},
	{
		path: '/props',
		title: ' props校验'
	},
	{
		path: '/UseCallback',
		title: ' UseCallback'
	},
	{
		path: '/UseMemo',
		title: ' UseMemo'
	},
	{
		path: '/reduceComponentLevel',
		title: ' useReducer和useContext(减少组件层级)'
	},
	{
		path: '/ReduxTest1',
		title: ' Redux的基础使用'
	}
]
export default function getInvoices() {
	return invoices
}
