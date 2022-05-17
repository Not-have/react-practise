import ReverseSon from './componentts/reverseSon'
export default function ReverseFather() {
	const fun = (val) => {
		console.log(val)
	}
	return (
		<div>
			<p>父组件</p>
			<ReverseSon fun={fun} />
		</div>
	)
}
