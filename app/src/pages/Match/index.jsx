import { useEffect, useState } from "react";
import { Board } from "../../components/Board";
import { Header } from "../../components/Header";
import { Ranking } from "../../components/Ranking";
import { SettingSidebar } from "../../components/SettingSidebar";
import { GameService } from "../../services/GameService";
import { getLevels } from "../../utils/getLevels";
import "./styles.css";

const gameService = new GameService();

export const Match = () => {
    const [gamemode, setGamemode] = useState("ranking");
    const [level, setLevel] = useState(getLevels()[0]); // default is 'easy'
    const [board, setBoard] = useState([]);
    const [settingVisible, setSettingsVisible] = useState(false);
    const [rankingVisible, setRankingVisible] = useState(false);

    useEffect(() => {
        async function fetch() {
            const newBoard = await gameService.getDailyGame();
            setBoard(newBoard);
        }
        fetch();
    }, []);

    function toggleRanking() {
        setRankingVisible(!rankingVisible);
    }

    function toggleSettingSidebar() {
        setSettingsVisible(!settingVisible);
    }

    function changeGamemode(mode) {
        setGamemode(mode);
    }

    function changeLevel(level) {
        setLevel(level);
    }

    return (
        <div className="page">
            <Header gamemode={gamemode} onSettings={toggleSettingSidebar} onRanking={toggleRanking} />
            <Board totalBombs={level.bombs} board={board} style={level.style} />
            <SettingSidebar
                onClose={toggleSettingSidebar}
                onChangeGamemode={changeGamemode}
                onChangeLevel={changeLevel}
                getGamemode={() => gamemode}
                getLevel={() => level}
                visible={settingVisible}
            />
            <Ranking
                onClose={toggleRanking}
                visible={rankingVisible}/>
        </div>
    );
};
