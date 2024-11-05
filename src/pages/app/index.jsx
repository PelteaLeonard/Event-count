import { useEffect, useState } from "react";
import styles from "./styles.module.css";

function App() {
  const [timeLeftTillNewYear, setTimeLeftTillNewYear] = useState(
    getTimeUntilNewYear()
  );
  const [timeLeftTillChristmas, setTimeLeftTillChristmas] = useState(
    getTimeUntilChristmas()
  );

  const [timeLeftTillHalloween, setTimeLeftTillHalloween] = useState(
    getTimeUntilHalloween()
  );

  const [timeLeftTillEaster, setTimeLeftTillEaster] = useState(
    getTimeUntilEaster()
  );

  function getTimeUntilNewYear() {
    const now = new Date(); // data curenta gen 30 august 2024
    const currentYear = now.getFullYear(); // 2024

    const nextYear = currentYear + 1; // 2025
    const newYear = new Date(`January 1, ${nextYear} 00:00:00`);

    const milliseconds = newYear - now;

    if (milliseconds) {
      const seconds = Math.floor(milliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      return {
        days: days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
      };
    }

    return {};
  }

  function getTimeUntilChristmas() {
    const now = new Date(); // data curenta gen 30 august 2024
    const currentYear = now.getFullYear(); // 2024

    const nextChristmas = new Date(`December 25, ${currentYear} 00:00:00`);

    const milliseconds = nextChristmas - now;

    if (milliseconds) {
      const seconds = Math.floor(milliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      return {
        daysC: days,
        hoursC: hours % 24,
        minutesC: minutes % 60,
        secondsC: seconds % 60,
      };
    }

    return {};
  }

  function getTimeUntilHalloween() {
    const now = new Date(); // data curenta gen 30 august 2024
    const currentHalloween = now.getFullYear(); // 2024

    const nextHalloween = currentHalloween + 1;
    const newHalloween = new Date(`October 31, ${nextHalloween} 00:00 00`);

    const milliseconds = newHalloween - now;

    if (milliseconds) {
      const seconds = Math.floor(milliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      return {
        daysH: days,
        hoursH: hours % 24,
        minutesH: minutes % 60,
        secondsH: seconds % 60,
      };
    }

    return {};
  }

  function getTimeUntilEaster() {
    const now = new Date(); // data curenta gen 30 august 2024
    const currentEaster = now.getFullYear(); // 2024

    const nextEaster = currentEaster + 1; // 2025
    const newEaster = new Date(`April 20, ${nextEaster} 00:00:00`);

    const milliseconds = newEaster - now;

    if (milliseconds) {
      const seconds = Math.floor(milliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      return {
        daysE: days,
        hoursE: hours % 24,
        minutesE: minutes % 60,
        secondsE: seconds % 60,
      };
    }

    return {};
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeftTillNewYear(getTimeUntilNewYear());
      setTimeLeftTillChristmas(getTimeUntilChristmas());
      setTimeLeftTillHalloween(getTimeUntilHalloween());
      setTimeLeftTillEaster(getTimeUntilEaster());
    }, 1000);
    return () => clearInterval(timer);
  });

  const { days, hours, minutes, seconds } = timeLeftTillNewYear;

  const { daysC, hoursC, minutesC, secondsC } = timeLeftTillChristmas;

  const { daysH, hoursH, minutesH, secondsH } = timeLeftTillHalloween;

  const { daysE, hoursE, minutesE, secondsE } = timeLeftTillEaster;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.halloweenContainer}>
          <h1>Halloween</h1>
          <div className={styles.timeContainer}>
            <div className={styles.container}>
              <div>{daysH}</div>
              <p>Zile</p>
            </div>
            <div className={styles.container}>
              <div>{hoursH}</div>
              <p>Ore</p>
            </div>
            <div className={styles.container}>
              <div>{minutesH}</div>
              <p>Minute</p>
            </div>
            <div className={styles.container}>
              <div>{secondsH}</div>
              <p>Secunde</p>
            </div>
          </div>
        </div>
        <div className={styles.christmasContainer}>
          <h1>Christmas</h1>
          <div className={styles.timeContainer}>
            <div className={styles.container}>
              <div>{daysC}</div>
              <p>Zile</p>
            </div>
            <div className={styles.container}>
              <div>{hoursC}</div>
              <p>Ore</p>
            </div>
            <div className={styles.container}>
              <div>{minutesC}</div>
              <p>Minute</p>
            </div>
            <div className={styles.container}>
              <div>{secondsC}</div>
              <p>Secunde</p>
            </div>
          </div>
        </div>
        <div className={styles.newYearContainer}>
          <h1>New Years Eve</h1>
          <div className={styles.timeContainer}>
            <div className={styles.container}>
              <div>{days}</div>
              <p>Zile</p>
            </div>
            <div className={styles.container}>
              <div>{hours}</div>
              <p>Ore</p>
            </div>
            <div className={styles.container}>
              <div>{minutes}</div>
              <p>Minute</p>
            </div>
            <div className={styles.container}>
              <div>{seconds}</div>
              <p>Secunde</p>
            </div>
          </div>
        </div>
        <div className={styles.easterContainer}>
          <h1>Easter</h1>
          <div className={styles.timeContainer}>
            <div className={styles.container}>
              <div>{daysE}</div>
              <p>Zile</p>
            </div>
            <div className={styles.container}>
              <div>{hoursE}</div>
              <p>Ore</p>
            </div>
            <div className={styles.container}>
              <div>{minutesE}</div>
              <p>Minute</p>
            </div>
            <div className={styles.container}>
              <div>{secondsE}</div>
              <p>Secunde</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
