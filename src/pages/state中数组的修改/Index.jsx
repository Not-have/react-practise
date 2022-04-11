import React, { Component } from 'react'

export default class App9 extends Component {
	state = {
		arr: ['张飞', '赵云', '刘备']
	}
	render () {
		return (
			<div>
				<ul>
					{this.state.arr.map((item, index) => {
						return <li key={index}>{item}</li>
					})}
				</ul>
				<button onClick={this.addFn.bind(this)}>追加一项到arr的最后</button>
			</div>
		)
	}
	// 追加一项到arr的最后
	// 修改state的方式只能是setState
	// 数组的push方法会修改原数组
	// this.state.arr.push() 会造成直接修改了state中的arr
	// 修改数组，不能直接修改this.state.arr

	addFn () {
		// 如果我声明一个变量，等于this.state.arr，并且让这个变量和this.state.arr完全脱离关系[深拷贝]
		let newArr = JSON.parse(JSON.stringify(this.state.arr))
		// 往newArr中push一项
		newArr.push('关羽')
		// 把最新的newArr赋值给arr
		this.setState({
			arr: newArr
		})
	}
}
