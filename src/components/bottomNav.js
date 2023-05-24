import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import { Link } from 'react-router-dom';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: '95%', backgroundColor:'#333333', borderRadius:'25px', position:'fixed', bottom:'1%', left:'2.5%', zIndex:9999 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="home"
        component={Link}
        to='/'
        icon={<HomeOutlinedIcon />}
        sx={{ color:'#C5C6C8', pl:'50px'}}
      />
      <BottomNavigationAction
        label="Calendar"
        value="calendar"
        component={Link}
        to='/calendar'
        icon={<CalendarTodayOutlinedIcon />}
        sx={{ color:'#C5C6C8', pl:'20px' }}
      />
      <BottomNavigationAction
        label="Docs"
        value="docs"
        component={Link}
        to='/documents'
        icon={<InsertDriveFileOutlinedIcon />}
        sx={{ color:'#C5C6C8' }}
      />
        <BottomNavigationAction 
          label="check" 
          value="check" 
          component={Link}
          to='/todo'
          icon={<MapRoundedIcon />} 
          sx={{ color:'#C5C6C8', pr:'20px' }}
        />
      <BottomNavigationAction 
        label="Profile" 
        value="profile" 
        component={Link}
        to='/login'
        icon={<PersonOutlineOutlinedIcon />} 
        sx={{ color:'#C5C6C8', pr:'50px' }}
      />
    </BottomNavigation>
  );
}