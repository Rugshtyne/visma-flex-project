import React from 'react';
import { Alert } from 'react-bootstrap';

export const Error = (props: { errorMessage: string }): JSX.Element => {
  const { errorMessage } = props;

  return (
    <Alert variant="danger">
      {errorMessage}
    </Alert>
  );
};
