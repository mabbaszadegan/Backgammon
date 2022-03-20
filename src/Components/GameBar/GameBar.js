import "./GameBar.css";
import GameBall from "../GameBall/GameBall";
const GameBar = (props) => {
  const classes = "bar " + props.className;
  const ballSelectionHandler = (state) => {
    props.onBarUpdate(state);
  };

  return (
    <div className={classes}>
      {props.balls.map((ball) => (
        <GameBall
          ballId={ball.id}
          playerNo={ball.playerNo}
          onBallSelected={ballSelectionHandler}
        />
      ))}
    </div>
  );
};

export default GameBar;
