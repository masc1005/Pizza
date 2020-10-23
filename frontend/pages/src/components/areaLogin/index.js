import style from '../../../../styles/Home.module.css'

export default function Login() {
  return (
    <div className={style.cardsHome}>
      <div className={style.cardLogin}>
        <div className={style.topForm}>
          <img id="image1" src="https://testemailcot.s3-sa-east-1.amazonaws.com/pizza.png" />
        </div>
        <div className={style.formArea}>
          <form method="post">
            <input className="inputUser" type="text" name="user" placeholder="Seu usuário aqui" />
            <br />
            <input className="inputpPass" type="password" name="password" placeholder="Sua senha aqui" />
            <br />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  )
}