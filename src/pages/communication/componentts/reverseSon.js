export default function ReverseSon({ fun }) {
	return (
		<div>
			<p onClick={() => fun('逆向出传值')}>子组件</p>
		</div>
	)
}
