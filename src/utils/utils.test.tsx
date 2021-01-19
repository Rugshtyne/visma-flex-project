import compareAnswer from './utils';

describe('compareAnswer', () => {
  const answerObject = [
    {
      selector: 'requiredSelector1',
      rules: [
        { key: 'display', value: 'flex' },
        { key: 'background-color', value: 'blue' },
      ],
    },
    {
      selector: 'requiredSelector2',
      rules: [
        { key: 'font-family', value: 'inherit' },
      ],
    },
  ];
  const parsedObject1 = [
    {
      selector: 'unrelatedSelector',
      rules: [
        { key: 'white-space', value: 'pre-wrap' },
      ],
    },
    {
      selector: 'requiredSelector2',
      rules: [
        { key: 'color', value: 'red' },
        { key: 'font-family', value: 'inherit' },
        { key: 'margin', value: '0' },
      ],
    },
    {
      selector: 'requiredSelector1',
      rules: [
        { key: 'display', value: 'flex' },
        { key: 'padding', value: '16px 32px' },
        { key: 'background-color', value: 'blue' },
        { key: 'flex-direction', value: 'column' },
      ],
    },
  ];

  const parsedObject2 = [
    {
      selector: 'unrelatedSelector',
      rules: [
        { key: 'white-space', value: 'pre-wrap' },
      ],
    },
    {
      selector: 'requiredSelector2',
      rules: [
        { key: 'color', value: 'red' },
        { key: 'font-family', value: 'inherit' },
        { key: 'margin', value: '0' },
      ],
    },
    {
      selector: 'requiredSelector1',
      rules: [
        { key: 'display', value: 'flex' },
        { key: 'padding', value: '16px 32px' },
        { key: 'flex-direction', value: 'column' },
      ],
    },
  ];

  const parsedObject3 = [
    {
      selector: 'requiredSelector2',
      rules: [
        { key: 'font-family', value: 'inherit' },
      ],
    },
    {
      selector: 'requiredSelector1',
      rules: [
        { key: 'background-color', value: 'blue' },
        { key: 'display', value: 'flex' },
      ],
    },
  ];

  const parsedObject4: CSS.Object[] = [];

  // TODO:
  // - pridėt case abiems tuštiems objektams, praseiti pro conditionų edge case'us, coverage
  // - pamovint objektus į jų test case'us

  test('compares a provided answer CSS.Object[] to a parsed one, having all of the answer object\'s selectors and their rules, to equal true', () => {
    expect(compareAnswer(answerObject, parsedObject1)).toBe(true);
  });

  test('compares a provided answer CSS.Object[] to a parsed one, having all of the answer object\'s selectors but missing one of the rules, to equal false', () => {
    expect(compareAnswer(answerObject, parsedObject2)).toBe(false);
  });

  test('compares a provided answer CSS.Object[] to a parsed one, having equal selectors and rules, to equal true', () => {
    expect(compareAnswer(answerObject, parsedObject3)).toBe(true);
  });

  test('compares a provided answer CSS.Object[] to an empty one, to equal false', () => {
    expect(compareAnswer(answerObject, parsedObject4)).toBe(false);
  });

  test('compares an empty answer CSS.Object[] to a parsed one, to equal true', () => {
    expect(compareAnswer(parsedObject4, parsedObject3)).toBe(true);
  });
});
