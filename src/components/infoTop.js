import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FirebaseNbrContractChecker from "../components/verifNbrContrat";
import FirebaseContractChecker from "../components/verifDate";


function infoTop() {
  return (
    <Box sx={{mr:'5%', height:'100px'}}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={0} sx={{textAlign:'center', p:'10px', backgroundColor:'primary.main', color:'white', height:'100%'}}>
              <Typography sx={{ fontSize:'16px', fontWeight: 'bold' }}><FirebaseContractChecker/><br></br></Typography>
              <Typography>Contrat qui expire demain </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={0} sx={{textAlign:'center', p:'10px', backgroundColor:'white', color:'primary.main', borderColor: 'primary.main', border: 1}}>
              <Typography sx={{ fontSize:'16px', fontWeight: 'bold' }}><FirebaseNbrContractChecker/><br></br></Typography>
              <Typography>Machines en cours de location </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default infoTop