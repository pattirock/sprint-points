import React from 'react';
import { useParticipants } from '../../hooks/useParticipants';
import styles from './results.module.css';

const sprintDays = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = (arr) => {
  let rdo = 0;

  if (arr.length > 0) {
    rdo = arr.reduce((a, b) => a + b);
  }

  return rdo;
};

const Results = ({ percentage, holidays =  [] }) => {
  const { participants } = useParticipants();
  const calculateResultWithoutPercentage = () => {
    const days = sprintDays.map((d) => holidays.includes(d));

    const total = days.map((isHoliday, dayIndex) => {
      if (isHoliday || (days.lastIndexOf(false) === dayIndex)) {
        return 0;
      }
      return participants.length > 0 && sum(participants.map((participant) => {
        if (participant.absent.includes(dayIndex)) {
          return 0;
        }
        return (days.indexOf(false) === dayIndex) ? 1 : 2;
      }));
    });

    return sum(total);
  };

  const calculateResult = (withoutPercentage) => {
    const a = 10 * withoutPercentage * (percentage / 100);
    return Math.round(a) / 10;
  };

  const withoutPercentage = calculateResultWithoutPercentage();
  return (
    <div className={styles._container}>
      <h2>Points</h2>
      <p>{`${withoutPercentage} points - ${100 - percentage}% = ${calculateResult(withoutPercentage)} points`}</p>
    </div>
  );
};

export default Results;
