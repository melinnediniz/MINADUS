import React, { useEffect, useRef, useState } from "react";
import { GiPodiumWinner as RankingIcon } from "react-icons/gi";
import "./styles.css";

const IS_WINNER_MESSAGE = {
    true: "VITÓRIA",
    false: "DERROTA",
};

export const Endgame = ({ showEndgame, setShowEndgame, winner, gameTime }) => {
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");

    let interval = useRef(null);
    let modalRef = useRef(null);

    const startCountDown = () => {
        const month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        const today = new Date();
        const countDown = new Date(
            `${month[today.getMonth()]} ${
                today.getDate() + 1
            }, ${today.getFullYear()} 00:00:00`
        ).getTime();
        interval = setInterval(() => {
            const now = new Date();
            const distance = countDown - now;

            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startCountDown();
        return () => {
            clearInterval(interval.current);
        };
    });

    function getFinalTime() {
        const minutes = Math.floor(gameTime / 60);
        const seconds = Math.round((gameTime / 60 - parseInt(minutes)) * 60);
        return [minutes, seconds];
    }

    function formatTimeInfo(minutes, seconds) {
        const minutesText = ("00" + minutes).slice(-2);
        const secondsText = ("00" + seconds).slice(-2);
        return `${minutesText}:${secondsText}`;
    }

    useEffect(() =>{
        let handleClick = (e) =>{
            if(!modalRef.current.contains(e.target)){
                setShowEndgame(false)
                console.log(modalRef.current)
            }
        }

        document.addEventListener("mousedown", handleClick)
    })

    return (
        <>
            {showEndgame ? (
                <div className="modal">
                    <div className="background">
                        <div className="modal-box" ref={modalRef}>
                            <h1 className="modal-title">
                                {IS_WINNER_MESSAGE[winner]}
                            </h1>
                            <div id="match-info">
                                <h1>
                                    {formatTimeInfo(
                                        getFinalTime()[0],
                                        getFinalTime()[1]
                                    )}
                                </h1>
                                <h2>TEMPO DE JOGO</h2>
                            </div>
                            <div id="match-info">
                                <h1>000</h1>
                                <h2>POSIÇÃO NO RANKING</h2>
                            </div>
                            <div id="see-ranking">
                                <RankingIcon size={85} color={"#222222"} />
                                <h2>VER RANKING COMPLETO</h2>
                            </div>
                            <div id="footer">
                                <h2>
                                    PRÓXIMO JOGO EM{" "}
                                    {hours < 10 ? "0" + hours : hours}:
                                    {minutes < 10 ? "0" + minutes : minutes}:
                                    {seconds < 10 ? "0" + seconds : seconds}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};