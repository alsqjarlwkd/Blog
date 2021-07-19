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
    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                    <Link to="/"><button style={{marginBottom:"50px"}}>Back</button></Link>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <div style={{border:"thick double #f1356d",padding:"3rem"}}>{blogs.Body}</div>
                    <button onClick={handleClick}>Delete</button>
                    <Link to={`/FixContent/`+id}><button style={{marginLeft:"50px"}}>Fix Content</button></Link>
                </article>
            )}
        </div>
    )
}

export default BlogDetails
