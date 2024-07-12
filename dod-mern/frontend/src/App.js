import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Edit from './screens/Edit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/edit" element={<Edit/>} />
      </Routes>
    </Router>
  );
}

export default App;
