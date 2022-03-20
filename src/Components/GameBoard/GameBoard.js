import "./GameBoard.css";
import GameBar from "../GameBar/GameBar";
import GameBall from "../GameBall/GameBall";
import { useState } from "react";

const DUMMY_BallsState = [
  { id: 1001, barNo: 1, playerNo: 1 },
  { id: 1002, barNo: 1, playerNo: 1 },
  { id: 1003, barNo: 12, playerNo: 1 },
  { id: 1004, barNo: 12, playerNo: 1 },
  { id: 1005, barNo: 12, playerNo: 1 },
  { id: 1006, barNo: 12, playerNo: 1 },
  { id: 1007, barNo: 12, playerNo: 1 },
  { id: 1008, barNo: 17, playerNo: 1 },
  { id: 1009, barNo: 17, playerNo: 1 },
  { id: 1010, barNo: 17, playerNo: 1 },
  { id: 1011, barNo: 19, playerNo: 1 },
  { id: 1012, barNo: 19, playerNo: 1 },
  { id: 1013, barNo: 19, playerNo: 1 },
  { id: 1014, barNo: 19, playerNo: 1 },
  { id: 1015, barNo: 19, playerNo: 1 },
  { id: 2001, barNo: 6, playerNo: 2 },
  { id: 2002, barNo: 6, playerNo: 2 },
  { id: 2003, barNo: 6, playerNo: 2 },
  { id: 2004, barNo: 6, playerNo: 2 },
  { id: 2005, barNo: 6, playerNo: 2 },
  { id: 2006, barNo: 8, playerNo: 2 },
  { id: 2007, barNo: 8, playerNo: 2 },
  { id: 2008, barNo: 8, playerNo: 2 },
  { id: 2009, barNo: 13, playerNo: 2 },
  { id: 2010, barNo: 13, playerNo: 2 },
  { id: 2011, barNo: 13, playerNo: 2 },
  { id: 2012, barNo: 13, playerNo: 2 },
  { id: 2013, barNo: 13, playerNo: 2 },
  { id: 2014, barNo: 24, playerNo: 2 },
  { id: 2015, barNo: 24, playerNo: 2 },
];
const GameBoard = () => {
  const [ballsState, setBallsState] = useState(DUMMY_BallsState);
  const barUpdateHandler = (state) => {
    setBallsState((prevState) => {
      const prevBallState = prevState.filter((b) => b.id === state.id)[0];
      let newBarNo = prevBallState.barNo + state.step;
      if (newBarNo <= 0 || newBarNo > 24) newBarNo = prevBallState.barNo;
      return [
        {
          id: prevBallState.id,
          barNo: newBarNo,
          playerNo: prevBallState.playerNo,
        },
        ...prevState.filter((p) => p.id !== prevBallState.id),
      ];
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
            <td colSpan={3}></td>
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
