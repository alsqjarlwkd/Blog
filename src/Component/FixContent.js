import React,{useState} from 'react'
import { useParams,useHistory } from 'react-router'
const FixContent = () => {
    const {id}=useParams();
    const[title,setTitle]=useState("");
    const[Body,setBody]=useState("");
    const[author,setauthor]=useState(""); 
    const History = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault()
        const blog = {title,Body,author}; // input에 e.target.value 값을 blog 객체에 저장
        fetch('http://localhost:3001/Blog/'+id,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            alert("Are you Really Fix this Blog?")
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
            <button>FIx Blog</button>
        </form>
    </div>
    )
}

export default FixContent
