import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

const Post = (props) => {
    // console.log(props);
    const {title,body,id, userId} = props.post;

    const classes = useStyles();

    const customStyle = {
        float: 'left',
        marginBottom: '10px'
    }


    return (

    <div style={customStyle} className={classes.root}  >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Card>
                <Card.Header> <Link>Featured {userId}</Link> </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>
                    <Link to={`/post/${id}`}>
                        <Button variant="primary">Read more</Button>
                    </Link>
                </Card.Body>
            </Card>
          </Paper>
        </Grid>
        
      </Grid>
    </div>
        
    );
};

export default Post;