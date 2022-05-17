export default function FatherAndSonCom(props) {
	console.log(props)
	const { name, age, fun, child } = props

	return (
		<div>
			<p>子组件</p>
			{name}
			{age}
			<br />
			<button onClick={fun}>触发父的函数</button>
			<br />
			{child}
		</div>
	)
}
