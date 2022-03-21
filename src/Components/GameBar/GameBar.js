import "./GameBar.css";
import GameBall from "../GameBall/GameBall";
const GameBar = (props) => {
  const classes = "bar " + props.className;
  const ballSelectionHandler = (state) => {
    props.onBarUpdate(state);
  };
  const getStyle = (barNo, ballNo) => {
    let posNo = 0;
    if (ballNo < 5) posNo = ballNo * 30;
    if (ballNo >= 5) posNo = ballNo * 8 + 100;
    if (barNo <= 12) return { top: posNo + "px" };
    if (barNo > 12) return { bottom: posNo + "px" };
  };
  return (
    <div className={classes}>
      {props.balls.map((ball, index) => (
        <GameBall
          key={"ball_" + ball.id}
          ballId={ball.id}
          playerNo={ball.playerNo}
          onBallSelected={ballSelectionHandler}
          style={getStyle(ball.barNo, index)}
        />
      ))}
    </div>
  );
};

export default GameBar;
