import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";



function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks') )|| []
  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Main tasks={tasks} setTasks={setTasks}/>
        <Footer tasks={tasks}/>
      </div>
    </BrowserRouter>
  );
}

export default App;