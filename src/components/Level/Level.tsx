import React from 'react';

import { ISubLevel } from '../SubLevel/SubLevel';

export interface ILevel {
  title: string;
  description: string;
  subLevels: ISubLevel[];
}

type LevelProps = ILevel;

const Level = (props: LevelProps): JSX.Element => {
  const { title, description, subLevels } = props;

  return (
    <>
      {subLevels.map((subLevel) => (
        <div key={subLevel.title}>
          <span>{subLevel.title}</span>
          <p>{subLevel.description}</p>
        </div>
      ))}
    </>
  );
};

export default Level;
