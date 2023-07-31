import './App.css';
import NavBar from './components/navbar.js';
import React from 'react';
import News from './components/news';
import {
  Routes,
  Route,
} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <NavBar /> 
      <Routes>
        <Route exact path="/" element={<News country="us" category="science" />} />
        <Route exact path="/business"  element={<News key="business" country="us" category="business" />} />
        <Route exact path="/entertainment"  element={<News key="entertainment" country="us" category="entertainment" />} />
        <Route exact path="/general"  element={<News key="general" country="us" category="general" />} />
        <Route exact path="/health"  element={<News key="health" country="us" category="health" />} />
        <Route exact path="/science" element={<News  key="science" country="us" category="science" />} />
        <Route exact path="/sports"  element={<News key="sports" country="us" category="sports" />} />
        <Route exact path="/technology"  element={<News key="technology" country="us" category="technology" />} />
        
      </Routes>
    </div>
  );
}
