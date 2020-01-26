import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddPlantsForm from './components/AddPlantsForm';
import Icon from 'react-icons';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Icon />
      </header>
      <AddPlantsForm />
    </div>
  );
};

export default App;
