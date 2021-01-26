import React from 'react';

import { ILevel } from '../Level/Level';

interface LandingProps {
  levels: ILevel[];
}

const Landing = (props: LandingProps): JSX.Element => {
  const { levels } = props;

  return (
    <>
      {levels.map((level) => (
        <div key={level.title}>
          <span>{level.title}</span>
          <p>{level.description}</p>
        </div>
      ))}
    </>
  );
};

export default Landing;
