import React from 'react';
import './App.css';
import AddPlantsForm from './components/AddPlantsForm';
import { IoMdFlower } from 'react-icons/io';
import PlantList from './components/PlantList';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <div className={`App ${darkMode ? 'App--DarkMode' : ''}`}>
      <header className="App-header">
        <IoMdFlower color="var(--color-green)" />
        <h1 className="App-title">Botanists Assistant</h1>
      </header>
      <PlantList />
      <AddPlantsForm />
    </div>
  );
};

export default App;
