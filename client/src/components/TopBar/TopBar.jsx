import { Link } from "react-router-dom";
import "./topbar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";


export default function TopBar () {
    const {user, dispatch}= useContext(Context);
    const PF = "http://localhost:5000/images/";

    const handleLogout =() =>{
        dispatch({type:"LOGOUT"})
    }



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
                
            <li className="topListItem" onClick={handleLogout}>
                {user && "ÇIKIŞ YAP"}</li>
                
            </ul>
        </div>
        <div className="topRight">
            {user?(
                <Link to="/settings">
                <img className="topImg"
                src={PF + user.profilePic}
                alt=""/>
                </Link>
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


