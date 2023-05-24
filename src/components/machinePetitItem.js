import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; // importez votre config Firebase
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    mobileFirst : true,

  };

function Documents() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    async function fetchDocs() {
      const querySnapshot = await getDocs(collection(db, "contrats"));
      setDocs(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    }
    fetchDocs();
  }, []);
 
  return (
    <Box sx={{ pt:'20px' }}>
        <Typography variant='title'>Vos machines en cours de location</Typography>
        <Slider className="sliderTest" {...settings}>
            {docs.map((doc) => {
                const startDate = doc.startDate.toDate();
                const endDate = doc.endDate.toDate();

                const startDateString = startDate.toLocaleDateString();
                const endDateString = endDate.toLocaleDateString();

                return (
                    <Box key={doc.id} elevation={2} sx={{backgroundColor:'#E3E3E3', height: '170px', width: '140px', p:'5px', border:3, borderColor:'white', borderRadius:2}}>
                    <Typography sx={{fontSize: '7px', fontWeight: 600, textAlign: 'center'}}>Contrat {doc.numContract}</Typography>
                    <img src={doc.image} alt='machine' style={{width: '91px',height: '78px', textAlign:'center', marginTop:'10px', marginBottom:'10px'}}></img>
                    <Typography sx={{fontSize: '7px', fontWeight: 600}}>Chantier : {doc.company}</Typography>
                    <Typography sx={{fontSize: '7px'}}>du {startDateString} au {endDateString}</Typography>
                    <Link style={{color:'black'}} to='/documents'><Typography sx={{fontSize: '7px', textAlign:'center', mt:'8px'}}>voir plus</Typography></Link>
                    </Box> 
                );
            })}
        </Slider>
    </Box>
  );
}

export default Documents;
