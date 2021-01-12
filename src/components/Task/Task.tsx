import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { parseCSS } from 'css-parser';

import classes from './Task.module.css';

export interface TaskAnswer {
  selector: string;
  rules: {key: string, value: string}[]
}

interface TaskProps {
  task: string;
  taskAnswer: TaskAnswer[];
}

// const formatStringToCamelCase = (str: string) => {
//   const splitted = str.split('-');
//   if (splitted.length === 1) return splitted[0];
//   return (
//     splitted[0]
//     + splitted
//       .slice(1)
//       .map((word: string) => word[0].toUpperCase() + word.slice(1))
//       .join('')
//   );
// };

const Viewbox = styled.div`
  width: 500px;
  margin-left: 20px;
  border: 2px solid #333333;
  border-radius: 16px;
  transition-duration: 1s;
  .box {
    display: inline-block;
    margin: 10px;
    height: 20px;
    width: 50px;
    background-color: red;
  }
  ${(props) => props.theme.styling}
`;

const Task = (props: TaskProps): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [success, setSuccess] = useState(false);

  const { task, taskAnswer } = props;

  const compareAnswer = () => {
    let tempSuccessFlag = false;
    const parsedAnswer = parseCSS(inputValue);
    // --- Tikrinu ar visi atsakymo style'ai yra tarp išparse'into CSS objekto:
    // Kiekvienam atsakymo style blokui ...
    tempSuccessFlag = taskAnswer.every((answerStyle) => (
      // ir kai kuriems išparse'into atsakymo style blokams ...
      parsedAnswer.some((parsedStyle) => (
        // turi sutapti atsakymo style bloko ir išparse'into style bloko selectors
        // ir tokiu atveju kiekvienam tokio atsakymo style rule'ui ...
        answerStyle.selector === parsedStyle.selector && answerStyle.rules.every((answRule) => (
          // ir kai kuriems išparse'into style bloko rule'ams ...
          parsedStyle.rules.some((parsedRule: { key: string; value: string; }) => (
            // turi sutapti atsakymo rule'o key ir value su išparse'into rule'o key ir value
            answRule.key === parsedRule.key && answRule.value === parsedRule.value
          ))
        ))
      ))
    ));
    if (tempSuccessFlag) {
      setSuccess(true);
    } else setSuccess(false);
  };

  const inputChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    compareAnswer();
  }, [inputValue]);

  return (
    <div className={classes.Task}>
      <p>{task}</p>
      <div className={classes.TaskArea}>
        <textarea value={inputValue} onChange={inputChangeHandler} />
        <Viewbox theme={{ styling: inputValue }}>
          <div className="boxes">
            <div className="box box1" />
            <div className="box box2" />
            <div className="box box3" />
          </div>
        </Viewbox>
      </div>
      {success ? <h2>SUCCESS!</h2> : null}
    </div>
  );
};

export default Task;
