import GameBall from "../GameBall/GameBall";
import Dice from "../Dice/Dice";
import "./GameStatus.css";

const GameStatus = (props) => {
  return (
    <div className="gameStatusBar">
      <div className="attacked">
        <GameBall
          playerNo={1}
          count={props.attackedBalls_player1.length}
          style={{
            display: props.attackedBalls_player1.length > 0 ? "" : "none",
          }}
        />
      </div>
      <div className="win">
        <GameBall
          playerNo={1}
          count={props.winBalls_player1.length}
          style={{
            display: props.winBalls_player1.length > 0 ? "" : "none",
          }}
        />
      </div>
      <div className="dice">
          <Dice />
      </div>
      <div className="win">
        <GameBall
          playerNo={2}
          count={props.winBalls_player2.length}
          style={{
            display: props.winBalls_player2.length > 0 ? "" : "none",
          }}
        />
      </div>
      <div className="attacked">
        <GameBall
          playerNo={2}
          count={props.attackedBalls_player2.length}
          style={{
            display: props.attackedBalls_player2.length > 0 ? "" : "none",
          }}
        />
      </div>
    </div>
  );
};

export default GameStatus;
