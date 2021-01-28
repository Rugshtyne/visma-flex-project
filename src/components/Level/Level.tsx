import React from 'react';

import subLevels from '../../assets/sublevels.json';

const Level = (): JSX.Element => (
  <>
    {subLevels.map((subLevel) => (
      <div key={subLevel.title}>
        <span>{subLevel.title}</span>
        <p>{subLevel.description}</p>
      </div>
    ))}
  </>
);

export default Level;
