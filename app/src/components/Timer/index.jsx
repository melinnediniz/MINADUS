import { useEffect, useState, useRef } from "react";
import "./styles.css";

const Timer = ({timerOn, checkGame, gameTime, setGameTime, winner}) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    let interval = useRef();
    
    useEffect(() => {
        if (timerOn && (checkGame)) {
            interval = setInterval(() => {
                setSeconds(seconds + 1);
                setGameTime(gameTime + 1);
                if (seconds == 59) {
                    setMinutes(minutes + 1);
                    setSeconds(0);
                    setGameTime(gameTime + 1);
                    
                }
            }, 1000);
        } else {
            clearInterval(interval.current);
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
