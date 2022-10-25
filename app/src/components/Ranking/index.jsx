import React from 'react'
import { MdClose as CloseIcon } from "react-icons/md";

import "./styles.css";

export const Ranking = ({
    onClose,
    visible = false,
}) => {

  return (
    <>
    <dialog open={visible} className='dia'>
        <header id='header'>
            <button onClick={onClose} className="button">
                <CloseIcon size={24} />
            </button>
            <h1>TOP 20 PLAYERS</h1>
        </header>
        <body id='body'>
            <ul>
                <li>#1  NOME CADASTRADO       00:00:00</li>
                <li>#1  NOME CADASTRADO       00:00:00</li>
                <li>#1  NOME CADASTRADO       00:00:00</li>
                <li>#1  NOME CADASTRADO       00:00:00</li>
                <li>#1  NOME CADASTRADO       00:00:00</li>
                <li>#1  NOME CADASTRADO       00:00:00</li>
            </ul>
              </body>
    </dialog>
    </>
  );
};
