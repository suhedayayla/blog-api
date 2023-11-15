import "./write.css"


export default function Write () {
    return (
        <div className="write">
            <img
            className="writeImg"
            src=""
            alt=""
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Başlık" className="writeInput"
                    autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Hikayeni anlat.." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Yayınla</button>
            </form>
              </div>
        )
    
}
    