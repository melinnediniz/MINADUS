import { useState } from "react";
import { GiUnlitBomb as BombIcon } from "react-icons/gi";
import { MdFlag as FlagIcon } from "react-icons/md";
import { Square } from "../Square";
import { Timer } from "../Timer";

import "./styles.css";

export const Board = () => {
    const [flags, setFlags] = useState(0);
    const [bombs, setBombs] = useState(0);
    const [mines, setMines] = useState([
        [1, "b", 3, 4, 5, 6, 7, 8, 9, 10],
        [1, "b", 3, 4, 5, 6, 7, 8, 9, 10],
        [1, "b", 3, 4, 5, "b", 7, 8, 9, 10],
        [1, "b", 3, 4, 5, 6, 7, 8, 9, 10],
        [1, "b", 3, 4, 5, 6, 7, 8, 9, 10],
        [1, "b", 3, 4, 5, 6, 7, 8, 9, 10],
        [1, "b", 3, 4, 5, 6, 7, 8, 9, 10],
        [1, "b", 3, 4, 5, "b", 7, 8, 9, 10],
        [1, "b", 3, 4, 5, 6, 7, 8, "b", 10],
        [1, "b", 3, 4, 5, 6, 7, 8, 9, 10],
    ]);
    const [gameover, setGameover] = useState(false);

    function renderSquare(square, index, row) {
        return (
            <Square
                onGameover={explode}
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
    }

    return (
        <div className={`board bigger ${gameover ? "fall" : ""}`}>
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
            <main className="main">{mines.map(renderMines)}</main>
            <Timer />
        </div>
    );
};
