import React from 'react';
import DateCountdown from 'react-date-countdown-timer';

export default function CountDown () {
  return <DateCountdown dateTo='October 02, 2020 00:00:00 GMT+03:00' callback={()=>alert('Today is the day!')}  />;
  };