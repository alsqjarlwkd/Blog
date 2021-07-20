import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../Hooks/useFetch';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
const BlogDetails = () => {
    const {id}=useParams();
    const {data:blogs,isLoading,error}=useFetch('http://localhost:3001/Blog/'+id)
    const History = useHistory();
    const handleClick=()=>{
        fetch('http://localhost:3001/Blog/'+ blogs.id,{
            method:"DELETE"
        }).then(()=>{
            alert("Are you really Delete this Blog?")
            History.push("/")
        })
    }
    const ClickLikes=()=>{
        fetch('http://localhost:3001/Blog/'+ blogs.id,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                "title": blogs.title,
                "Body": blogs.Body,
                "author": blogs.author,
                "Likes": blogs.Likes+1,
                "id": blogs.id
            })
        }).then(()=>{
            alert("are you really Like this blog?")
            History.push("/")
        })
    }
    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                    <Link to="/"><button style={{marginBottom:"50px"}}>Back</button></Link>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <button style={{marginTop:"50px"}} onClick={ClickLikes}>Likes:{blogs.Likes}</button>
                    <div style={{border:"thick double #f1356d",padding:"3rem"}}>{blogs.Body}</div>
                    <button onClick={handleClick}>Delete</button>
                    <Link to={`/FixContent/`+id}><button style={{marginLeft:"50px"}}>Fix Content</button></Link>
                </article>
            )}
        </div>
    )
}

export default BlogDetails
