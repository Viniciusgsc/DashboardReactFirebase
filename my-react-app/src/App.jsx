import { getDatabase, ref, child, get, DataSnapshot } from "firebase/database";
import { initializeApp } from "firebase/app";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyC65hxX3ZApTviIuQF_9-h_0QvVc0VZsT4",
  authDomain: "toptank-e27e1.firebaseapp.com",
  databaseURL: "https://toptank-e27e1-default-rtdb.firebaseio.com",
  projectId: "toptank-e27e1",
  storageBucket: "toptank-e27e1.appspot.com",
  messagingSenderId: "219790904311",
  appId: "1:219790904311:web:0508724fd5982c5bcbbcf2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const dbRef = ref(getDatabase());



export const App = () => {
  get(child(dbRef, `ranking`)).then((snapshot) => {
    setScore(snapshot.val())
  }
  )
  const [score, setScore] = useState({})
  return (
    Object.keys(score).map(nome => {
      return <div>
        <b>{nome}</b>: {score[nome]} <br />
      </div>
    })
  );
};