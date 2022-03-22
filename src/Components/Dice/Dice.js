import { useState } from "react";
import DiceStyles from "./Dice.module.css";

const Dice = (props) => {
  const [gameState, setGameState] = useState({
    movePlayerNo: -1,
    steps: [],
  });
  const diceClickHandler = (event) => {
    if (gameState.steps.length > 0) return;

    let playerNo = gameState.movePlayerNo;
    if (playerNo === -1) playerNo = (Math.floor(Math.random() * 10) % 2) + 1;
    playerNo = playerNo === 1 ? 2 : 1;

    const [dice1Value, dice2Value] = [
      (Math.floor(Math.random() * 10) % 6) + 1,
      (Math.floor(Math.random() * 10) % 6) + 1,
    ];

    const newState = {
      movePlayerNo: playerNo,
      steps: [dice1Value, dice2Value],
    };
    if (dice1Value === dice2Value) newState.steps.push(dice1Value, dice2Value);
    setGameState(newState);
  };
  return (
    <div className={DiceStyles["dice-section"]}>
      <input
        type="button"
        value={`تاس بریز...`}
        style={{ display: gameState.steps.length > 0 ? "none" : "block" }}
        onClick={diceClickHandler}
      />
      <label
        style={{ display: gameState.steps.length > 0 ? "block" : "none" }}
        className={DiceStyles["movePlayerNo"]}
      >
        بازیکن شماره {gameState.movePlayerNo}
      </label>
      {gameState.steps.map((step, index) => (
        <label key={index} className={DiceStyles["moving-step"]}>{step}</label>
      ))}
    </div>
  );
};

export default Dice;
