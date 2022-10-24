import { MdClose as CloseIcon } from "react-icons/md";
import { getLevels } from "../../utils/getLevels";
import "./styles.css";

export const SettingSidebar = ({
    onClose,
    onChangeGamemode,
    onChangeLevel,
    getGamemode,
    getLevel,
    visible = false,
}) => {
    const currentLevel = getLevel();
    const currentGamemode = getGamemode();

    function renderLevelOptions(level, index) {
        return (
            <button
                className={`level ${
                    currentLevel.level === level.level ? "selected" : ""
                }`}
                key={index}
                onClick={() => onChangeLevel(level)}
            >
                {level.label}
            </button>
        );
    }

    return (
        <div className={`settings ${visible ? "visible" : "hide"}`}>
            <header className="header">
                <button onClick={onClose} className="button">
                    <CloseIcon size={24} />
                </button>
            </header>
            <label className="label">DIFICULDADE</label>
            <div className="levels">{getLevels().map(renderLevelOptions)}</div>
            <label className="label">MODO DE JOGO</label>
            <div className="gamemodes">
                <button
                    onClick={() => onChangeGamemode("ranking")}
                    className={`gamemode ${
                        currentGamemode === "ranking" ? "selected" : ""
                    }`}
                >
                    RANQUEADO
                </button>
                <button
                    onClick={() => onChangeGamemode("casual")}
                    className={`gamemode ${
                        currentGamemode === "casual" ? "selected" : ""
                    }`}
                >
                    JOGO LIVRE
                </button>
            </div>
        </div>
    );
};
