import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import Champions from "./Pages/Champions/Champions";
import ChampInfo from "./Pages/ChampInfo/ChampInfo";

function App() {
  return (

    <>
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/League-of-Legends-Info/" Component={Homepage} />
          <Route path="/Champions" Component={Champions} />
          <Route path="/ChampInfo/:id" Component={ChampInfo} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
