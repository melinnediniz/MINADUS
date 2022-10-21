import { useEffect, useState } from "react";
import { MdFlag as FlagIcon } from "react-icons/md";

import "./styles.css";

export const Square = ({
    onClick,
    onAddFlag,
    onRemoveFlag,
    onGameover,
    value,
    x,
    y,
}) => {
    const wasOpened = value < 0;

    const [visible, setVisible] = useState(wasOpened);
    const [flag, setFlag] = useState(false);

    const isEmpty = value === 0 || value === -9;
    const isBomb = value === 9;
    const valueIsVisible = visible && !isBomb && !isEmpty;
    const visibleValue = !isBomb ? Math.abs(value) : 0;

    useEffect(() => {
        setVisible(wasOpened);
    }, [wasOpened]);

    function handleClick(event) {
        const { type } = event;
        if (type === "click") show();
        else if (type === "contextmenu") {
            event.preventDefault();
            handleFlag();
        }
    }

    function handleFlag() {
        if (visible) return;
        if (flag) onRemoveFlag();
        else onAddFlag();
        setFlag(!flag);
    }

    function show() {
        onClick(x, y);
        if (visible) return;
        setFlag(false);
        if (isBomb) return onGameover();
        setVisible(true);
    }

    return (
        <div
            onClick={handleClick}
            onContextMenu={handleClick}
            className={`square ${visible ? "" : "hide"} ${
                isBomb ? "bomb" : ""
            }`}
        >
            {valueIsVisible && visibleValue}
            {flag && <FlagIcon className="flag" size={32} />}
        </div>
    );
};
