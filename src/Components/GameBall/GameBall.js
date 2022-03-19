import "./GameBall.css";

const GameBall = (props) => {
  let classes = "ball ";
  if (props.className != null) classes += props.className;
  if (props.playerNo === 1) classes += " player1";
  if (props.playerNo === 2) classes += " player2";
  return <span className={classes}></span>;
};

export default GameBall;
