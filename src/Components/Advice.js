import React, { useState, useEffect } from "react";

import patternDividerMobile from "../images/pattern-divider-mobile.svg";
import patternDividerDesktop from "../images/pattern-divider-desktop.svg";
import iconDice from "../images/icon-dice.svg";

import classes from "./Advice.module.css";

function Advice() {
  const [headerText, setHeaderText] = useState("");
  const [advice, setAdvice] = useState(null);
  const fetchAdvice = async () => {
    setHeaderText("Fetching advice");
    setAdvice(null);
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error(
          `adviceslip returned error with status:${response.status}`
        );
      }
      const { slip } = await response.json();
      setHeaderText(`ADVICE #${slip.id}`);
      setAdvice(slip);
    } catch (err) {
      setHeaderText(err.message);
    }
  };

  // here we use useEffect
  // the empty dependency array causes the function to be called once, when the page loads
  // we call an async function by defining it inside a sync function and immediately calling it
  useEffect(() => {
    async function fetchData() {
      await fetchAdvice();
    }
    fetchData();
  }, []);

  return (
    <main className={classes.main}>
      <h1 className={classes.header}>{headerText}</h1>
      <p className={classes.advice}>{advice && `" ${advice.advice}"`}</p>
      <picture className={classes.pictureDivider}>
        <source media="(min-width: 768px)" srcSet={patternDividerDesktop} />
        <img src={patternDividerMobile} alt="young man holding laptop" />
      </picture>
      <button className={classes.button} onClick={fetchAdvice}>
        <img className={classes.imgButton} src={iconDice} alt="dice icon" />
      </button>
    </main>
  );
}

export default Advice;
