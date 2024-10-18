import React, { useEffect, useRef, useContext } from 'react';
import { InputValueContext } from '../context/context';

function InputComponent() {
  const { inputValue, setInputValue } = useContext(InputValueContext);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>
      <p>Input Value: {inputValue}</p>
      <input
        type="text"
        placeholder="Enter text here"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Render count: {renderCount.current}</p>
    </div>
  );
}

export default React.memo(InputComponent);