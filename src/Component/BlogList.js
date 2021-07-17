import React from 'react'

const BlogList = (props) => {
    const{blogs,title}=props;
    console.log(blogs)
    return (
        <div className="blog-list">
             <h2>{title}</h2>
             {
                blogs.map((data)=>{
                    return(
                    <div className="blog-preview" key={data.id}>
                    <h2>{data.title}</h2>
                    <p>Written byt {data.author}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default BlogList
