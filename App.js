import React, { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./Components/Movies";
import './App.css';


function App() {
  
  return (
    <div className="App">
      <header className="Header">
        <h1 className="heading">Couch Potato</h1>
        </header>
     <Movies />
    </div>
  );
}

export default App;
