import React, { useContext, useRef, useEffect } from 'react';
import { InputValueContext, ClickCountContext } from '../context/context';
import { helloNpm } from '@kkopicera-sh/hello-npm-package'

const TextComponent = () => {
  const { inputValue } = useContext(InputValueContext);
  const { clickCount } = useContext(ClickCountContext);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>
      <p>Input value: {inputValue}</p>
      <p>Button click count: {clickCount}</p>
      <p>Render count: {renderCount.current}</p>
      <p>{helloNpm()}</p>
    </div>
  );
}

export default React.memo(TextComponent);