import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const CommentDetails = (props) => {

    const {name, email, body} = props.comment;
    const classes = useStyles();


    const [randomImage, setRandomImage] = useState();

    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=1`)
        .then(res => res.json())
        .then(data => setRandomImage(data.results[0].picture.large))
    },[])
    return (
        <div>
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={randomImage} />
                    </ListItemAvatar>

                    <ListItemText
                        primary={name.toUpperCase()}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    {email} <br/>
                                </Typography>
                                    {` — "${body.charAt(0).toUpperCase() + body.slice(1)}."`}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
        
            </List>
        </div>
    );
};

export default CommentDetails;