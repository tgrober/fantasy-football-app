import React, { useEffect, useState } from "react";

const dateMap = {
  'Week 1' : '9/8/2022',
  'Draft Day' : '9/5/2022',
  'Keepers Locked' : '8/8/2022'
}

export default function CountdownTimer(props) {

  const calculateTimeLeft = () => {
    const date = +new Date(dateMap[props.date]);
    const difference = date - +new Date();

    let timeLeft = {};

    if(difference > 0 ) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
  return timeLeft;
};

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
  // eslint-disable-next-line
  const timer = setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);
});

const timerComponents = [];

Object.keys(timeLeft).forEach((interval) => {
  if (!timeLeft[interval]) {
    return;
  }

  timerComponents.push(
    <span>
      {timeLeft[interval]} {interval}{" "}
    </span>
  );
});

return (
  <>
    <h2 id={props.date} className="timerTitle">Countdown until {props.date} ({dateMap[props.date]}) : </h2>
    <h3 className="timerCountdown">{timerComponents.length ? timerComponents : <span>Time's up!</span>}</h3>
  </>
);

}
