import React from 'react'
import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import dumper from "../img/dumper.png";

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    arrows: false,
    mobileFirst : true,

  };


function machineEnLocation() {
  return (
    <Box sx={{ pt:'20px' }}>
        <Typography variant='title' sx={{ pb:'10px' }}>Planning</Typography>
        
        <Slider className="sliderTest" {...settings}>
            <Box sx={{height: '200px', width: '200px'}}>
                <Box sx={{backgroundColor:'#E3E3E3', height: '170px', width: '140px',borderRadius: '3px', p:'8px', m:'4px'}}>
                    <Typography sx={{fontSize: '7px', fontWeight: 600, textAlign: 'center'}}>Contrat 846841465</Typography>
                    <img src={dumper} alt='machine' style={{width: '91px',height: '78px', textAlign:'center', marginTop:'10px', marginBottom:'10px'}}></img>
                    <Typography sx={{fontSize: '7px', fontWeight: 600}}>Loxam Bagneux</Typography>
                    <Typography sx={{fontSize: '7px'}}>du 27/04 au 04/05</Typography>
                    <Link style={{color:'black'}} to='/documents'><Typography sx={{fontSize: '7px', textAlign:'center', mt:'8px'}}>voir plus</Typography></Link>
                </Box> 
            </Box>
            <Box>
                <Box sx={{backgroundColor:'#E3E3E3', height: '170px', width: '140px',borderRadius: '3px', p:'8px', m:'4px'}}>
                    <Typography sx={{fontSize: '7px', fontWeight: 600, textAlign: 'center'}}>Contrat 846841465</Typography>
                    <img src={dumper} alt='machine' style={{width: '91px',height: '78px', textAlign:'center', marginTop:'10px', marginBottom:'10px'}}></img>
                    <Typography sx={{fontSize: '7px', fontWeight: 600}}>Loxam Bagneux</Typography>
                    <Typography sx={{fontSize: '7px'}}>du 27/04 au 04/05</Typography>
                    <Link style={{color:'black'}} to='/documents'><Typography sx={{fontSize: '7px', textAlign:'center', mt:'8px'}}>voir plus</Typography></Link>
                </Box> 
            </Box>
            <Box>
                <Box sx={{backgroundColor:'#E3E3E3', height: '170px', width: '140px',borderRadius: '3px', p:'8px', m:'4px'}}>
                    <Typography sx={{fontSize: '7px', fontWeight: 600, textAlign: 'center'}}>Contrat 846841465</Typography>
                    <img src={dumper} alt='machine' style={{width: '91px',height: '78px', textAlign:'center', marginTop:'10px', marginBottom:'10px'}}></img>
                    <Typography sx={{fontSize: '7px', fontWeight: 600}}>Loxam Bagneux</Typography>
                    <Typography sx={{fontSize: '7px'}}>du 27/04 au 04/05</Typography>
                    <Link style={{color:'black'}} to='/documents'><Typography sx={{fontSize: '7px', textAlign:'center', mt:'8px'}}>voir plus</Typography></Link>
                </Box> 
            </Box>
            <Box>
                <Box sx={{backgroundColor:'#E3E3E3', height: '170px', width: '140px',borderRadius: '3px', p:'8px', m:'4px'}}>
                    <Typography sx={{fontSize: '7px', fontWeight: 600, textAlign: 'center'}}>Contrat 846841465</Typography>
                    <img src={dumper} alt='machine' style={{width: '91px',height: '78px', textAlign:'center', marginTop:'10px', marginBottom:'10px'}}></img>
                    <Typography sx={{fontSize: '7px', fontWeight: 600}}>Loxam Bagneux</Typography>
                    <Typography sx={{fontSize: '7px'}}>du 27/04 au 04/05</Typography>
                    <Link style={{color:'black'}} to='/documents'><Typography sx={{fontSize: '7px', textAlign:'center', mt:'8px'}}>voir plus</Typography></Link>
                </Box> 
            </Box>
        </Slider>
        
        <Box sx={{backgroundColor:'#E3E3E3', height: '170px', width: '140px',borderRadius: '3px', p:'8px', m:'4px'}}>
            <Typography sx={{fontSize: '7px', fontWeight: 600, textAlign: 'center'}}>Contrat 846841465</Typography>
            <img src={dumper} alt='machine' style={{width: '91px',height: '78px', textAlign:'center', marginTop:'10px', marginBottom:'10px'}}></img>
            <Typography sx={{fontSize: '7px', fontWeight: 600}}>Loxam Bagneux</Typography>
            <Typography sx={{fontSize: '7px'}}>du 27/04 au 04/05</Typography>
            <Link style={{color:'black'}} to='/documents'><Typography sx={{fontSize: '7px', textAlign:'center', mt:'8px'}}>voir plus</Typography></Link>
        </Box>                    
    </Box>

  )
}

export default machineEnLocation