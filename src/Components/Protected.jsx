import React from 'react'
import { addDoc, collection } from "firebase/firestore"; 
import { db } from '../db/firebase';
import { ref, set } from 'firebase/database';

const Protected = () => {


const add = async () => {
  const data = {
    name: "candidate4",
    appliedFor: ["teaching"],
    currRound: 0,
    github:"https://github.com/Sivam2313"
  };
  writeUserData(data.name, data.appliedFor, data.currRound, data.github);
}

function writeUserData( name, appliedFor, currRound, github) {
  set(ref(db, 'candidates/cantidate5'), {
    name: name,
    appliedFor: appliedFor,
    currRound : currRound,
    github: github
  });
}


  return (
    <div>
      <button onClick={add}>Add</button>
    </div>
  )
}

export default Protected