import React,{useState} from 'react'
import { useHistory } from 'react-router';
const BlogCreate = () => {
    const[title,setTitle]=useState('');
    const[Body,setBody]=useState('');
    const[author,setauthor]=useState('')
    const Likes = 0;
    const comment = [];
    const History = useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault()
        const blog = {title,Body,author,Likes,comment};
        alert("Are you Really add this Blog?")
        fetch('http://localhost:3001/Blog',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            History.push("/")
        })
    }
    return (
        <div className="create">
            <h1>Add Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" 
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                ></input>
                <label>Blog Body:</label>
                <textarea 
                required
                value={Body}
                onChange={(e)=>setBody(e.target.value)}
                >
                </textarea>
                <label>Blog author:</label>
                <input type="text"
                required
                value={author}
                onChange={(e)=>setauthor(e.target.value)}>
                </input>
                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default BlogCreate
