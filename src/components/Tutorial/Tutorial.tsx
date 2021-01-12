import React from 'react';
// import PropTypes from 'prop-types';

import classes from './Tutorial.module.css';

export interface TutorialProperties {
  property: string;
  description: string;
}

interface TutorialProps {
  tutorial: string;
  tutorialImg: string;
  properties?: TutorialProperties[];
  title: string;
}

const Tutorial = (props: TutorialProps): JSX.Element => {
  const {
    tutorial,
    tutorialImg,
    properties,
    title,
  } = props;

  let renderProperties: JSX.Element | JSX.Element[] = <p>No properties here.</p>;

  if (properties) {
    renderProperties = properties.map((property) => (
      <li key={property.property}>
        <strong>{property.property}</strong>
        {': '}
        {property.description}
      </li>
    ));
  }

  return (
    <div className={classes.Tutorial}>
      <div className={classes.Description}>
        <p>{tutorial}</p>
        <img
          src={tutorialImg}
          alt={title}
        />
      </div>
      <ul>
        {renderProperties}
      </ul>
    </div>
  );
};

// Tutorial.propTypes = {
//   tutorial: PropTypes.string.isRequired,
//   tutorialImg: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   properties: PropTypes.objectOf(PropTypes.string),
// };

// Tutorial.defaultProps = {
//   properties: {
//     default: 'No properties here.',
//   },
// };

export default Tutorial;
