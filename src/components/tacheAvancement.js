import React from 'react'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '' : '#308fe8',
  },
}));

function tacheAvancement() {
  return (
    <Box sx={{pr:'5%', pt:'20px'}}>
      <Typography variant='title'>Avancement de vos tâches</Typography>
      <BorderLinearProgress variant="determinate" value={31} sx={{mt:'10px'}} />
      <BorderLinearProgress variant="determinate" value={13} sx={{mt:'10px'}}/>
      <BorderLinearProgress variant="determinate" value={56} sx={{mt:'10px'}}/>
    </Box> 
  )
}

export default tacheAvancement