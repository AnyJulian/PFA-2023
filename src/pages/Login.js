import React from 'react'
// import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
// import { collection, onSnapshot } from "firebase/firestore";
// import { db } from "../firebaseConfig"; // importez votre config Firebase
// import { Gantt } from 'gantt-task-react';
// import "gantt-task-react/dist/index.css";

// var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
//   if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
//       if (ar || !(i in from)) {
//           if (!ar) ar = Array.prototype.slice.call(from, 0, i);
//           ar[i] = from[i];
//       }
//   }
//   return to.concat(ar || Array.prototype.slice.call(from));
// };


function Login() {
  // const [contrats, setContrats] = useState([]);

  // useEffect(() => {

  //   // Écouter les modifications de la collection "contrats"
  //   const unsubscribe = onSnapshot(collection(db, 'contrats'), (snapshot) => {
  //     const newContrats = [];
  //     snapshot.forEach((doc) => {
  //       const contrat = doc.data();
  //       contrat.id = doc.id;
  //       newContrats.push(contrat);
  //     });
  //     setContrats(newContrats);
  //   });

  //   // Nettoyage de l'abonnement lors du démontage du composant
  //   return () => unsubscribe();
  // }, []);

  // // Transformer les données des contrats pour les afficher dans le Gantt
  // const tasks = contrats.map((contrat) => {
  //   if (!contrat.startDate || !contrat.endDate) {
  //     return null;
  //   }
  
  //   const startDate = contrat.startDate.toDate();
  //   const endDate = contrat.endDate.toDate();
  
  //   if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
  //     return null;
  //   }
  
  //   const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  //   const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

  
  //   return {
  //     start,
  //     end,
  //     name: contrat.numContrat,
  //     id: contrat.id,
  //     type: 'task',
  //     progress: 100,
  //     isDisabled: false,
  //     styles: { progressColor: '#E51836', progressSelectedColor: '#ff9e0d' },
  //   };
  // }).filter((task) => task !== null);
  
  


  return (
    <>
      <Typography variant='title'>Connexion</Typography>
      {/* vv Ce Code est à moitier fonctionnel, il a une erreur au démarrage mais après l'avoir enlevé puis réintégré au code, ça fonctionne, mais si on actualise, ça ne marche plus. C'est bizarre vv */}
      {/* <Gantt tasks={tasks} headerHeight={40} listCellWidth={false}	/> */}
    </>

  )
}

export default Login