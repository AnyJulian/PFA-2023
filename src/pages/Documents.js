import React from 'react'
import Affiche from "../components/afficheMachine";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormMachine from "../components/formMachine"; 

function Documents() {
  return (
    <Box sx={{ pt:'15px', pb:'150px'}}>
      <Typography variant='title' sx={{ pl:'10px'}}>Mes documents</Typography>
      <Affiche />
      <FormMachine/>
    </Box>
  )
}

export default Documents