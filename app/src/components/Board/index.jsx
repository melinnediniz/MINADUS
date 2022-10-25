import { useEffect, useState } from "react";
import { GiUnlitBomb as BombIcon } from "react-icons/gi";
import { MdFlag as FlagIcon } from "react-icons/md";
import { GameService } from "../../services/GameService";
import { Endgame } from "../EndGame";
import { Square } from "../Square";
import Timer from "../Timer";

import "./styles.css";

export const Board = ({ totalBombs = 10, board = [], style = "bigger" }) => {
    const [timerOn, setTimerOn] = useState(false);
    const [flags, setFlags] = useState(0);
    const [flagPositions, setFlagPositions] = useState([]);
    const [bombs] = useState(totalBombs);
    const [mines, setMines] = useState(board);
    const [gameover, setGameover] = useState(false);
    const [showEndgame, setShowEndgame] = useState(false);
    const [winner, setWinner] = useState(false);
    const [gameTime, setGameTime] = useState(0);

    function handleOpenModal() {
        setShowEndgame((previous) => !previous);
    }

    useEffect(() => {
        setMines(board);
    }, [board]);

    function renderSquare(square, index, row) {
        const x = index;
        const y = row;
        const flagOpen = JSON.stringify(flagPositions).includes([x, y]);
        return (
            <Square
                onClick={onClick}
                onAddFlag={addFlag}
                onRemoveFlag={removeFlag}
                key={index}
                value={square}
                x={x}
                y={y}
                flagOpen={flagOpen}
            />
        );
    }

    function renderMines(mines = [], minesIndex) {
        return (
            <div key={minesIndex} className="mines">
                {mines.map((square, index) =>
                    renderSquare(square, index, minesIndex)
                )}
            </div>
        );
    }

    function formatStatusNumber(status = "000") {
        return `000${status}`.slice(-3);
    }

    function explode() {
        setGameover(true);
        handleOpenModal();
    }

    function addFlag(x, y) {
        setFlagPositions([...flagPositions, [x, y]]);
        setFlags(flags + 1);
    }

    function removeFlag(x, y) {
        if (flags <= 0) return;
        const newFlagPositions = flagPositions.filter((flagPosition) => {
            if (x !== flagPosition[0] || y !== flagPosition[1])
                return flagPosition;
        });
        setFlagPositions(newFlagPositions);
        setFlags(flags - 1);
    }

    function onClick(x, y) {
        if (mines[y][x] < 0) return;
        if (mines[y][x] === 9) return explode();
        let newMines = GameService.revealEmptySquares(
            mines,
            x,
            y,
            mines.length
        );
        const newFlagPositions = flagPositions.filter((flagPosition) => {
            const value = newMines[flagPosition[1]][flagPosition[0]];
            if (value >= 0) return flagPosition;
        });
        setFlagPositions(newFlagPositions);
        setFlags(newFlagPositions.length);
        setMines(newMines);
    }

    function handleOnContextMenu(event) {
        event.preventDefault();
    }

    return (
        <>
            <div className={`board ${style} ${gameover ? "fall" : ""}`}>
                <header className="header">
                    <div className="flags">
                        <FlagIcon size={32} />
                        <label>{formatStatusNumber(flags)}</label>
                    </div>
                    <div className="bombs">
                        <BombIcon size={32} />
                        <label>{formatStatusNumber(bombs)}</label>
                    </div>
                </header>
                <main
                    className="main"
                    onContextMenu={handleOnContextMenu}
                    onClick={
                        gameover
                            ? () => setTimerOn(false)
                            : () => setTimerOn(true)
                    }
                >
                    {mines.map(renderMines)}
                </main>
                <Timer
                    timerOn={timerOn}
                    gameover={gameover}
                    gameTime={gameTime}
                    setGameTime={setGameTime}
                />
            </div>
            <Endgame
                showEndgame={showEndgame}
                setShowEndgame={setShowEndgame}
                winner={winner}
                gameTime={gameTime}
            />
        </>
    );
};
