import React,{useState} from 'react'
import { useHistory,useParams } from 'react-router'
import useFetch from '../Hooks/useFetch';

const FixComment = () => {
    const History = useHistory();
    const[comment,setComment]=useState('');
    const {id,index}=useParams();
    const {data:blogs,isLoading,error}=useFetch('http://localhost:3001/Blog/'+id)
    const handleSubmit=(e)=>{
        e.preventDefault()
        const CommentData=blogs.comment;
        CommentData.splice(index,1,comment);
        let CommnetFix={
            "title": blogs.title,
            "Body": blogs.Body,
            "author": blogs.author,
            "Likes": blogs.Likes,
            "id": blogs.id,
            "comment":CommentData
        }
        alert("Are You Sure Fix this Comment?")
        fetch('http://localhost:3001/Blog/'+ blogs.id,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(CommnetFix)
        }).then(res=>res.json())
        .then(()=>{
            History.push(`/blogs/`+id)
        })
    }
    return (
        <div className="create">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blogs&&<form onSubmit={handleSubmit}>
            <h1>Fix Comment</h1>
                <label>Comment:</label>
                <textarea 
                required
                value={comment}
                onChange={(e)=>setComment(e.target.value)}>
                </textarea>
                <button>Fix Comment</button>
            </form>}
        </div>
    )
}

export default FixComment