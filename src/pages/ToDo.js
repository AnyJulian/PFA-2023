import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MapContainer, TileLayer, SVGOverlay } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import pinNoire from '../img/pinNoir.svg';
import pinRouge from '../img/pinRouge.svg';

const bounds1 = [
  [48.8692, 2.3781],
  [48.8705, 2.3820],
]
const bounds2 = [
  [48.869657, 2.378394],
  [48.8705, 2.3815],
]
const bounds3 = [
  [48.86980, 2.3783],
  [48.87009, 2.38109],
]
const bounds4 = [
  [48.86990, 2.37899],
  [48.865, 2.389],
] 

function ToDo() {
  return (
    <>
      <Typography variant='title' sx={{ p:'5%' }}>Carte</Typography>
      <Box sx={{width: '100%', height: '100%', borderRadius:'8px', pt:'10px'}}>
        <MapContainer center={[48.869657, 2.378394]} zoom={17} scrollWheelZoom={false} style={{width:'90%', height: '70%', marginLeft:'5%'}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          <SVGOverlay attributes={{ stroke: '#E51836' }} bounds={bounds1}>
            <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7918 11.4584C19.7918 16.7029 14.4203 19.851 12.8979 20.6379C12.6449 20.7687 12.3554 20.7687 12.1024 20.6379C10.58 19.851 5.2085 16.7029 5.2085 11.4584C5.2085 7.43134 8.47309 4.16675 12.5002 4.16675C16.5272 4.16675 19.7918 7.43134 19.7918 11.4584Z" fill="#E51836"/>
            <circle cx="12.5" cy="11.4583" r="3.125" fill="white"/>
            </svg>
          </SVGOverlay>
          <SVGOverlay attributes={{ stroke: '#E51836' }} bounds={bounds2}>
            <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7918 11.4584C19.7918 16.7029 14.4203 19.851 12.8979 20.6379C12.6449 20.7687 12.3554 20.7687 12.1024 20.6379C10.58 19.851 5.2085 16.7029 5.2085 11.4584C5.2085 7.43134 8.47309 4.16675 12.5002 4.16675C16.5272 4.16675 19.7918 7.43134 19.7918 11.4584Z" fill="#E51836"/>
            <circle cx="12.5" cy="11.4583" r="3.125" fill="white"/>
            </svg>
          </SVGOverlay>
          <SVGOverlay attributes={{ stroke: '#E51836' }} bounds={bounds3}>
            <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7918 11.4584C19.7918 16.7029 14.4203 19.851 12.8979 20.6379C12.6449 20.7687 12.3554 20.7687 12.1024 20.6379C10.58 19.851 5.2085 16.7029 5.2085 11.4584C5.2085 7.43134 8.47309 4.16675 12.5002 4.16675C16.5272 4.16675 19.7918 7.43134 19.7918 11.4584Z" fill="#E51836"/>
            <circle cx="12.5" cy="11.4583" r="3.125" fill="white"/>
            </svg>
          </SVGOverlay>
          <SVGOverlay attributes={{ stroke: '#414246' }} bounds={bounds4}>
            <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7918 11.4584C19.7918 16.7029 14.4203 19.851 12.8979 20.6379C12.6449 20.7687 12.3554 20.7687 12.1024 20.6379C10.58 19.851 5.2085 16.7029 5.2085 11.4584C5.2085 7.43134 8.47309 4.16675 12.5002 4.16675C16.5272 4.16675 19.7918 7.43134 19.7918 11.4584Z" fill="#414246"/>
            <circle cx="12.5" cy="11.4583" r="3.125" fill="white"/>
            </svg>
          </SVGOverlay>
        </MapContainer>
        <Box sx={{ml:'5%'}}>
          <Box>
            <img src={pinNoire} alt='pin'></img>
            Agence Loxam
          </Box>
          <Box>
            <img src={pinRouge} alt='pin'></img>
            Vos machines
          </Box>
        </Box>
      </Box>
    </>  
  )
}

export default ToDo