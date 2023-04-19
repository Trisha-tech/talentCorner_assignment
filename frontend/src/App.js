import React from 'react';
import { Routes as Switch, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import HomePage from './allPages/HomePage';

function App() {
  return (
    <MainPage>
      <Switch>
        <Route path="/" element={<HomePage />} />
      </Switch>
    </MainPage>
  );
}

export default App;
