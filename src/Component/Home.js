import React from 'react'
import BlogList from './BlogList'
import useFetch from '../Hooks/useFetch'
const Home = () => {
    const{data:blogs,isLoading,error}=useFetch(`http://localhost:3001/Blog`)
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="Min Blog!!"></BlogList>}
        </div>
    )
}

export default Home
