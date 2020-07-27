import React, { useState } from 'react';
import { useParticipants } from '../../hooks/useParticipants';
import Participant from './participant';
import styles from './participants.module.css';

const Participants = () => {
  const { participants, addParticipant } = useParticipants();
  const [participant, setParticipant] = useState();
  const addNewParticipant = () => {
    addParticipant(participant);
    setParticipant('');
  };

  return (
    <div className={styles._container}>
      <h2>Participants</h2>
      <input
        value={participant}
        onChange={({ target: { value } }) => setParticipant(value)}
        type="text"
        name="new-user"
        placeholder="Add a new participant"
        className="input-group-field"
      />
      <button onClick={addNewParticipant}>Add</button>
      {participants.length > 0 ? participants.map(participant => <Participant key={participant}>{participant}</Participant>) : <p>There are not participants yet</p>}
    </div>
  );
};

export default Participants;
