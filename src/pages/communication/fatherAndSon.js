import FatherAndSonCom from './componentts/fatherAndSon-com'
export default function FatherAndSon() {
	const fun = () => {
		console.log('传入的函数')
	}
	return (
		<div>
			<FatherAndSonCom
				{...{ name: '李四', age: 22 }}
				fun={fun}
				child={<span>传入的组件</span>}
			/>
		</div>
	)
}
