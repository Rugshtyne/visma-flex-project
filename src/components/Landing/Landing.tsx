import React from 'react';

import levels from '../../assets/levels.json';

const Landing = (): JSX.Element => (
  <>
    {levels.map((level) => (
      <div key={level.title}>
        <span>{level.title}</span>
        <p>{level.description}</p>
      </div>
    ))}
  </>
);

export default Landing;
