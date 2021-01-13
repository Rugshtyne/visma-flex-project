import { camelCase } from 'lodash';

export interface StyleSheet {
  [key: string]: React.CSSProperties;
}

// Iskelt i util funkcija
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

const compareAnswer = (answerObject: CSS.Object[], inputObject: CSS.Object[]): boolean => {
  // !!! Gal su return parefactorint
  // --- Tikrinu ar visi atsakymo style'ai yra tarp išparse'into CSS objekto:
  // Kiekvienam atsakymo style blokui ...
  const answerIsCorrect = answerObject.every((answerStyle) => (
    // ir kai kuriems išparse'into atsakymo style blokams ...
    inputObject.some((parsedStyle) => (
      // turi sutapti atsakymo style bloko ir išparse'into style bloko selectors
      // ir tokiu atveju kiekvienam tokio atsakymo style rule'ui ...
      answerStyle.selector === parsedStyle.selector
        && answerStyle.rules.every((answRule: { key: string; value: string; }) => (
          // ir kai kuriems išparse'into style bloko rule'ams ...
          parsedStyle.rules.some((parsedRule: { key: string; value: string; }) => (
            // turi sutapti atsakymo rule'o key ir value su išparse'into rule'o key ir value
            answRule.key === parsedRule.key && answRule.value === parsedRule.value
          ))
        ))
    ))
  ));
  return answerIsCorrect;
};

export default compareAnswer;
