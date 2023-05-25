import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Grid, Button, TextField } from '@mui/material';
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function MachineItem({ machine }) {
  const [editing, setEditing] = useState(false);
  const [editedMachine, setEditedMachine] = useState(machine);

  const handleChange = (event) => {
    setEditedMachine((prevMachine) => ({
      ...prevMachine,
      [event.target.name]: event.target.value,
    }));
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    try {
      // Mettre à jour le document correspondant dans Firebase Firestore
      await updateDoc(doc(db, "contrats", machine.id), editedMachine);
  
      setEditing(false);
    } catch (error) {
      // Gérer les erreurs de sauvegarde
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      // Supprimer le document correspondant dans Firebase Firestore
      await deleteDoc(doc(db, "contrats", machine.id));
  
      // Effectuer toute autre action nécessaire après la suppression du contrat
      // Par exemple, mettre à jour l'état ou afficher un message de confirmation
  
    } catch (error) {
      // Gérer les erreurs de suppression
      console.log(error);
    }
  };

  return (
    <Grid item xs={12} sx={{ m: '5px' }}>
      <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        background: '#E3E3E3',
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sx={{textAlign:'center'}}>
          <Typography>Contrat {machine.numContract}</Typography>
        </Grid>
        <Grid item xs={4}>
          <ButtonBase sx={{ width: 100, height: 100 }}>
            <Img alt="machine" src={machine.image} />
          </ButtonBase>
          <Typography>Contrat {machine.status}</Typography>
        </Grid>
        <Grid item xs={8} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
            <Typography>Compagnie :  {machine.company}</Typography>
            <Typography>Date de début {machine.startDate.toDate().toLocaleString()}</Typography>
            {editing ? (
                <TextField
                  name="endDate"
                  label="Date de fin"
                  type="date"
                  value={editedMachine.endDate}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              ) : (
                <Typography>Date de fin {machine.endDate.toDate().toLocaleString()}</Typography>
              )}
          </Grid>
          <Grid item>
            {editing ? (
              <Button variant="contained" color="primary" onClick={handleSave}>
                Enregistrer
              </Button>
            ) : (
              <>
                <Button variant="contained" onClick={handleEdit}>
                  Prolonger
                </Button>
                <Button variant="contained" color="secondary" onClick={handleDelete} sx={{ml:'10px'}}>
                  Supprimer
                </Button>
              </>
            )}
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1" component="div">
              {editedMachine.amount}€
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </Grid>
  );
}

export default MachineItem;
