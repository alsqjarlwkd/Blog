import React,{useState} from 'react'
import { useHistory,useParams } from 'react-router'
import useFetch from '../Hooks/useFetch';
const CommentCreate = () => {
    const History = useHistory();
    const[Comment,setComment]=useState('');
    const {id}=useParams();
    const {data:blogs,isLoading,error}=useFetch('http://localhost:3001/Blog/'+id)
    const AddComment=()=>{
        const CommentData=blogs.comment
            CommentData.push(Comment)
            let CommentAdd={
                "title": blogs.title,
                "Body": blogs.Body,
                "author": blogs.author,
                "Likes": blogs.Likes,
                "id": blogs.id,
                "comment":CommentData
            }
        alert("Are You Sure add this Comment?")
        fetch('http://localhost:3001/Blog/'+ blogs.id,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(CommentAdd)
        })
        .then((res)=>{
            return res.json()
        })
        .then(()=>{
            History.push(`/blogs/`+ id)
        })
    }
    return (
        <div className="create">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blogs&&<form>
            <h1>Add Comment</h1>
                <label>Comment:</label>
                <textarea 
                required
                value={Comment}
                onChange={(e)=>setComment(e.target.value)}>
                </textarea>
                <button onClick={AddComment}>Add Comment</button>
            </form>}
        </div>
    )
}

export default CommentCreate
