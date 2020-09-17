import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';


const Home = () => {

    const shuffle = a => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }

    const [posts, setPosts] = useState([]);
    shuffle(posts);

    const [loading,setLoading] = useState(false);

    const loadPosts = async () => {
        try{
            await axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                setPosts(res.data);
            });
            setLoading(true);
        }catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadPosts();
    },[])

    return (
        <>
            {
            loading ? posts.map((post, idx) => <Post post={post} key={idx} loading={loading}></Post> ) 
                    : <CircularProgress
                        size={40}
                        left={-20}
                        top={10}
                        status={'loading'}
                        style={{marginLeft: '50%', color: '#6c757d'}}
                        disableShrink />
            }
        </>  
    );
};

export default Home;