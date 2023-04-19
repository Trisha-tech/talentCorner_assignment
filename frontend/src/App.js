import React from 'react';
import { Routes as Switch, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import HomePage from './allPages/HomePage';
import VerticalTabs from './allPages/VerticalTabs';
import './App.css'

function App() {
  return (
    <MainPage>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/tab" element={<VerticalTabs />} />
      </Switch>
    </MainPage>
  );
}

export default App;
