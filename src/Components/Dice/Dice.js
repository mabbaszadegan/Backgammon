import DiceStyles from "./Dice.module.css";

const Dice = (props) => {
  const diceClickHandler = (event) => {
    if (props.gameState.steps.length > 0) return;

    let playerNo = props.gameState.movePlayerNo;
    if (playerNo === -1) playerNo = (Math.floor(Math.random() * 10) % 2) + 1;

    const [dice1Value, dice2Value] = [
      (Math.floor(Math.random() * 10) % 6) + 1,
      (Math.floor(Math.random() * 10) % 6) + 1,
    ];

    const newState = {
      movePlayerNo: playerNo,
      steps: [dice1Value, dice2Value],
    };
    if (dice1Value === dice2Value) newState.steps.push(dice1Value, dice2Value);

    props.onRollDice(newState);
  };
  return (
    <div className={DiceStyles["dice-section"]}>
      <input
        type="button"
        value={`تاس بریز...`}
        style={{ display: props.gameState.steps.length > 0 ? "none" : "block" }}
        onClick={diceClickHandler}
      />
      <label
        style={{ display: props.gameState.steps.length > 0 ? "block" : "none" }}
        className={DiceStyles["movePlayerNo"]}
      >
        بازیکن شماره {props.gameState.movePlayerNo}
      </label>
      {props.gameState.steps.map((step, index) => (
        <label key={index} className={DiceStyles["moving-step"]}>
          {step}
        </label>
      ))}
    </div>
  );
};

export default Dice;
