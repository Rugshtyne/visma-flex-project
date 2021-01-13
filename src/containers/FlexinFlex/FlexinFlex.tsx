import React, { useState } from 'react';

import Level, { LevelProps } from '../Level/Level';

const FlexinFlex = (): JSX.Element => {
  // Gal pamovint i const, arba pvz i JSON faila pamovint
  const [levels, setLevels] = useState<LevelProps[]>([
    {
      title: 'Level 1: flex-direction',
      tutorial: 'This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.',
      tutorialImg: 'https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg',
      properties: [
        { property: 'row (default)', description: 'left to right in ltr; right to left in rtl' },
        { property: 'row-reverse', description: 'right to left in ltr; left to right in rtl' },
        { property: 'column', description: 'same as row but top to bottom' },
        { property: 'column-reverse', description: 'same as row-reverse but bottom to top' },
      ],
      task: 'Edit the box class CSS so that the three boxes would line up in a column.',
      taskAnswer: [{
        selector: '.boxes',
        rules: [
          { key: 'display', value: 'flex' },
          { key: 'flex-direction', value: 'column' },
        ],
      }],
    },

    {
      title: 'Level 2: align-self',
      tutorial: `This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

      Please see the align-items explanation to understand the available values.

      Note that float, clear and vertical-align have no effect on a flex item.`,
      tutorialImg: 'https://css-tricks.com/wp-content/uploads/2018/10/align-self.svg',
      properties: [
        { property: 'stretch (default)', description: 'stretch to fill the container (still respect min-width/max-width)' },
        { property: 'flex-start / start / self-start', description: 'items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the writing-mode rules.' },
        { property: 'flex-end / end / self-end', description: 'items are placed at the end of the cross axis. The difference again is subtle and is about respecting flex-direction rules vs. writing-mode rules.' },
        { property: 'center', description: 'items are centered in the cross-axis' },
        { property: 'baseline', description: 'items are aligned such as their baselines align' },
      ],
      task: 'Edit the boxes class so that all of the boxes would line up in a column and edit the middle-box (box2) class CSS so that the middle box would align itself to the right of the viewbox.',
      taskAnswer: [
        {
          selector: '.box2',
          rules: [
            { key: 'align-self', value: 'flex-end' },
          ],
        },
        {
          selector: '.boxes',
          rules: [
            { key: 'display', value: 'flex' },
            { key: 'flex-direction', value: 'column' },
          ],
        },
      ],
    },
  ]);
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
