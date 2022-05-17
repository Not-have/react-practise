import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

export default function UseMemo() {
	const [mytext, setmytext] = useState('')
	const [cinemaList, setcinemaList] = useState([])

	useEffect(() => {
		console.log(11)
		axios({
			url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159',
			method: 'get',
			headers: {
				'X-Client-Info':
					'{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',

				'X-Host': 'mall.film-ticket.cinema.list'
			}
		}).then((res) => {
			console.log(res)
			setcinemaList(res.data.data.cinemas)
		})
	}, [])
	/**
	 * useMemo 可以把第一个参数（函数） 的执行结果返回给 getCinemaList
	 */
	const getCinemaList = useMemo(
		() =>
			cinemaList.filter((item) =>
				item.name.toUpperCase().includes(mytext.toUpperCase())
			),
		[cinemaList, mytext]
	)

	return (
		<div>
			<input
				value={mytext}
				onChange={(evt) => {
					setmytext(evt.target.value)
				}}
			/>
			{getCinemaList.map((item) => (
				<dl key={item.cinemaId}>
					<dt>{item.name}</dt>
				</dl>
			))}
		</div>
	)
}
