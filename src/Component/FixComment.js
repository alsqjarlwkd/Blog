import React,{useState} from 'react'
import { useHistory,useParams } from 'react-router'
import useFetch from '../Hooks/useFetch';

const FixComment = () => {
    const History = useHistory();
    const[comment,setComment]=useState('');
    const {id}=useParams();
    const {data:blogs,isLoading,error}=useFetch('http://localhost:3001/Blog/'+id)
    console.log(blogs);
    const FixComment=()=>{
        fetch('http://localhost:3001/Blog/'+ blogs.id,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                "title": blogs.title,
                "Body": blogs.Body,
                "author": blogs.author,
                "Likes": blogs.Likes,
                "id": blogs.id,
                "comment":[comment]
            })
        })
            History.push(`/blogs/${blogs.id}`)
            alert("Are You Sure Fix this Comment?")
    }
    return (
        <div className="create">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blogs&&<form>
            <h1>Fix Comment</h1>
                <label>Comment:</label>
                <textarea 
                required
                value={comment}
                onChange={(e)=>setComment(e.target.value)}>
                </textarea>
                <button onClick={FixComment}>Fix Comment</button>
            </form>}
        </div>
    )
}

export default FixComment
