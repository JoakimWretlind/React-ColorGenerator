import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './globalStyle';
import SingleColor from './SingleColor';

import Values from 'values.js';

import {
  Section,
  ColorContainer,
  Input,
  Button
} from './Styling';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(5));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(5);
      setList(colors);
      setError(false);
    } catch (err) {
      setError(true);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? 'error' : null}`}
          />
          <Button type="submit">
            submit
          </Button>
        </form>
      </Section>
      <ColorContainer>
        {list.map((color, index) => {
          return <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex} />
        })}
      </ColorContainer>
    </>
  )
}

export default App