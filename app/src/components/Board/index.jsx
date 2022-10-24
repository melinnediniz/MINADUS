import { useEffect, useState } from "react";
import { GiUnlitBomb as BombIcon } from "react-icons/gi";
import { MdFlag as FlagIcon } from "react-icons/md";
import { GameService } from "../../services/GameService";
import { Square } from "../Square";
import Timer from "../Timer";
import { Endgame } from "../EndGame";

import "./styles.css";

export const Board = ({ totalBombs = 10, board = [], style = "bigger" }) => {
    const [timerOn, setTimerOn] = useState(false);
    const [flags, setFlag] = useState(0);
    const [bombs] = useState(totalBombs);
    const [mines, setMines] = useState(board);
    const [gameover, setGameover] = useState(false);
    const [showEndgame, setShowEndgame] = useState(false)
    const [winner, setWinner] = useState(false)

    function handleOpenModal(){
        setShowEndgame(previous => !previous)
    }

    useEffect(() => {
        setMines(board);
    }, [board]);

    function renderSquare(square, index, row) {
        return (
            <Square
                onClick={onClick}
                onGameover={explode}
                onAddFlag={incrementFlag}
                onRemoveFlag={decrementFlag}
                key={index}
                value={square}
                x={index}
                y={row}
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

    function gameStarted() {
        return timerOn;
    }

    function isOver() {
        
        return gameover;
    }

    function incrementFlag() {
        setFlag(flags + 1);
    }

    function decrementFlag() {
        if (flags <= 0) return;
        setFlag(flags - 1);
    }

    function onClick(x, y) {
        if (mines[y][x] !== 0) return;
        let newMines = GameService.revealEmptySquares(
            mines,
            x,
            y,
            mines.length
        );
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
                    gameover ? () => setTimerOn(false) : () => setTimerOn(true)
                }
            >
                {mines.map(renderMines)}
            </main>
            <Timer isStarted={gameStarted} over={isOver} />
        </div>
        <Endgame showEndgame={showEndgame} setShowEndgame={setShowEndgame} winner ={winner}/>
        </>
    );
};
