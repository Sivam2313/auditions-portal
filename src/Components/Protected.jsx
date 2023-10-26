import React from 'react'
import { addDoc, collection } from "firebase/firestore"; 
import { db, realTimeDB } from '../db/firebase';
import { ref, set } from 'firebase/database';

const Protected = () => {


const add = async () => {
  const data = {
    name: "NewCan",
    appliedFor: ["teaching"],
    currRound: 0,
    github:"https://github.com/Sivam2313",
    PenPaperMarks:{
        'Design':0,
        'Teaching and PS':0,
        'Web Development':0,
      }
  };
  writeUserData(data.name, data.appliedFor, data.currRound, data.github, data.PenPaperMarks);
}

function writeUserData( name, appliedFor, currRound, github, PenPaperMarks) {
  set(ref(realTimeDB, 'candidates/cantidate1'), {
    name: name,
    appliedFor: appliedFor,
    currRound : currRound,
    github: github,
    PenPaperMarks : PenPaperMarks
  });
}


  return (
    <div>
      <button onClick={add}>Add</button>
    </div>
  )
}

export default Protected