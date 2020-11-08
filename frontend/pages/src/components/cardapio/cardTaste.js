import { useEffect, useState } from 'react'
import style from '../../../../styles/Home.module.css'
import api from '../../../api/api'

export default function Taste() {

	const [tastes, setTastes] = useState([])

	useEffect(() => {
		const findTastes = async () => {
			const response = await api.get('/Tastes')
			setTastes(response.data.allTaste)
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
					<th>Descrição</th>
				</tr>

				{tastes.map(taste => {
					return (
						<tr>
							<td>{taste.code}</td>
							<td>{taste.name}</td>
							<td>R$ {taste.price}</td>
							<td>{taste.description}</td>
						</tr>
					)
				})
				}
			</table>
		</div>
	)
}