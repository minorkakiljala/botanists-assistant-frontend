import React from 'react';
import AddPlantsForm from './components/AddPlantsForm';
import { IoMdFlower } from 'react-icons/io';
import PlantList from './components/PlantList';

import './App.css';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const handleRefresh = (value: boolean) => {
    console.log('Handling refresh');
    setRefreshing(value);
  };
  return (
    <div className={`App ${darkMode ? 'App--DarkMode' : ''}`}>
      <header className="App-header">
        <IoMdFlower color="var(--color-green)" />
        <h1 className="App-title">Botanists Assistant</h1>
      </header>
      <PlantList
        setRefreshing={(value: boolean) => handleRefresh(value)}
        refreshing={refreshing}
      />
      <AddPlantsForm setRefreshing={(value: boolean) => handleRefresh(value)} />
    </div>
  );
};

export default App;
