import React, { useState } from "react";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";
const DateTimePicker = (props) => {
  const [date, setDate] = useState();

  const handleScheduled = (dateTime) => {
    setDate(dateTime);
    props.dateTime(dateTime);
  };

  const timeSlotValidator = (slotTime) => {
    const eveningTime = new Date(
      slotTime.getFullYear(),
      slotTime.getMonth(),
      slotTime.getDate(),
      10,
      0,
      0
    );
    const isValid = slotTime.getTime() > eveningTime.getTime();
    return isValid;
  };

  return (
    <div>
      <DayTimePicker
        onChange={(e) => setDate(e.target.value)}
        value={date}
        onConfirm={handleScheduled}
        timeSlotSizeMinutes={30}
        timeSlotValidator={timeSlotValidator}
      />
      {/* <DatePicker /> */}
    </div>
  );
};
export default DateTimePicker;
