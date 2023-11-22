import { useContext, useState } from "react"
import "./write.css"
import axios from "axios"
import { Context } from "../../context/Context"


export default function Write () {
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [file,setFile] = useState(null)
    const {user} = useContext(Context)


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost ={
            username:user.username,
            title,
            desc,
        };
        if (file){   //eğer resim varsa   bunu kullanıyor
            const data = new FormData();
            const filename = Date.now()+file.name; //filenamei yüklendiği tarihe göre yazıyor
            data.append("name",filename); //önce filenamei sonra fileı ekliyoruz aşağıda
            data.append("file",file);

            newPost.photo = filename; // yukarıdaki newposta photoyu eklityoruz
            try{
                await axios.post("/upload",data); //upload urlinde(api/indexte bulunan /upload urli) bu datayı yani imagei ekliyoruz.

            }catch(err){}
        } 
        try{
            const res = await axios.post("/posts",newPost); //posts urline newPostumuzu gönderiyoruz.
            window.location.replace("/post/" + res.data._id); //submit edince bu yüklediğimiz postun sayfasına sayfamız yenileniyor.

        }catch(err){}
    
    };

    return (
        
        <div className="write">
            {file&&(
             <img
             className="writeImg"
             src={URL.createObjectURL(file)} //createobjecturl yüklediğimiz resim için url oluşturuyor.
             alt=""
             />
           )}
           
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
                    <input 
                            type="text" 
                            placeholder="Başlık" 
                            className="writeInput"
                            autoFocus={true}
                            onChange={e=>setTitle(e.target.value)}
                            />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tarifini ekle.."
                             type="text" 
                             className="writeInput writeText"
                             onChange={e=>setDesc(e.target.value)}
                             ></textarea>
                </div>
                <button className="writeSubmit" type="submit">Yayınla</button>
            </form>
              </div>
        );
    
}
    