import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import MachineItem from './MachineItem';

import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // importez votre config Firebase
 
function Affiche() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'contrats'), (snapshot) => {
      setDocs(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => {
      // Arrêtez l'écoute de la collection lorsque le composant est démonté
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        {docs.map((doc) => (
          <MachineItem key={doc.id} machine={doc} />
        ))}
      </Grid>
    </div>
  );
}

export default Affiche;