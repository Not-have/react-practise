import Context from '../util/createContext'
export default function ContextThree() {
	return (
		<div>
			第三层子组件
			<Context.Consumer>{(value) => <div>{value}</div>}</Context.Consumer>
		</div>
	)
}
