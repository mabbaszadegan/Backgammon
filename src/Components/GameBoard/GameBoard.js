import "./GameBoard.css";
import DUMMY_BallsState from "./DUMMY_BallsState.json";
import GameBar from "../GameBar/GameBar";
import GameStatus from "../GameStatus/GameStatus";
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
    <div className="gameBoard">
      <table cellPadding={0} cellSpacing={1}>
        <tbody>
          <tr>
            <td>
              <GameBar
                className="top"
                barNo={1}
                isSelected={selectedBarNo === 1}
                balls={ballsState.filter((bs) => bs.barNo === 1)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="top"
                barNo={2}
                isSelected={selectedBarNo === 2}
                balls={ballsState.filter((bs) => bs.barNo === 2)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="top"
                barNo={3}
                isSelected={selectedBarNo === 3}
                balls={ballsState.filter((bs) => bs.barNo === 3)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="top"
                barNo={4}
                isSelected={selectedBarNo === 4}
                balls={ballsState.filter((bs) => bs.barNo === 4)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="top"
                barNo={5}
                isSelected={selectedBarNo === 5}
                balls={ballsState.filter((bs) => bs.barNo === 5)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="top"
                barNo={6}
                isSelected={selectedBarNo === 6}
                balls={ballsState.filter((bs) => bs.barNo === 6)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
            </td>
            <td></td>
            <td>
              <GameBar
                className="top"
                barNo={7}
                isSelected={selectedBarNo === 7}
                balls={ballsState.filter((bs) => bs.barNo === 7)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="top"
                barNo={8}
                isSelected={selectedBarNo === 8}
                balls={ballsState.filter((bs) => bs.barNo === 8)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="top"
                barNo={9}
                isSelected={selectedBarNo === 9}
                balls={ballsState.filter((bs) => bs.barNo === 9)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="top"
                barNo={10}
                isSelected={selectedBarNo === 10}
                balls={ballsState.filter((bs) => bs.barNo === 10)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="top"
                barNo={11}
                isSelected={selectedBarNo === 11}
                balls={ballsState.filter((bs) => bs.barNo === 11)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="top"
                barNo={12}
                isSelected={selectedBarNo === 12}
                balls={ballsState.filter((bs) => bs.barNo === 12)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
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
                gameState={gameState}
                onGameStateChanged={gameStateChangedHandler}
              />
            </td>
          </tr>
          <tr>
            <td>
              <GameBar
                className="bottom"
                barNo={24}
                isSelected={selectedBarNo === 24}
                balls={ballsState.filter((bs) => bs.barNo === 24)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="bottom"
                barNo={23}
                isSelected={selectedBarNo === 23}
                balls={ballsState.filter((bs) => bs.barNo === 23)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="bottom"
                barNo={22}
                isSelected={selectedBarNo === 22}
                balls={ballsState.filter((bs) => bs.barNo === 22)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="bottom"
                barNo={21}
                isSelected={selectedBarNo === 21}
                balls={ballsState.filter((bs) => bs.barNo === 21)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="bottom"
                barNo={20}
                isSelected={selectedBarNo === 20}
                balls={ballsState.filter((bs) => bs.barNo === 20)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="bottom"
                barNo={19}
                isSelected={selectedBarNo === 19}
                balls={ballsState.filter((bs) => bs.barNo === 19)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
            </td>
            <td></td>
            <td>
              <GameBar
                className="bottom"
                barNo={18}
                isSelected={selectedBarNo === 18}
                balls={ballsState.filter((bs) => bs.barNo === 18)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="bottom"
                barNo={17}
                isSelected={selectedBarNo === 17}
                balls={ballsState.filter((bs) => bs.barNo === 17)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="bottom"
                barNo={16}
                isSelected={selectedBarNo === 16}
                balls={ballsState.filter((bs) => bs.barNo === 16)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="bottom"
                barNo={15}
                isSelected={selectedBarNo === 15}
                balls={ballsState.filter((bs) => bs.barNo === 15)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="bottom"
                barNo={14}
                isSelected={selectedBarNo === 14}
                balls={ballsState.filter((bs) => bs.barNo === 14)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
              <GameBar
                className="bottom"
                barNo={13}
                isSelected={selectedBarNo === 13}
                balls={ballsState.filter((bs) => bs.barNo === 13)}
                gameState={gameState}
                availableBarsForSelect={availableBarsForSelect}
                onBarSelected={barSelectionHandler}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GameBoard;
