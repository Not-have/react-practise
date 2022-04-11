import React, { Component } from 'react'

export default class App5 extends Component {
	state = {
		msg: '你好世界'
	}
	render () {
		return (
			<div>
				<h2>{this.state.msg}</h2>
				<button onClick={this.handleClick.bind(this)}>改变msg</button>
			</div>
		)
	}
	handleClick () {
		// this.setState是异步还是同步呢？
		this.setState({
			msg: 'hello world' // 修改msg
		})
		console.log(this.state.msg) // 同步则输出“hello world”，异步则输出“你好世界”

		// 验证结果：this.setState是异步的
	}
}
