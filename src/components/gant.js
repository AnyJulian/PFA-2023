import React from 'react'


import { Gantt } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var tasks = __spreadArray([
  {
      start: new Date(2023, 2, 1),
      end: new Date(2023, 2, 4),
      name: 'Dumper',
      id: 'Task 0',
      type: 'task',
      progress: 100,
      isDisabled: false,
      styles: { progressColor: '#E51836', progressSelectedColor: '#ff9e0d' },
  },
  {
      start: new Date(2023, 2, 2),
      end: new Date(2023, 2, 6),
      name: 'Découpeuse portable',
      id: 'Task 1',
      type: 'task',
      progress: 100,
      isDisabled: true,
      styles: { progressColor: '#E51836', progressSelectedColor: '#ff9e0d' },
  },
  {
      start: new Date(2023, 2, 2),
      end: new Date(2023, 2, 9),
      name: 'Perforateur électrique',
      id: 'Task 2',
      type: 'task',
      progress: 100,
      isDisabled: true,
      styles: { progressColor: '#E51836', progressSelectedColor: '#ff9e0d' },
  },
  {
      start: new Date(2023, 2, 6),
      end: new Date(2023, 2, 13),
      name: 'Tronçonneuse',
      id: 'Task 3',
      type: 'task',
      progress: 100,
      isDisabled: true,
      styles: { progressColor: '#E51836', progressSelectedColor: '#ff9e0d' },
  }
], true);

function Gant() {
  return (
    <Gantt tasks={tasks} headerHeight={40} listCellWidth={false}	/>
  )
}

export default Gant