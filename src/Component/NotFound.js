import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div className="Not-Found">
            <h1>Sorry</h1>
            <p>That page can not Found...</p>
            <Link to ="/"><button>back Home</button></Link>
        </div>
    )
}

export default NotFound;