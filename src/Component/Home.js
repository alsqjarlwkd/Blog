import React,{useState} from 'react'
import BlogList from './BlogList'
const Home = () => {
    const[blogs,setblogs]=useState([
        {title:'안녕하세요! 민범기입니다!',body:'프론트 엔드 지망생 입니다.',author:'민범기',id:1},
        {title:'안녕하세요! 민범기입니다!',body:'프론트 엔드 지망생 입니다.',author:'민범기',id:2},
        {title:'안녕하세요! 민범기입니다!',body:'프론트 엔드 지망생 입니다.',author:'민범기',id:3},
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="Min Blog!!"></BlogList>
        </div>
    )
}

export default Home
