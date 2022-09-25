import { getDatabase, ref, child, get, DataSnapshot } from "firebase/database";
import { initializeApp } from "firebase/app";
import { useState } from "react";
import React from "react";
import { Table } from "reactstrap";
import { Navbar } from "reactstrap";
import "./style.css";

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
    setScore(snapshot.val());
  });
  const [score, setScore] = useState({});
  return (
    <div className="container">
      <Navbar>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Dashboard Top Tank
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home 
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Top Tank Jogue Agora
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Navbar>
      <Table dark>
        <thead>
          <tr>
            <th>NOME DO JOGADOR</th>
            <th>PONTUAÇÃO DO JOGADOR</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(score).map((nome) => {
            return (
              <tr>
                <td>{nome}</td>
                <td>{score[nome]}</td>
              </tr>
            );
          })}
          ;
        </tbody>
      </Table>
    </div>
  );
};
