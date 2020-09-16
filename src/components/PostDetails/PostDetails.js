import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card} from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Comment from '../Comment/Comment';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

const PostDetails = () => {
    const {postId} = useParams();
    const [post,setPost] = useState({});

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    const classes = useStyles();

    const customStyle = {
        float: 'left',
        marginBottom: '10px'
    }

    return (
        <>
        {post.title && 

        <div style={customStyle} className={classes.root}  >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Card>
                        <Card.Header>Featured  </Card.Header>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>
                                {post.body}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Paper>
                </Grid>
            </Grid>
        </div>

        }
        
        <Comment></Comment>

    </>
    );
};

export default PostDetails;