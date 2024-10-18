import React, { createContext, useState } from 'react';

const InputValueContext = createContext();
const ClickCountContext = createContext();

const InputValueProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <InputValueContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputValueContext.Provider>
  );
};

const ClickCountProvider = ({ children }) => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <ClickCountContext.Provider value={{ clickCount, setClickCount }}>
      {children}
    </ClickCountContext.Provider>
  );
};

const AppProvider = ({ children }) => {
  return (
    <InputValueProvider>
      <ClickCountProvider>
        {children}
      </ClickCountProvider>
    </InputValueProvider>
  );
};

export { InputValueContext, ClickCountContext, AppProvider };
