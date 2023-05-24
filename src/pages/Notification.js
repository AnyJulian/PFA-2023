import React from 'react'
import Typography from '@mui/material/Typography';
import AfficheNotif from "../components/afficheNotif";
import Box from '@mui/material/Box';


function Notification() {
  return (
    <Box sx={{ p:'10px' }}>
      <Typography variant='title'>Notifications</Typography>
      <AfficheNotif />
    </Box>
  )
}

export default Notification