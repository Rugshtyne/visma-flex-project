import React from 'react';
import PropTypes from 'prop-types';

import classes from './Tutorial.module.css';

const Tutorial = (props) => {
  let renderProperties = <p>No properties here.</p>;

  const {
    tutorial,
    tutorialImg,
    properties,
    title,
  } = props;

  if (!properties.default) {
    renderProperties = Object.keys(properties)
      .map((pptKey) => [properties[pptKey]]
        .map((pptDesc) => (
          <li key={pptKey}>
            <strong>{pptKey}</strong>
            :
            {pptDesc}
          </li>
        )));
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

Tutorial.propTypes = {
  tutorial: PropTypes.string.isRequired,
  tutorialImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  properties: PropTypes.objectOf(PropTypes.string),
};

Tutorial.defaultProps = {
  properties: {
    default: 'No properties here.',
  },
};

export default Tutorial;
