import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Gant from "../components/gant";

function Calendar() {
  return (
    <Box sx={{ pt:'15px'}}>
      <Box sx={{ pl:'10px'}}>
        <Typography variant='title' sx={{p:'10px'}}>Planning</Typography>
      </Box>
      <Gant/>
    </Box>

  )
}

export default Calendar