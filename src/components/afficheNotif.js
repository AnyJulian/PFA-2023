import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function AfficheNotif() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    async function fetchDocs() {
      const querySnapshot = await getDocs(collection(db, "notifications"));
      setDocs(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    }
    fetchDocs();
  }, []);

  const handleDelete = async (id) => {
  await deleteDoc(doc(db, "notifications", id));
  setDocs(docs.filter((doc) => doc.id !== id));
};


  return (
    <div>
      <Grid container spacing={3}>
        {docs.map((doc) => (
          <Grid item xs={12} key={doc.id} sx={{ m:'5px' }}>
            <Paper elevation={0}>
              <Typography >Message : {doc.message}</Typography>
              <IconButton
                aria-label="delete"
                onClick={() => handleDelete(doc.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default AfficheNotif;
