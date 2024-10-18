import React, { useContext, useRef, useEffect } from 'react';
import { ClickCountContext } from '../context/context';

function ButtonComponent() {
  const { clickCount, setClickCount } = useContext(ClickCountContext);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>
      <p>Click Count: {clickCount}</p>
      <button onClick={handleClick}>Click Me</button>
      <p>Render count: {renderCount.current}</p>
    </div>
  );
}

export default React.memo(ButtonComponent);