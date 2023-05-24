import React, { useState, useEffect } from "react";
import Snackbar from '@mui/material/Snackbar';
import { collection, query, onSnapshot, where, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";


function StatusChangeNotification() {
    const [newNotificationCount, setNewNotificationCount] = useState(0);

  useEffect(() => {
    const q = query(collection(db, "contrats"), where("status", ">", ""));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "modified") {
          const docData = change.doc.data();
          const message = `Le statut du contrat n°${docData.numContract} a été modifié le ${new Date().toLocaleString()}.`;

          // Ajouter le message à la collection "notifications" de Firestore
          addDoc(collection(db, "notifications"), {
            message: message,
            timestamp: serverTimestamp()
          });

          setNewNotificationCount((prevCount) => prevCount + 1);
        }
      });
    });

    return () => unsubscribe();
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNewNotificationCount(0);
  };

  return (
    <div>
      <Snackbar
        open={newNotificationCount > 0}
        autoHideDuration={3000}
        onClose={handleClose}
        message={`Vous avez ${newNotificationCount} nouvelles notifications`}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </div>
  );
}

export default StatusChangeNotification;
