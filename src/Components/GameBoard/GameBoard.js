import "./GameBoard.css";
import DUMMY_BallsState from "./DUMMY_BallsState.json";
import GameBar from "../GameBar/GameBar";
import GameStatus from "../GameStatus/GameStatus";
import { useState } from "react";

const GameBoard = () => {
  const [ballsState, setBallsState] = useState(DUMMY_BallsState.data);
  const barUpdateHandler = (state) => {
    setBallsState((prevState) => {
      const getNewBallsState = () => {
        let newBallsState = prevState;
        const prevBallState = prevState.filter((b) => b.id === state.id)[0];
        let newBarNo = prevBallState.barNo + state.step;
        if (newBarNo <= 0 || newBarNo > 24) newBarNo = prevBallState.barNo;
        const newBarBalls = prevState.filter(
          (b) => b.barNo === newBarNo && b.playerNo !== prevBallState.playerNo
        );

        if (newBarBalls.length > 1) {
        }

        if (newBarBalls.length <= 1) {
          newBallsState = [
            {
              id: prevBallState.id,
              barNo: newBarNo,
              playerNo: prevBallState.playerNo,
            },
            ...newBallsState.filter((p) => p.id !== prevBallState.id),
          ];
        }

        if (newBarBalls.length === 1) {
          newBallsState = [
            {
              id: newBarBalls[0].id,
              barNo: -1,
              playerNo: newBarBalls[0].playerNo,
            },
            ...newBallsState.filter((p) => p.id !== newBarBalls[0].id),
          ];
        }

        return newBallsState;
      };

      return getNewBallsState();
    });
  };

  return (
    <div className="gameBoard">
      <table cellPadding={0} cellSpacing={1}>
        <tbody>
          <tr>
            <td>
              <GameBar
                className="top"
                balls={ballsState.filter((bs) => bs.barNo === 1)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="top"
                balls={ballsState.filter((bs) => bs.barNo === 2)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="top"
                balls={ballsState.filter((bs) => bs.barNo === 3)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="top"
                balls={ballsState.filter((bs) => bs.barNo === 4)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="top"
                balls={ballsState.filter((bs) => bs.barNo === 5)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="top"
                balls={ballsState.filter((bs) => bs.barNo === 6)}
                onBarUpdate={barUpdateHandler}
              />
            </td>
            <td></td>
            <td>
              <GameBar
                className="top"
                balls={ballsState.filter((bs) => bs.barNo === 7)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="top"
                balls={ballsState.filter((bs) => bs.barNo === 8)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="top"
                balls={ballsState.filter((bs) => bs.barNo === 9)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="top"
                balls={ballsState.filter((bs) => bs.barNo === 10)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="top"
                balls={ballsState.filter((bs) => bs.barNo === 11)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="top"
                balls={ballsState.filter((bs) => bs.barNo === 12)}
                onBarUpdate={barUpdateHandler}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <GameStatus
                attackedBalls_player1={ballsState.filter(
                  (bs) => bs.barNo === -1 && bs.playerNo === 1
                )}
                winBalls_player1={ballsState.filter(
                  (bs) => bs.barNo === 25 && bs.playerNo === 1
                )}
                attackedBalls_player2={ballsState.filter(
                  (bs) => bs.barNo === -1 && bs.playerNo === 2
                )}
                winBalls_player2={ballsState.filter(
                  (bs) => bs.barNo === 25 && bs.playerNo === 2
                )}
              />
            </td>
          </tr>
          <tr>
            <td>
              <GameBar
                className="bottom"
                balls={ballsState.filter((bs) => bs.barNo === 24)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="bottom"
                balls={ballsState.filter((bs) => bs.barNo === 23)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="bottom"
                balls={ballsState.filter((bs) => bs.barNo === 22)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="bottom"
                balls={ballsState.filter((bs) => bs.barNo === 21)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="bottom"
                balls={ballsState.filter((bs) => bs.barNo === 20)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="bottom"
                balls={ballsState.filter((bs) => bs.barNo === 19)}
                onBarUpdate={barUpdateHandler}
              />
            </td>
            <td></td>
            <td>
              <GameBar
                className="bottom"
                balls={ballsState.filter((bs) => bs.barNo === 18)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="bottom"
                balls={ballsState.filter((bs) => bs.barNo === 17)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="bottom"
                balls={ballsState.filter((bs) => bs.barNo === 16)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="bottom"
                balls={ballsState.filter((bs) => bs.barNo === 15)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="bottom"
                balls={ballsState.filter((bs) => bs.barNo === 14)}
                onBarUpdate={barUpdateHandler}
              />
              <GameBar
                className="bottom"
                balls={ballsState.filter((bs) => bs.barNo === 13)}
                onBarUpdate={barUpdateHandler}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GameBoard;
