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
            <h3>Comments({comments.length})</h3>
            {
                comments.map(comment => <CommentDetails comment={comment}></CommentDetails> )
            }


        
    </div>
    );
};

export default Comment;