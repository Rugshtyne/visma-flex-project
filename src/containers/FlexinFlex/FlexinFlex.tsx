import React, { useState } from 'react';

import Level from '../Level/Level';
import levelsConfig from '../../assets/levels.json';

const FlexinFlex = (): JSX.Element => {
  const [currentLevel, setCurrentLevel] = useState(0);

  const toggleLevel = () => {
    if (currentLevel === 0) {
      setCurrentLevel(1);
    } else setCurrentLevel(0);
  };

  return (
    <>
      <h1>{'I\'m FlexinFlex!'}</h1>
      <button type="button" onClick={toggleLevel}>Toggle Levels</button>
      <Level
        title={levelsConfig[currentLevel].title}
        tutorial={levelsConfig[currentLevel].tutorial}
        tutorialImg={levelsConfig[currentLevel].tutorialImg}
        properties={levelsConfig[currentLevel].properties}
        task={levelsConfig[currentLevel].task}
        taskAnswer={levelsConfig[currentLevel].taskAnswer}
      />
    </>
  );
};

export default FlexinFlex;
