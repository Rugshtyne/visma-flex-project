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

  // persirašyt į loginį branchą, pvz noContent JSX.Elementą ir sumappintą,
  // arba iškelt į template mapą
  let renderProperties: JSX.Element | JSX.Element[] = <p>no props</p>;

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
    <div className={classes.tutorial}>
      <div className={classes.description}>
        <p>{tutorial}</p>
        <img
          src={tutorialImg}
          alt={title}
        />
      </div>
      <div className={classes.properties}>
        <ul>
          {renderProperties}
        </ul>
      </div>
    </div>
  );
};

export default Tutorial;
