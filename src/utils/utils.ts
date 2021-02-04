import { parseCSS } from 'css-parser';
import { camelCase } from 'lodash';

export interface StyleSheet {
  [key: string]: React.CSSProperties;
}

export const convertCSSObjToStyleSheet = (cssObject: CSS.Object[]): StyleSheet => {
  const convertedObject: StyleSheet = {};
  cssObject.forEach((cssObjectEntry) => {
    convertedObject[cssObjectEntry.selector.substr(1)] = Object.assign({},
      ...cssObjectEntry.rules
        .map((rule: { key: string; value: string; }) => (
          { [camelCase(rule.key)]: rule.value }
        )));
  });
  return convertedObject;
};

export const compareAnswer = (answerObject: CSS.Object[], inputString: string): boolean => {
  const inputObject = parseCSS(inputString ?? '');
  // --- Tikrinu ar visi atsakymo style'ai yra tarp išparse'into CSS objekto:
  // Ar kiekvienas atsakymo style blokas ...
  const answerIsCorrect = answerObject.every((answerStyle) => (
    // yra tarp kai kurių išparse'into atsakymo style blokų? ...
    inputObject.some((parsedStyle) => (
      // Turi sutapti atsakymo style bloko ir išparse'into style bloko selectors.
      // Tokiu atveju, ar kiekvienas tokio atsakymo style rule'as ...
      answerStyle.selector === parsedStyle.selector
        && answerStyle.rules.every((answRule: { key: string; value: string; }) => (
          // yra tarp kai kurių išparse'into style bloko rule'ų? ...
          parsedStyle.rules.some((parsedRule: { key: string; value: string; }) => (
            // Turi sutapti atsakymo rule'o key ir value su išparse'into rule'o key ir value.
            answRule.key === parsedRule.key && answRule.value === parsedRule.value
          ))
        ))
    ))
  ));
  return answerIsCorrect;
};
