import { Link } from "react-router-dom"
import "./login.css"


export default function Login () {
    return (
        <div className="login">
            <span className="loginTitle">Giriş Yap</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="E-mail adresinizi giriniz.."/>
                <label>Parola</label>
                <input type="password" className="loginInput" placeholder="Parolanızı giriniz.."/>
                <button className="loginButton">Giriş Yap</button>
            </form>
                <button className="loginRegisterButton"> 
                <Link className="link "to="/register">Kayıt Ol</Link> 
                </button>
          </div>
        )
    
}
    