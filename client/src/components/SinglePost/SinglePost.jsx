import { useLocation } from "react-router-dom"
import "./singlePost.css"
import { useEffect } from "react";
import axios from "axios"


export default function SinglePost () {
    const location = useLocation() //bu pagein linkini locate ettik
    const path = location.pathname.split("/")[2]; //linkin pathnameinde bulunan /tan sonraki 2. elemanını almak istedik çünkü idmiz var orada
    console.log(path);
    useEffect(() =>{
        const getPost = async () => {   //postun linkine tıkladığımızda o idye ait postun gelmesi için yazdık
            try{
            const res= await axios.get("/posts/" + path);
            console.log(res)
        } catch (err){
            console.error("server",err);
        }};
        getPost()
        
    },[path]); //bu path değiştikçe bu useeffecti çalıştır.



    return (
        <div className="singlePost">
           <div className="singlePostWrapper">
            <img
            src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg"
            alt=""
            className="singlePostImg"
            />
            <h1 className="singlePostTitle">Lorem ipsum dolor 
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>      
                    <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
            </h1>
            
            <div className="singlePostInfo">
                <span className="singlePostAuthor"> Author: <b>Suheda</b></span>
                <span className="singlePostDate"> 1 hour ago </span>

            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Eius rerum laboriosam, 
                perferendis repellendus, voluptates facere 
                consequuntur nemo accusantium earum quam 
                alias deserunt nobis quod tempora sint sit 
                sunt. Sit, voluptatem!Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Eius rerum laboriosam, 
                perferendis repellendus, voluptates facere 
                consequuntur nemo accusantium earum quam 
                alias deserunt nobis quod tempora sint sit 
                sunt. Sit, voluptatem!Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Eius rerum laboriosam, 
                perferendis repellendus, voluptates facere 
                consequuntur nemo accusantium earum quam 
                alias deserunt nobis quod tempora sint sit 
                sunt. Sit, voluptatem!Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Eius rerum laboriosam, 
                perferendis repellendus, voluptates facere 
                consequuntur nemo accusantium earum quam 
                alias deserunt nobis quod tempora sint sit 
                sunt. Sit, voluptatem!</p>
           </div>
              </div>
        )
    
}
    