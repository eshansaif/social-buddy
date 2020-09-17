import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetails from '../CommentDetails/CommentDetails';


const Comment = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]); 

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    
    return (
    <div>
        <h4>Comments({comments.length})</h4>
        {
            comments.map((comment, idx) => <CommentDetails comment={comment} key={idx}></CommentDetails> )
        }  
    </div>
    );
};

export default Comment;