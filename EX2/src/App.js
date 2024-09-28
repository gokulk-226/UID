import React from 'react';
import './App.css';
import UserProfileCard from './components/userProfileCard';

export const App = () => {
  return React.createElement('div', { className: 'App' }, 
    React.createElement(UserProfileCard, null)
  );
};

export default App;
