import React from 'react'
import Typography from '@mui/material/Typography';
import carte from '../img/carte.png';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function cartes() {
  return (
    <Box sx={{ pt:'20px' }}>
        <Typography variant='title' sx={{ pb:'10px' }}>Carte<br></br></Typography>
        <Link to='/toDo'>
          <img src={carte} alt='carte'></img>
        </Link>
    </Box >
  )
}

export default cartes