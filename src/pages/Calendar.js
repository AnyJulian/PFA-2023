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
        <Typography sx={{p:'10px'}}>Sur la page "Login", il y a un test qui ne fonctionne pas comme je le souhaiterai, de Gantt</Typography>
    </Box>

  )
}

export default Calendar