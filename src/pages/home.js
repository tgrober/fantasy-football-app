import React, { useEffect, useState } from "react";
import pbLogo from '../images/pbLogo.JPG'

const Home = () => {

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`9/8/${year}`) - +new Date();

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
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
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
    <div>
      <h1>Welcome to The League</h1>
      <img className="homePageImage" src={pbLogo} alt="Logo" />
      <h2>Countdown until week 1 : </h2>
      <h1>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</h1>
    </div>
  );

}

export default Home;
