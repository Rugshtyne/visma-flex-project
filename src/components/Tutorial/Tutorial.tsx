import React from 'react';

import classes from './Tutorial.module.css';

interface TutorialProps {
  title: string;
  description: string;
  img: string;
  properties?: { property: string, description: string }[];
}

const Tutorial = (props: TutorialProps): JSX.Element => {
  const {
    description,
    img,
    properties,
    title,
  } = props;

  // Pacheckint react + markdown
  return (
    <div className={classes.tutorial}>
      <div className={classes.description}>
        <p>{description}</p>
        <img
          src={img}
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
