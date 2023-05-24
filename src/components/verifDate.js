import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebaseConfig";

const FirebaseContractChecker = () => {
  const [ongoingContracts, setOngoingContracts] = useState(null);

  useEffect(() => {
    const checkOngoingContracts = async () => {
      const contractsCollection = collection(db, 'contrats');

      try {
        const startDateQuerySnapshot = await getDocs(contractsCollection);

        const endDateThreshold = new Date(); // Date actuelle

        endDateThreshold.setDate(endDateThreshold.getDate() + 1); // Ajouter 1 jour à la date actuelle
        
        setOngoingContracts(
          startDateQuerySnapshot.docs.filter(
            contrat =>
              contrat.data().endDate.toDate() >= new Date() && // Contrat n'a pas encore expiré
              contrat.data().endDate.toDate() <= endDateThreshold // Contrat expire aujourd'hui ou demain
          ).length
        );       

      } catch (error) {
        console.error('Erreur lors de la récupération des contrats en cours :', error);
      }
    };

    checkOngoingContracts();
  }, []);

  return (ongoingContracts);
};

export default FirebaseContractChecker;
