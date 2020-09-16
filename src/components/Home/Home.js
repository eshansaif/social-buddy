import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
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
                    posts.map(post => <Post post={post}></Post> )
                }
            </>
            
    );
};

export default Home;