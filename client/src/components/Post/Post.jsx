import "./post.css"
import {Link} from "react-router-dom"


const options = { day: 'numeric', month: 'numeric', year: 'numeric' };

export default function Post ({post}) { //{post} Posts.jsxten geldi.
    return (
        
        <div className="post">
            {post.photo && ( //burada eğer fotograf varsa aşağodan al diyoruz.
            <img className="postImg"
            src={post.photo}
            alt=""
            />)}
            <div className="postInfo">
                <div className="postCats"> 
                  {post.categories.map((c) => (  //burda .map(c) ile for each category için spani çalıştr diyoruz
                    <span className="postCats">{c.name}</span>
                ))}
                  </div>
                  <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                  </Link>
                  <hr/>
                <span className="postDate">{new Date(post.createdAt).toLocaleDateString('tr-TR',options)}</span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
        )
    
}
    