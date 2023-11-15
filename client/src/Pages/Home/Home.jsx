import { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import Posts from "../../components/Posts/Posts"
import SideBar from "../../components/SideBar/SideBar"
import "./home.css"
import axios from "axios"

export default function Home () {
        const [posts,setPosts] =useState([]);

        useEffect(() => {
                const fetchPosts = async ()=>{ //dataları getirmek için bu fetchposts
                const res = await axios.get("/posts")
                setPosts(res.data)
                }
                fetchPosts()
        },[])  //yukarıdaki useStatein içinde boş array tanımladık, initial state olduğu için. çünkü henüz data fetchlemedik.
                //useEffecttede [] boş array ekledik that means fire this useeffect at the beginning
  
          return (
            <>
            <Header/>
            <div className="home">
               <Posts posts={posts}/>
               <SideBar/>
            
        </div>
        </>
        )
    
}
    