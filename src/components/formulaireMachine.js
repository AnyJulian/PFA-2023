import React, { useState } from "react";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Grid from '@mui/material/Grid';


function ContractForm() {
  const [numContract, setNumContract] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "contrats"), {
        numContract,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        location,
        company,
        amount,
        status,
        image,
      });
      console.log("Document written with ID: ", docRef.id);
      // Réinitialise le formulaire après la soumission
      setNumContract("");
      setStartDate("");
      setEndDate("");
      setLocation("");
      setCompany("");
      setAmount("");
      setStatus("");
      setImage("")
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", (event) => setImage(event.target.result));
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        sx={{padding:'10px'}}
      >
        <Grid item>
          <TextField label="Numéro du contrat" value={numContract} onChange={(e) => setNumContract(e.target.value)} />
        </Grid>
        <Grid item>
          <TextField InputLabelProps={{shrink: true}} label="Date de début" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </Grid>
        <Grid item>
          <TextField InputLabelProps={{shrink: true}} label="Date de fin" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </Grid>
        <Grid item>
          <TextField label="Lieu du chantier" value={location} onChange={(e) => setLocation(e.target.value)} />
        </Grid>
        <Grid item>
          <TextField label="Société" value={company} onChange={(e) => setCompany(e.target.value)} />
        </Grid>
        <Grid item>
          <TextField label="Montant" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </Grid>
        <Grid item>
          <FormControl sx={{width:'100px'}}>
            <InputLabel >État</InputLabel>
              <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                <MenuItem value="en cours">En cours</MenuItem>
                <MenuItem value="termine">Terminé</MenuItem>
              </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <input name="image" type="file" onChange={handleImage} />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            Ajouter le contrat
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ContractForm;
