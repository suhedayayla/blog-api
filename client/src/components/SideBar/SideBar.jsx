import "./sidebar.css"


export default function SideBar () {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">Hakkımda</span>
                <img 
                    src="http://www.lauragargiulo.com/wp-content/uploads/2015/03/post3.jpg"
                    alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore exercitationem ab deleniti esse totam ut hic magni officiis ipsa cupiditate laborum tempora, veniam</p>
            </div>
            <div className="sidebarItem">
              <span className="sidebarTitle">Kategoriler</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Yaşam</li>
                    <li className="sidebarListItem">Müzik</li>
                    <li className="sidebarListItem">Moda</li>
                    <li className="sidebarListItem">Teknoloji</li>
                    <li className="sidebarListItem">Sinema</li>

                </ul>
            </div>
            <div className="sidebarItem">
              <span className="sidebarTitle">Bizi Takip Edin</span>
                <div className="sidebarSocial">
                     <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                     <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
                     <i className="sidebarIcon fa-brands fa-square-instagram"></i>
       

                </div>
            </div>

        </div>
        )
    
}
    