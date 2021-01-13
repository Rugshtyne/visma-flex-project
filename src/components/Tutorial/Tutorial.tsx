import React from 'react';

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

  return (
    <div className={classes.tutorial}>
      <div className={classes.description}>
        <p>{tutorial}</p>
        <img
          src={tutorialImg}
          alt={title}
        />
      </div>
      <div className={classes.properties}>
        {properties
          ? (
            <ul>
              {properties.map((property) => (
                <li key={property.property}>
                  <strong>{property.property}</strong>
                  {': '}
                  {property.description}
                </li>
              ))}
            </ul>
          )
          : <p>No properties here.</p>}
      </div>
    </div>
  );
};

export default Tutorial;
