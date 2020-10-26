import style from '../../../../styles/Home.module.css'

export default function Login() {
  return (
    <div className={style.clientForm}>
      <form method="post">
        <label>Digite o nº mesa:</label>
        <input type="text" name="table" placeholder="Sua Mesa" />

        <label>Digite o cod. do sabor:</label>
        <input type="text" name="fk_taste" placeholder="Código do sabor"/>

        <label>Digite o cod. da bebida:</label>
        <input type="text" name="fk_drink" placeholder="Código da bebida" />

        <input type="submit" value="Essa que eu Quero!!"/>
      </form>
    </div>
  )
}