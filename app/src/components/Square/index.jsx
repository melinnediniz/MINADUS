import { useEffect, useState } from "react";
import { MdFlag as FlagIcon } from "react-icons/md";

import "./styles.css";

export const Square = ({
    onClick,
    onAddFlag,
    onRemoveFlag,
    value,
    x,
    y,
    flagOpen,
    minesFree,
    setMinesFree
}) => {
    const wasOpened = value < 0;

    const [visible, setVisible] = useState(wasOpened);
    const flagVisible = flagOpen && !visible;
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
        if (flagVisible) onRemoveFlag(x, y);
        else onAddFlag(x, y);
    }

    function show() {
        onClick(x, y);
        if (visible) return;
        if (isBomb) return;
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
            {flagVisible && <FlagIcon className="flag" size={32} />}
        </div>
    );
};
