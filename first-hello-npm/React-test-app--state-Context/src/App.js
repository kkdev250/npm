import React from 'react';
import './App.css';
import InputComponent from './components/InputComponent';
import ButtonComponent from './components/ButtonComponent';
import TextComponent from './components/TextComponent';
import { AppProvider } from './context/context';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <header className="App-header">
          <div className="top-section">
            <InputComponent />
            <ButtonComponent />
          </div>
          <TextComponent />
        </header>
      </div>
    </AppProvider>
  );
}

export default App;