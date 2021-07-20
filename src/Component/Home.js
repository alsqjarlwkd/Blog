import React from 'react'
import BlogList from './BlogList'
import useFetch from '../Hooks/useFetch'
const Home = () => {
    //data:blogs는 useFetch 에서 반환된 data를 blogs로 명시하여 사용
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
