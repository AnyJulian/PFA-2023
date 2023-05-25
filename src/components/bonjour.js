import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";


function Bonjour() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "notifications"), (snapshot) => {
      setCount(snapshot.size);
    });
    return unsubscribe;
  }, []);

  return (
    <Box sx={{ display:'inline' }}>
        <Typography variant='h5' sx={{mt:'20px', mb:'20px', width:'100%'}}>Bonjour Greg 👋 </Typography>
        <Box sx={{position:'absolute', top:'20px' ,right:'5%'}}>
            <Badge badgeContent={count} color="primary" >
                <Link to='/notification' color='primary' style={{color:'black'}}>
                  <NotificationsNoneOutlinedIcon sx={{ fontSize:'23px' }}/>
                </Link>
            </Badge>
        </Box>
    </Box>
  )
}

export default Bonjour