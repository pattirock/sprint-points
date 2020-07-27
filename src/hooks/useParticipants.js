import { atom, useRecoilState } from 'recoil';

const participantsAtom = atom({
  key: 'participantsState',
  default: [],
});

export const useParticipants = () => {
  const [participants, setParticipants] = useRecoilState(participantsAtom);

  const addParticipant = participant => {
    const newParticipants = [...participants];
    newParticipants.push({ name: participant, absent: [] });
    setParticipants(newParticipants);
  };

  return { participants, addParticipant };
};