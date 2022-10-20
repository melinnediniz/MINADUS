import { useState } from "react";
import { MdFlag as FlagIcon } from "react-icons/md";
import "./styles.css";

export const Square = ({ onGameover, value, x, y }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [flag, setFlag] = useState(false);
    const isBomb = value === "b";

    function handleClick(event) {
        const { type } = event;
        if (type === "click") {
            show();
        } else if (type === "contextmenu") {
            event.preventDefault();
            setFlag(true);
        }
    }

    function show() {
        if (isVisible) return;
        if (isBomb) {
            onGameover();
            setFlag(false);
            return;
        }
        setIsVisible(true);
    }

    return (
        <div
            onClick={handleClick}
            onContextMenu={handleClick}
            className={`square ${isVisible ? "" : "hide"} ${
                isBomb ? "bomb" : ""
            }`}
        >
            {isVisible && !isBomb && value}
            {flag && <FlagIcon className="flag" size={32} />}
        </div>
    );
};
