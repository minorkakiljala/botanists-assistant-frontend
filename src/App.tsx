import React from 'react';
import AddPlantsForm from './components/AddPlantsForm';
import { IoMdFlower, IoMdMoon, IoMdSunny } from 'react-icons/io';
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
      <div className="App-Container">
        <header className="App-header">
          <IoMdFlower color="var(--color-green)" />
          <h1 className="App-title">Botanists Assistant</h1>
          {darkMode ? (
            <IoMdSunny
              color="var(--color-yellow)"
              className="App-DarkModeToggle"
              onClick={() => setDarkMode(false)}
            />
          ) : (
            <IoMdMoon
              color="var(--color-yellow)"
              className="App-DarkModeToggle"
              onClick={() => setDarkMode(true)}
            />
          )}
        </header>
        <PlantList
          setRefreshing={(value: boolean) => handleRefresh(value)}
          refreshing={refreshing}
        />
        <AddPlantsForm
          setRefreshing={(value: boolean) => handleRefresh(value)}
        />
      </div>
    </div>
  );
};

export default App;
