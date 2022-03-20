import { useState } from "react";
import "./GameBall.css";

const GameBall = (props) => {
  const [clickState, changeState] = useState({
    isSelected: false,
    selectedClass: "",
  });
  let classes = "ball ";
  if (props.className != null) classes += props.className;
  if (props.playerNo === 1) classes += " player1";
  if (props.playerNo === 2) classes += " player2";

  const clickHandler = () => {
    const state = {
      isSelected: !clickState.isSelected,
      selectedClass: clickState.isSelected ? "" : " selected",
      playerNo: props.playerNo,
      id: props.ballId,
      step: 2 * (props.playerNo === 1 ? 1 : -1),
    };

    changeState(state);
    if (props.onBallSelected != null) props.onBallSelected(state);
  };
  return (
    <span
      onClick={clickHandler}
      className={classes + clickState.selectedClass}
    ></span>
  );
};

export default GameBall;
