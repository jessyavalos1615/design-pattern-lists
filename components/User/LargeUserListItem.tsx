import * as React from 'react';

export const LargeUserListItem = ({ user }) => {
  const { name, age, hairColor, hobbies } = user;

  return (
    <React.Fragment>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};
