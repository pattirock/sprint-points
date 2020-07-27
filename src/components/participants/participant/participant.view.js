import React from 'react';
import styles from './participant.module.css';

const Participant = ({ children }) => {
  const removeParticipant = () => {};

  return (
    <div className={styles._container}>
      <span onClick={removeParticipant}>x</span> {children}
    </div>
  );
};

export default Participant;
