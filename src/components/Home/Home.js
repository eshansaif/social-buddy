import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';


const Home = () => {
    const [posts, setPosts] = useState([]);

    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
            <>
                {
                    posts.map((post, idx) => <Post post={post} key={idx}></Post> )
                }
            </>  
    );
};

export default Home;