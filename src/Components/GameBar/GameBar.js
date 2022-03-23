import "./GameBar.css";
import GameBall from "../GameBall/GameBall";
const GameBar = (props) => {
  const balls = props.balls.filter((b) => b.barNo === props.barNo);
 
  const getBarIsAvailable = () => {
    if (
      props.availableBarsForSelect.length > 0 &&
      props.availableBarsForSelect.indexOf(props.barNo) > -1 &&
      (balls.length <= 1 || balls[0].playerNo === props.gameState.movePlayerNo)
    )
      return true;
    if (
      props.availableBarsForSelect.length === 0 &&
      balls.length > 0 &&
      balls[0].playerNo === props.gameState.movePlayerNo &&
      props.gameState.steps.length > 0
    )
      return true;

    return false;
  };
  const getStyle = (barNo, ballNo) => {
    let posNo = 0;
    if (ballNo < 5) posNo = ballNo * 30;
    if (ballNo >= 5) posNo = ballNo * 8 + 100;
    if (barNo <= 12) return { top: posNo + "px" };
    if (barNo > 12) return { bottom: posNo + "px" };
  };

  let classes = "bar " + props.className;
  const barIsAvailable = getBarIsAvailable();

  if (props.isSelected) classes += " selected";
  if (!props.isSelected && barIsAvailable) classes += " available";

  const barClickHandler = (event) => {
    if (!barIsAvailable && !props.isSelected) return;

    props.onBarSelected(props.barNo);
  };

  return (
    <div className={classes} onClick={barClickHandler}>
      {balls.map((ball, index) => (
        <GameBall
          key={"ball_" + ball.id}
          ballId={ball.id}
          playerNo={ball.playerNo}
          style={getStyle(ball.barNo, index)}
        />
      ))}
    </div>
  );
};

export default GameBar;
