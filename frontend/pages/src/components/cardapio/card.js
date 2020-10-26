import { useEffect, useState } from 'react'
import style from '../../../../styles/Home.module.css'
import api from '../../../api/api'

export default function Login() {

  const [code, setCode] = useState([])
  const [name, setName] = useState([])
  const [price, setPrice] = useState([])
  const [description, setDescription] = useState([])

  useEffect(() => {
    async function showTastes() {

      const response = api.get('/Tastes')

      setCode(response.allTaste.code)
      setName(response.allTaste.name)
      setPrice(response.allTaste.price)
      setDescription(response.allTaste.description)
    }
    showTastes()
  }, [])


  return (
    <div className={style.atendenteCard}>
      <h1>Cardápio</h1>
      <hr />
      <table width="100%">
        <tr>
          <th>Codigo</th>
          <th>Sabor</th>
          <th>Preço</th>
          <th>Descrição</th>
        </tr>
        <tr>
          <td>{code}</td>
          <td>{name}</td>
          <td>{price}</td>
          <td>{description}</td>
        </tr>
      </table>
    </div>
  )
}