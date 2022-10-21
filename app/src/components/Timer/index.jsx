import { useEffect, useState } from "react";
import "./styles.css";

const Timer = (props) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    let timerOn = props.isStarted();
    let isOver = props.over();
    let interval;

    useEffect(() => {
        if (timerOn && !isOver) {
            interval = setInterval(() => {
                setSeconds(seconds + 1);
                if (seconds == 59) {
                    setMinutes(minutes + 1);
                    setSeconds(0);
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    });

    return (
        <div className="Timer">
            <div className="timer-text">
                <h1>TEMPO</h1>
                <p>
                    {minutes < 10 ? "0" + minutes : minutes}:
                    {seconds < 10 ? "0" + seconds : seconds}
                </p>
            </div>
        </div>
    );
};

export default Timer;
