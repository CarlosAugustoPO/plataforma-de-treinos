import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';

const DatePicker = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const availableTimes = [
    { time: '09:00', available: true },
    { time: '10:00', available: false },
    { time: '11:00', available: true },
    { time: '12:00', available: true },
    { time: '13:00', available: true },
    { time: '14:00', available: false },
    { time: '15:00', available: true },
    { time: '16:00', available: true },
    { time: '17:00', available: true },
  ];

  const availableTimesList = availableTimes.map((time) => (
    <button key={time.time} disabled={!time.available}>
      {time.time}
    </button>
  ));

  return (
    <div>
      <Calendar value={date} onChange={handleDateChange} />
      <div>{availableTimesList}</div>
    </div>
  );
};

export default DatePicker;

