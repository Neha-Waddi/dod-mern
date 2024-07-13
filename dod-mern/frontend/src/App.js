import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import Edit from './screens/Edit/Edit';
import Start from './screens/Start/Start';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/start" exact element={<Start/>} />
        <Route path="/edit" element={<Edit/>} />
      </Routes>
    </Router>
  );
}

export default App;
