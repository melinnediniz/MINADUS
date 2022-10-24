import React from 'react'
import './styles.css'
import {GiPodiumWinner as Ranking} from 'react-icons/gi'
import { useRef } from 'react'

const IS_WINNER_MESSAGE = {
    true: "VITÓRIA",
    false: "DERROTA"
}


export const Endgame = ({showEndgame, setShowEndgame, winner}) => {

    return (
        <>
        {showEndgame ? 
        <div className='modal'>
            <div className='background'>
                <div className='modal-box'>

                    <h1 className='modal-title'>
                        {IS_WINNER_MESSAGE[winner]}
                        </h1>
                    <div id='match-info'>
                        <h1>00:00:00</h1>
                        <h2>TEMPO DE JOGO</h2>
                    </div>
                    <div id='match-info'>
                        <h1>000</h1>
                        <h2>POSIÇÃO NO RANKING</h2>
                    </div>
                    <div id='see-ranking'>
                        <Ranking size={85} color={'#222222'}/>
                        <h2>VER RANKING COMPLETO</h2>
                    </div>
                    <div id='footer'>
                        <h2>PRÓXIMO JOGO EM 00:00:00</h2>
                    </div>
                 
                </div>
                
            </div>

        </div>
        : null}
        </>
    );
}

