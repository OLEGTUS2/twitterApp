import React from 'react';

import './app-header.css';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { deepOrange, deepPurple } from '@material-ui/core/colors';




const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        : hover {
            color: red;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  }));

const AppHeader = ({liked, allPosts}) => {
    const classes = useStyles();
    return ( 
        <Header >
            <h1>ALEH TSIUSIANKOU</h1>
            <Avatar className={classes.orange}>AT</Avatar>
            <h2>{allPosts} notes, liked {liked} </h2>
        </Header>
       
    )
}



export default AppHeader;
