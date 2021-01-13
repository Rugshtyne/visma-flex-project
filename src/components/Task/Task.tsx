import React, { useEffect, useState } from 'react';
import { parseCSS } from 'css-parser';

import classes from './Task.module.css';

interface StyleSheet {
  [key: string]: React.CSSProperties;
}

export interface TaskAnswer {
  selector: string;
  rules: {key: string, value: string}[]
}

interface TaskProps {
  task: string;
  taskAnswer: TaskAnswer[];
}

// Lodash funkcija panaudot
const formatStringToCamelCase = (str: string) => {
  const splitted = str.split('-');
  if (splitted.length === 1) return splitted[0];
  return (
    splitted[0]
    + splitted
      .slice(1)
      .map((word: string) => word[0].toUpperCase() + word.slice(1))
      .join('')
  );
};

const Task = (props: TaskProps): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [success, setSuccess] = useState(false);
  const [boxesStyleSheet, setBoxesStyleSheet] = useState<StyleSheet>({});

  const { task, taskAnswer } = props;

  // Iskelt i util funkcija
  const compareAnswer = () => {
    const parsedAnswer = parseCSS(inputValue);
    // !!! Gal su return parefactorint
    // --- Tikrinu ar visi atsakymo style'ai yra tarp išparse'into CSS objekto:
    // Kiekvienam atsakymo style blokui ...
    const successFlag = taskAnswer.every((answerStyle) => (
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
    setSuccess(successFlag);
  };

  const inputChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  // Iskelt i util funkcija
  const convertCSSObjToStyleSheet = (cssObject: CSS.Object[]) => {
    const convertedObject: StyleSheet = {};
    cssObject.forEach((cssObjectEntry) => {
      convertedObject[cssObjectEntry.selector.substr(1)] = Object.assign({},
        ...cssObjectEntry.rules
          .map((rule: { key: string; value: string; }) => (
            { [formatStringToCamelCase(rule.key)]: rule.value }
          )));
    });
    return convertedObject;
  };

  useEffect(() => {
    compareAnswer();
    setBoxesStyleSheet(convertCSSObjToStyleSheet(parseCSS(inputValue)));
  }, [inputValue]);

  return (
    <div className={classes.task}>
      <p>{task}</p>
      <div className={classes.taskArea}>
        <textarea value={inputValue} onChange={inputChangeHandler} />
        <div className={classes.viewBox}>
          <div className="boxes" style={boxesStyleSheet.boxes ? boxesStyleSheet.boxes : undefined}>
            <div className={`${classes.box} box1`} style={boxesStyleSheet.box1 ? boxesStyleSheet.box1 : undefined} />
            <div className={`${classes.box} box2`} style={boxesStyleSheet.box2 ? boxesStyleSheet.box2 : undefined} />
            <div className={`${classes.box} box3`} style={boxesStyleSheet.box3 ? boxesStyleSheet.box3 : undefined} />
          </div>
        </div>
      </div>
      {success ? <h2>SUCCESS!</h2> : null}
    </div>
  );
};

export default Task;
