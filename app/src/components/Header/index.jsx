import { HiAdjustments as ConfigIcon } from 'react-icons/hi'
import { MdEqualizer as RankingIcon } from 'react-icons/md'

import './styles.css'

const GAMEMODE_NAMES = {
    "ranking": "Modo Ranqueado",
    "livre": "Modo de Jogo Livre"
}

export const Header = ({gamemode = "ranking"}) => {
    return (
    <header className="header">
        <div className="menu">
            <button className="button">
                <RankingIcon size={48}/>
            </button>
            <h1 className='title'>MINADUS</h1>
            <button className="button">
                <ConfigIcon size={48}/>
            </button>
        </div>
        <label className="gamemode">{GAMEMODE_NAMES[gamemode] || "Indefinido"}</label>
    </header>
  )
}
