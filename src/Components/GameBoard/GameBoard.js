import "./GameBoard.css";
import GameBar from "../GameBar/GameBar";
import GameBall from "../GameBall/GameBall";

const GameBoard = () => {
  return (
    <div className="gameBoard">
      <table cellPadding={0} cellSpacing={5}>
        <tbody>
          <tr>
            <td>
              <GameBar className="top">
                <GameBall playerNo={1} />
                <GameBall playerNo={1} />
              </GameBar>
              <GameBar className="top"></GameBar>
              <GameBar className="top"></GameBar>
              <GameBar className="top"></GameBar>
              <GameBar className="top"></GameBar>
              <GameBar className="top">
                <GameBall playerNo={2} />
                <GameBall playerNo={2} />
                <GameBall playerNo={2} />
                <GameBall playerNo={2} />
                <GameBall playerNo={2} />
              </GameBar>
            </td>
            <td>
              <GameBar className="top"></GameBar>
              <GameBar className="top">
                <GameBall playerNo={2} />
                <GameBall playerNo={2} />
                <GameBall playerNo={2} />
              </GameBar>
              <GameBar className="top"></GameBar>
              <GameBar className="top"></GameBar>
              <GameBar className="top"></GameBar>
              <GameBar className="top">
                <GameBall playerNo={1} />
                <GameBall playerNo={1} />
                <GameBall playerNo={1} />
                <GameBall playerNo={1} />
                <GameBall playerNo={1} />
              </GameBar>
            </td>
          </tr>
          <tr>
            <td colSpan={2}></td>
          </tr>
          <tr>
            <td>
              <GameBar className="bottom">
                <GameBall playerNo={2} />
                <GameBall playerNo={2} />
              </GameBar>
              <GameBar className="bottom"></GameBar>
              <GameBar className="bottom"></GameBar>
              <GameBar className="bottom"></GameBar>
              <GameBar className="bottom"></GameBar>
              <GameBar className="bottom">
                <GameBall playerNo={1} />
                <GameBall playerNo={1} />
                <GameBall playerNo={1} />
                <GameBall playerNo={1} />
                <GameBall playerNo={1} />
              </GameBar>
            </td>
            <td>
              <GameBar className="bottom"></GameBar>
              <GameBar className="bottom">
                <GameBall playerNo={1} />
                <GameBall playerNo={1} />
                <GameBall playerNo={1} />
              </GameBar>
              <GameBar className="bottom"></GameBar>
              <GameBar className="bottom"></GameBar>
              <GameBar className="bottom"></GameBar>
              <GameBar className="bottom">
                <GameBall playerNo={2} />
                <GameBall playerNo={2} />
                <GameBall playerNo={2} />
                <GameBall playerNo={2} />
                <GameBall playerNo={2} />
              </GameBar>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GameBoard;
