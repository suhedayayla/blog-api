import { Link } from "react-router-dom";
import "./topbar.css"


export default function TopBar () {
    const user=true;
    return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-x-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
            <li className="topListItem"> 
            <Link className="link" to="/">ANASAYFA</Link></li>
            <li className="topListItem">
            <Link className="link" to="/">HAKKIMIZDA</Link></li>
                
            <li className="topListItem">
            <Link className="link" to="/">İLETİŞİM</Link></li>
                
            <li className="topListItem">
            <Link className="link" to="/write">YAZILAR</Link></li>
                
            <li className="topListItem">
                {user && "ÇIKIŞ YAP"}</li>
                
            </ul>
        </div>
        <div className="topRight">
            {user?(
                <img className="topImg"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""/>
            ) : (
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/login">GİRİŞ YAP</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/register">KAYIT OL</Link>
                    </li>
                </ul>
            )}
            
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
    )
}


