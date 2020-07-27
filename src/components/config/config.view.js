import React, { useState } from 'react';
import { format } from '../../utils/date.utils';
import styles from './config.module.css';

const Config = () => {
  const [startDay, setStartDay] = useState(new Date());
  const [percentage, setPercentage] = useState(70);
  const changeStartDay = (e) => {
    const { target: { value } } = e;
    if (value) {
      setStartDay(value);
    }
  };

  const changePercentage = (e) => {
    const { target: { value } } = e;
    const percentageValue = parseInt(value, 10);
    if (percentageValue && percentageValue > 0 && percentageValue <= 100) {
      percentage(percentageValue);
    }
  };

  return (
    <div className={styles._container}>
      <div className={styles._input_container}>
        <input onChange={changeStartDay} type="date" value={format(startDay)} />
      </div>
      <div className={styles._input_container}>
        <input onChange={changePercentage} type="number" value={percentage} />
        <span>%</span>
      </div>
    </div>
  );
};

export default Config;
