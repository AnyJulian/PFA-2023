import React from 'react'
import Bulle from "../components/infoTop";
import Dates from "../components/dates";
import Carte from "../components/cartes";
import Bonjour from "../components/bonjour";
import ContratsRecents from "../components/contratsRecents";
import Box from '@mui/material/Box';
import Documents from "../components/machinePetitItem";



function Home() {
  return (
    <Box sx={{ pl:'5%', pb:'100px' }}>
      <Bonjour />
      <Bulle />
      <Dates />
      <Documents/>
      <Carte />
      <ContratsRecents />
    </Box>
  )
}

export default Home