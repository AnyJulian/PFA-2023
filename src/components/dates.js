import React from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    mobileFirst : true,
  };

function dates() {
  return (
    <Box sx={{ pt:'20px' }}>
        <Typography variant='title' sx={{ pb:'10px' }}>Planning</Typography>
        <Slider className="sliderTest" {...settings}>
            <Box sx={{m:'3px'}}>
                <Paper sx={{height: '87px',
                            width: '78px',
                            borderRadius: '6px',
                            backgroundColor:'primary.main',
                            color:'white',
                            textAlign:'center',
                            pt:'5px',
                        }}>
                    <Typography >Mardi</Typography>
                    <Typography sx={{ fontSize:'30px' }}>3</Typography>
                    <Typography sx={{ fontSize:'50px', m:'-45px' }}>...</Typography>
                </Paper>
            </Box>
            <Box sx={{m:'3px'}}>
                <Paper sx={{height: '87px',
                            width: '78px',
                            borderRadius: '6px',
                            backgroundColor:'#E3E3E3',
                            color:'white',
                            textAlign:'center',
                            pt:'5px',
                        }}>
                    <Typography >Mercredi</Typography>
                    <Typography sx={{ fontSize:'30px' }}>4</Typography>
                    <Typography sx={{ fontSize:'50px', m:'-45px' }}>.</Typography>
                </Paper>
            </Box>
            <Box sx={{m:'3px'}}>
                <Paper sx={{height: '87px',
                            width: '78px',
                            borderRadius: '6px',
                            backgroundColor:'#E3E3E3',
                            color:'white',
                            textAlign:'center',
                            pt:'5px'
                        }}>
                    <Typography >Jeudi</Typography>
                    <Typography sx={{ fontSize:'30px' }}>5</Typography>
                    <Typography sx={{ fontSize:'50px', m:'-45px' }}>..</Typography>
                </Paper>
            </Box>
            <Box sx={{m:'3px'}}>
                <Paper sx={{height: '87px',
                            width: '78px',
                            borderRadius: '6px',
                            backgroundColor:'#E3E3E3',
                            color:'white',
                            textAlign:'center',
                            pt:'5px'
                        }}>
                    <Typography >Vendredi</Typography>
                    <Typography sx={{ fontSize:'30px' }}>6</Typography>
                    <Typography sx={{ fontSize:'50px', m:'-45px' }}>..</Typography>
                </Paper>
            </Box>
            <Box sx={{m:'3px'}}>
                <Paper sx={{height: '87px',
                            width: '78px',
                            borderRadius: '6px',
                            backgroundColor:'#E3E3E3',
                            color:'white',
                            textAlign:'center',
                            pt:'5px'
                        }}>
                    <Typography >Samedi</Typography>
                    <Typography sx={{ fontSize:'30px' }}>7</Typography>
                    <Typography sx={{ fontSize:'50px', m:'-45px' }}>..</Typography>
                </Paper>
            </Box>
        </Slider>

    </Box>
  )
}

export default dates