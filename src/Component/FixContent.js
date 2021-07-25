import React,{useState} from 'react'
import { useParams,useHistory } from 'react-router'
const FixContent = () => {
    const {id}=useParams();
    const[title,setTitle]=useState("");
    const[Body,setBody]=useState("");
    const[author,setauthor]=useState(""); 
    const History = useHistory();
    const Likes = 0;
    const comment = [];
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert("Are you sure you want to edit your blog? Likes,comment disappear when editing a blog")
        const blog = {title,Body,author,Likes,comment}; // input에 e.target.value 값을 blog 객체에 저장
        fetch('http://localhost:3001/Blog/'+id,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        })
        .then(res=>res.json())
        .then(()=>{
            History.push("/")
        })
    }

    return (
        <div className="create">
        <h1>Fixed Blog</h1>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input type="text"
            required 
            placeholder="Fix Title"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}></input>
            <label>Blog Body:</label>
            <textarea 
            required
            placeholder="Fix TextArea"
            onChange={(e)=>setBody(e.target.value)}
            value={Body}
            >
            </textarea>
            <label>Blog author:</label>
            <input type="text"
            required
            placeholder="Fix author"
            onChange={(e)=>setauthor(e.target.value)}
            value={author}
            >
            </input>
            <button>Fix Blog</button>
        </form>
    </div>
    )
}

export default FixContent
