import "./styles.css";

export const LevelTable = () => {
    function muda_modo() {
        const btn = document.getElementById("modo");

        if (btn.innerHTML == "JOGO NORMAL") {
            btn.innerHTML = "JOGO RANQUEADO";
        } else if (btn.innerHTML == "JOGO RANQUEADO") {
            btn.innerHTML = "JOGO NORMAL";
        }
    }

    function destaca1() {
        const btn = document.getElementById("facil");
        const btn2 = document.getElementById("medio");
        const btn3 = document.getElementById("dificil");

        btn3.style.backgroundColor = "transparent";
        btn2.style.backgroundColor = "transparent";
        btn.style.backgroundColor = "gray";
    }

    function destaca2() {
        const btn = document.getElementById("medio");
        const btn2 = document.getElementById("facil");
        const btn3 = document.getElementById("dificil");

        btn3.style.backgroundColor = "transparent";
        btn2.style.backgroundColor = "transparent";
        btn.style.backgroundColor = "gray";
    }

    function destaca3() {
        const btn = document.getElementById("dificil");
        const btn2 = document.getElementById("medio");
        const btn3 = document.getElementById("facil");

        btn3.style.backgroundColor = "transparent";
        btn2.style.backgroundColor = "transparent";
        btn.style.backgroundColor = "gray";
    }

    let isHid = false;

    function oculta() {
        const btn = document.getElementById("table");
        const btn2 = document.getElementById("facil");
        const btn3 = document.getElementById("medio");
        const btn4 = document.getElementById("dificil");
        const btn5 = document.getElementById("butmod");
        const btn6 = document.getElementById("modo");
        const btn7 = document.getElementById("dificult");
        const btn8 = document.getElementById("row");
        isHid = !isHid;

        if (isHid == true) {
            btn.style.width = 100 + "px";
            btn.style.left = 1604 + "px";
            btn2.style.visibility = "hidden";
            btn3.style.visibility = "hidden";
            btn4.style.visibility = "hidden";
            btn5.style.visibility = "hidden";
            btn6.style.visibility = "hidden";
            btn7.style.visibility = "hidden";
            btn8.style.visibility = "visible";
        } else {
            btn.style.width = 302 + "px";
            btn.style.left = 1380 + "px";
            btn2.style.visibility = "visible";
            btn3.style.visibility = "visible";
            btn4.style.visibility = "visible";
            btn5.style.visibility = "visible";
            btn6.style.visibility = "visible";
            btn7.style.visibility = "visible";
            btn8.style.visibility = "visible";
        }
    }

    return (
        <div className="table" id="table">
            <text className="row" id="row" onClick={oculta}>
                →
            </text>
            <h1 className="dificuldade" id="dificult">
                DIFICULDADE
            </h1>
            <button className="fácil" id="facil" onClick={destaca1}>
                FÁCIL
            </button>
            <button className="médio" id="medio" onClick={destaca2}>
                MÉDIO
            </button>
            <button className="difícil" id="dificil" onClick={destaca3}>
                DIFÍCIL
            </button>
            <h1 className="modo" id="butmod">
                MODO DE JOGO
            </h1>
            <button className="modo" id="modo" onClick={muda_modo}>
                JOGO NORMAL
            </button>
        </div>
    );
};
