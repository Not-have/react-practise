import Context from '../util/createContext'
import ContextTwo from './Context-two'
export default function ContextOne() {
	return (
		<div>
			第一层子组件
			<Context.Consumer>
				{(value) => <span>{value}</span>}
			</Context.Consumer>
			<ContextTwo />
		</div>
	)
}
