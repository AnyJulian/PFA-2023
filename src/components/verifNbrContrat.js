import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebaseConfig";


const FirebaseNbrContractChecker = () => {
  const [totalContracts, setTotalContracts] = useState(null);

  useEffect(() => {
    const countTotalContracts = async () => {
      const contractsCollection = collection(db, 'contrats');

      try {
        const querySnapshot = await getDocs(contractsCollection);
        const numTotalContracts = querySnapshot.size;
        setTotalContracts(numTotalContracts);
      } catch (error) {
        console.error('Erreur lors du comptage des contrats :', error);
      }
    };

    countTotalContracts();
  }, []);

  return (totalContracts);
};

export default FirebaseNbrContractChecker;
