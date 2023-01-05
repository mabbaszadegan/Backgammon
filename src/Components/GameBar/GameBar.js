import "./GameBar.css";
import GameBall from "../GameBall/GameBall";
import GameContext from "../../GameContexts/board-context";
import { useContext } from "react";
const GameBar = (props) => {
  const ctx = useContext(GameContext);
  const isSelectedBarNo = ctx.selectedBarNo === props.barNo;
  const balls = ctx.balls.filter((b) => b.barNo === props.barNo);

  const getBarIsAvailable = () => {
    if (
      ctx.availableBarsForSelect.length > 0 &&
      ctx.availableBarsForSelect.indexOf(props.barNo) > -1 &&
      (balls.length <= 1 || balls[0].playerNo === ctx.gameState.movePlayerNo)
    )
      return true;
    if (
      ctx.availableBarsForSelect.length === 0 &&
      balls.length > 0 &&
      balls[0].playerNo === ctx.gameState.movePlayerNo &&
      ctx.gameState.steps.length > 0
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

  if (isSelectedBarNo) classes += " selected";
  if (!isSelectedBarNo && barIsAvailable) classes += " available";

  const barClickHandler = (event) => {
    if (!barIsAvailable && !isSelectedBarNo) return;

    ctx.onBarSelected(props.barNo);
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
