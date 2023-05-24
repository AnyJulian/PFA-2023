import React from 'react'
import Typography from '@mui/material/Typography';
import todo from '../img/status.png';
import Box from '@mui/material/Box';


function taches() {
  return (
    <Box sx={{ pt:'20px' }}>
        <Typography variant='title' sx={{ pb:'10px' }}>Tâches<br></br></Typography>
        <img className='img-tache' src={todo} alt='carte'></img>
    </Box >
  )
}

export default taches