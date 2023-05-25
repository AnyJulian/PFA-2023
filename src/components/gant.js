import React, { useState, useEffect } from 'react'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Dialog from '@mui/material/Dialog';
import { Gantt } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import MachineItem from './MachineItem';
import haut from "../img/Calendar.png";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};





function Gant() {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleClickTask = (task) => {
    setOpen(true);
    setSelectedTask(task);
  };

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

  var tasks = __spreadArray([
    {
        start: new Date(2023, 5, 5),
        end: new Date(2023, 5, 12),
        name: 'Grue',
        id: 'Task 3',
        type: 'task',
        progress: 100,
        isDisabled: true,
        styles: { progressColor: '#E51836', progressSelectedColor: '#ff9e0d' },
        do: docs[3]
    },
    {
        start: new Date(2023, 5, 5),
        end: new Date(2023, 5, 25),
        name: 'Dumper',
        id: 'Task 2',
        type: 'task',
        progress: 100,
        isDisabled: true,
        styles: { progressColor: '#E51836', progressSelectedColor: '#ff9e0d' },
        do: docs[2]
    },
    {
        start: new Date(2023, 5, 11),
        end: new Date(2023, 6, 4),
        name: 'Dumper',
        id: 'Task 0',
        type: 'task',
        progress: 100,
        isDisabled: false,
        styles: { progressColor: '#E51836', progressSelectedColor: '#ff9e0d' },
        do: docs[0]
      },
    {
        start: new Date(2023, 5, 17),
        end: new Date(2023, 5, 25),
        name: 'Mini pelle',
        id: 'Task 1',
        type: 'task',
        progress: 100,
        isDisabled: true,
        styles: { progressColor: '#E51836', progressSelectedColor: '#ff9e0d' },
        do: docs[1]
    },
  ], true);

  return (
    <>
      <img src={haut} alt='Tmoche' style={{ marginLeft:'-10px', marginBottom:'-20px'}}></img>
      <Gantt
        tasks={tasks}
        headerHeight={0}
        listCellWidth={false}
        onClick={handleClickTask}
      />

      <Dialog open={open} onClose={() => setOpen(false)} >
        {selectedTask && (
          <>
            <h2>{selectedTask.name}</h2>
            <MachineItem machine={selectedTask.do}/>
          </>
        )}
      </Dialog>
    </>
  );
}

export default Gant;