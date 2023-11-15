import Post from "../Post/Post"
import "./posts.css"


export default function Posts ({posts}) {
    return (
        <div className="posts">
            {posts.map((p) => ( //array map
                //posts.map((p) => (<Post />)) ifadesi, posts dizisi üzerinde bir map fonksiyonu çağırarak
                // her bir p (post) elemanı için bir <Post /> bileşeni oluşturur.

            <Post post={p}/> //post.jsx sayfasında kullnamak için buraya ekledik.

            ))}
        </div>
        )
    
}
    