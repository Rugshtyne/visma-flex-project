import React, { useState } from 'react';

import Level from '../Level/Level';

export default function FlexinFlex(props) {
    const [levels, setLevels] = useState([
        {
            title: 'Level 1: flex-direction',
            tutorial: 'This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.',
            tutorialImg: 'https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg',
            properties: {
                'row': 'left to right in ltr; right to left in rtl',
                'row-reverse': 'right to left in ltr; left to right in rtl',
                'column': 'same as row but top to bottom',
                'column-reverse': 'same as row-reverse but bottom to top'
            },
            task: 'Edit the box class CSS so that the three boxes would line up in a column.',
            taskAnswer: {
                'display': 'flex',
                'flexDirection': 'column'
            },
            taskAnswerString: 'display: flex; flex-direction: column;'
        },
        {
            title: 'Level 2: flex-grow',
            tutorial: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up. If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least).',
            tutorialImg: 'https://css-tricks.com/wp-content/uploads/2018/10/flex-grow.svg',
            task: 'Edit the middle-box class CSS so that the middle box would take up twice the size of the other two boxes.',
            taskAnswer: {
                'flex-grow': '2'
            },
            taskAnswerString: 'flex-grow: 2'
        }
    ]);
    const [currentLevel, setCurrentLevel] = useState(0);

    const toggleLevel = () => {
        if (currentLevel === 0) {
            setCurrentLevel(1);
        }
        else setCurrentLevel(0);
    }

    return (
        <React.Fragment>
            <h1>I'm FlexinFlex</h1>
            <button onClick={toggleLevel}>Toggle Levels</button>
            <Level levelConfig={levels[currentLevel]}></Level>
        </React.Fragment>
    );
}