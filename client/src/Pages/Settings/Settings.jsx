import "./settings.css"
import SideBar from "../../components/SideBar/SideBar"


export default function Settings () {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Hesabınızı Güncelleyin</span>
                    <span className="settingsDeleteTitle">Hesabınızı Silin</span>
                </div>
                <form className="settingsForm">
                    <label>Profil Fotoğrafı</label>
                    <div className="settingsPP">
                        <img src=""
                        alt=""/>
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Kullanıcı Adı</label>
                    <input type="text" placeholder="Suheda"/>
                    <label>Email</label>
                    <input type="email" placeholder="Suhedayayla1@gmail.com"/>
                    <label>Parola</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Güncelle</button>
                </form>
            </div>
            <SideBar/>

              </div>
        )
    
}
    