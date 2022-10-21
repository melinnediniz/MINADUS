import { useEffect, useState } from "react";
import { Board } from "../../components/Board";
import { Header } from "../../components/Header";
import { GameService } from "../../services/GameService";
import { getPossibleLevels } from "../../utils/getPossibleLevels";
import "./styles.css";

const gameService = new GameService();

export const Match = () => {
    const [gamemode, setGamemode] = useState("ranking");
    const [level, setLevel] = useState(getPossibleLevels()[0]); // default is 'easy'
    const [board, setBoard] = useState([]);

    useEffect(() => {
        async function fetch() {
            const newBoard = await gameService.getDailyGame();
            setBoard(newBoard);
        }
        fetch();
    }, []);

    return (
        <div className="page">
            <Header gamemode={gamemode} />
            <Board totalBombs={level.bombs} board={board} style={level.style} />
        </div>
    );
};
