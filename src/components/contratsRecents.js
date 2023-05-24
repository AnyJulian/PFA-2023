import React from 'react'
import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import Box from '@mui/material/Box';
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import miniPelle from '../img/mini-pelle.png';
import marteauPicker from '../img/marteauPicker.png';
import scie from '../img/scie.png';
import grue from '../img/grue.png';

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  mobileFirst : true,

};

const docs = [{id:'001', image: miniPelle, company:'Castorama', Date:'23/04/2023'}, {id:'002', image: marteauPicker, company:'Castorama', Date:'25/12/2022'}, {id:'003', image: grue, company:'Castorama', Date:'25/12/2022'}, {id:'004', image: scie, company:'Castorama', Date:'02/08/2022'}]

function contratsRecents() {
  return (
    <Box sx={{ pt:'20px' }}>
      <Typography variant='title' sx={{ pb:'10px' }}>Louez a nouveau<br></br></Typography>
        <Slider className="sliderTest" {...settings}>
          {docs.map((doc) => (
            <Box key={doc.id} elevation={2} sx={{backgroundColor:'#E3E3E3', height: '170px', width: '140px', p:'5px', border:3, borderColor:'white', borderRadius:2}}>
              <Box sx={{position:'relative', left:'10%'}}>
                <img src={doc.image} alt='machine' style={{maxWidth: '91px',height: '78px', marginTop:'10px', marginBottom:'10px'}}></img>
              </Box>
              <Typography sx={{fontSize: '7px', fontWeight: 600}}>Chantier : {doc.company}</Typography>
              <Typography sx={{fontSize: '7px'}}>Contrat du {doc.Date}</Typography>
              <Typography sx={{fontSize: '7px', mt:'8px', bottom:'-8%',left:'38%', position:'relative'}}>voir plus</Typography>
            </Box> 
          ))}
      </Slider>
    </Box>
  )
}

export default contratsRecents