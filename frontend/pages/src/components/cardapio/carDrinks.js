import { useEffect, useState } from 'react'
import style from '../../../../styles/Home.module.css'
import api from '../../../api/api'

export default function Drinks() {

	const [tastes, setTastes] = useState([])

	useEffect(() => {
		const findTastes = async () => {
			const response = await api.get('/Drinks')
			setTastes(response.data.allDrinks)
		}
		findTastes()
	})

	return (
		<div className={style.Cardapio}>
			<h1>Cardápio</h1>
			<hr />
			<table width="100%">
				<tr>
					<th>Codigo</th>
					<th>Sabor</th>
					<th>Preço</th>
				</tr>

				{tastes.map(taste => {
					return (
						<tr>
							<td>{taste.code}</td>
							<td>{taste.name}</td>
							<td>R$ {taste.price}</td>
						</tr>
					)
				})
				}
			</table>
		</div>
	)
}