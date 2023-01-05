import "./GameBoard.css";
import DUMMY_BallsState from "./DUMMY_BallsState.json";
import GameBar from "../GameBar/GameBar";
import GameStatus from "../GameStatus/GameStatus";
import GameContext from "../../GameContexts/board-context";
import { useState } from "react";

const GameBoard = () => {
  const [ballsState, setBallsState] = useState(DUMMY_BallsState.data);
  const [availableBarsForSelect, setAvailableBarsForSelect] = useState([]);
  const [selectedBarNo, setSelectedBarNo] = useState();
  const [gameState, setGameState] = useState({
    movePlayerNo: -1,
    steps: [],
  });
  const barSelectionHandler = (barNo) => {
    if (barNo === selectedBarNo) {
      setAvailableBarsForSelect([]);
      setSelectedBarNo();
      return;
    }

    if (selectedBarNo == null) {
      setAvailableBarsForSelect(
        gameState.steps.map((step) => {
          return gameState.movePlayerNo === 1
            ? step * 1 + barNo
            : step * -1 + barNo;
        })
      );
      setSelectedBarNo(barNo);
      return;
    }

    UpdateBars(barNo);
  };

  const UpdateBars = (newBarNo) => {
    setBallsState((prevState) => {
      const getNewBallsState = () => {
        let newBallsState = prevState;
        const prevBallState = prevState.filter(
          (b) => b.barNo === selectedBarNo
        )[0];
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

        setGameState((prevState) => {
          prevState.steps.splice(
            prevState.steps.indexOf(Math.abs(prevBallState.barNo - newBarNo)),
            1
          );
          let playerNo = gameState.movePlayerNo;
          if (prevState.steps.length === 0) playerNo = playerNo === 1 ? 2 : 1;

          return {
            movePlayerNo: playerNo,
            steps: prevState.steps,
          };
        });

        setAvailableBarsForSelect([]);
        setSelectedBarNo();
        return newBallsState;
      };

      return getNewBallsState();
    });
  };

  const gameStateChangedHandler = (state) => {
    setGameState(state);

    const bittedBalls_player1 = ballsState.filter(
      (bs) => bs.barNo === -1 && bs.playerNo === 1
    );
    const bittedBalls_player2 = ballsState.filter(
      (bs) => bs.barNo === -1 && bs.playerNo === 2
    );
    debugger;
    if (bittedBalls_player1.length === 0 && bittedBalls_player2.length === 0)
      return;

    if (gameState.movePlayerNo === 1 && bittedBalls_player1.length === 0)
      return;

    if (gameState.movePlayerNo === 2 && bittedBalls_player2.length === 0)
      return;

    setAvailableBarsForSelect(
      state.steps.map((step) => {
        let newStep = step;
        if (gameState.movePlayerNo === 2 && bittedBalls_player2.length > 0)
          newStep = 25 - newStep;

        return newStep;
      })
    );

    setSelectedBarNo(-1);
  };
  return (
    <GameContext.Provider
      value={{
        balls: ballsState,
        gameState: gameState,
        availableBarsForSelect: availableBarsForSelect,
        selectedBarNo: selectedBarNo,
        onBarSelected: barSelectionHandler,
      }}
    >
      <div className="gameBoard">
        <table cellPadding={0} cellSpacing={1}>
          <tbody>
            <tr>
              <td>
                <GameBar className="top" barNo={1} />
                <GameBar className="top" barNo={2} />
                <GameBar className="top" barNo={3} />
                <GameBar className="top" barNo={4} />
                <GameBar className="top" barNo={5} />
                <GameBar className="top" barNo={6} />
              </td>
              <td></td>
              <td>
                <GameBar className="top" barNo={7} />
                <GameBar className="top" barNo={8} />
                <GameBar className="top" barNo={9} />
                <GameBar className="top" barNo={10} />
                <GameBar className="top" barNo={11} />
                <GameBar className="top" barNo={12} />
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
                  gameState={gameState}
                  onGameStateChanged={gameStateChangedHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <GameBar className="bottom" barNo={24} />
                <GameBar className="bottom" barNo={23} />
                <GameBar className="bottom" barNo={22} />
                <GameBar className="bottom" barNo={21} />
                <GameBar className="bottom" barNo={20} />
                <GameBar className="bottom" barNo={19} />
              </td>
              <td></td>
              <td>
                <GameBar className="bottom" barNo={18} />
                <GameBar className="bottom" barNo={17} />
                <GameBar className="bottom" barNo={16} />
                <GameBar className="bottom" barNo={15} />
                <GameBar className="bottom" barNo={14} />
                <GameBar className="bottom" barNo={13} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </GameContext.Provider>
  );
};

export default GameBoard;
