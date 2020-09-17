import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetails from '../CommentDetails/CommentDetails';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

const Comment = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]); 
    const [loading, setLoading] = useState(false);

    const loadComments = async () => {
        try{
            await axios
            .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => {
                // console.log(res.data);
                setComments(res.data);
            });
            setLoading(true);
        }catch(err){
            console.log(err);
        }
    };

    useEffect(() => {
        loadComments();
    },[])
    
    return (
    <>
        {
            loading ? 

            <div>
        <h4>Comments({comments.length})</h4>
        {
            comments.map((comment, idx) => <CommentDetails comment={comment} key={idx}></CommentDetails> )
        }  
        </div>
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

export default Comment;