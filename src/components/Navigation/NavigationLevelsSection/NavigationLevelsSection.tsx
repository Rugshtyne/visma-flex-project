import React from 'react';

import levels from '../../../assets/levels.json';
import { NavigationLevel } from '../NavigationLevel/NavigationLevel';

export const NavigationLevelsSection = (): JSX.Element => (
  <>
    {levels.map((level, index) => (
      <NavigationLevel
        key={level.id}
        id={level.id}
        index={index}
        title={level.title}
        subLevels={level.subLevels}
      />
    ))}
  </>
);
