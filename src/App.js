import './App.css';
import * as React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from './Home.js';
import MenuBar from './MenuBar';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <MenuBar />
        <Routes>
          <Route path={"/"} element={<Home />}/>
          <Route path={"/resume"} element={<Resume />}/>
          <Route path={"/projects"} element={<Projects />}/>
          <Route path={"/contact"} element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
