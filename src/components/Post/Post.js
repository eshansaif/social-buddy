import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
//button MUI
import Button from '@material-ui/core/Button';

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

const useStyles1 = makeStyles({
  root: {
        width: '100%',
    },
    });

const Post = (props) => {
    const {title,body,id, userId} = props.post;
 
    const [user, setUser] = useState({});

    //Load users
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])


    const classes = useStyles();
    const classes1 = useStyles1();

    const customStyle = {
        float: 'left',
        marginBottom: '10px'
    }


    return (

    <div style={customStyle} className={classes1.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" gutterBottom>
                        {title.toUpperCase()}
                    </Typography>
                
                    <Typography variant="subtitle1" gutterBottom>
                        < AccountCircleIcon /> {user.name} | <MailIcon /> {user.email}
                    </Typography>
                    
                    <Typography variant="h6" gutterBottom>
                        {body.charAt(0).toUpperCase() + body.slice(1)}.
                    </Typography>
                    
                    <Typography variant="button" display="block" gutterBottom>
                        <Link to={`/post/${id}`} style={{textDecoration:'none'}}>
                            <Button variant="contained" style={{backgroundColor:'#6c757d', color:'white'}}>
                                View Details
                            </Button>

                        </Link>
                    </Typography>
                </Paper>
            </Grid>
                
        </Grid>
    </div>
        
    );
};

export default Post;

