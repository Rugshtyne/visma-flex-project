import React, { useState } from 'react';

import Level from '../Level/Level';
import levelsConfig from '../../assets/levels.json';

const FlexinFlex = (): JSX.Element => {
  const [levels, setLevels] = useState(levelsConfig);
  const [currentLevel, setCurrentLevel] = useState(0);

  return (
    <>
      <h1>{'I\'m FlexinFlex!'}</h1>
      {levels.map((level, index) => (
        <button key={level.title} type="button" onClick={() => setCurrentLevel(index)}>
          {`Level ${index + 1}`}
        </button>
      ))}
      <Level
        title={levels[currentLevel].title}
        tutorial={levels[currentLevel].tutorial}
        tutorialImg={levels[currentLevel].tutorialImg}
        properties={levels[currentLevel].properties}
        task={levels[currentLevel].task}
        taskAnswer={levels[currentLevel].taskAnswer}
      />
    </>
  );
};

export default FlexinFlex;
