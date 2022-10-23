import random from "seedrandom";

const secret = process.env.SEED_SECRET;

const settings = {
    ["easy"]: { height: 8, width: 10, bombCount: 10 },
    ["medium"]: { height: 14, width: 18, bombCount: 40 },
    ["hard"]: { height: 21, width: 25, bombCount: 99 },
};

function mineField(rng, { height, width, bombCount }) {
    const field = new Array(height);
    for (let row = 0; row < height; row++) {
        field[row] = new Array(width);

        for (let column = 0; column < width; column++) {
            field[row][column] = 0;
        }
    }

    const cells = height * width;
    let bombs =
        bombCount < height * width ? bombCount : Math.floor(cells * 0.33);

    for (; bombs > 0; bombs--) {
        const row = Math.floor(rng() * height);
        const column = Math.floor(rng() * width);

        addMine(field, row, column);
    }

    return field;
}

function getDailySeed() {
    const date = new Date().toISOString().substring(0, 10);
    return date + secret;
}

function addMine(field, row, column) {
    if (field[row] && Number.isInteger(field[row][column])) {
        field[row][column] = 9;

        for (let i = -1; i <= 1; i++)
            for (let j = -1; j <= 1; j++)
                if (
                    Number.isInteger(
                        field[row + i][column + j] &&
                            field[row + i][column + j] < 8
                    )
                )
                    ++field[row + i][column + j];
    }
}

function getCasualGame(difficulty = "easy") {
    const RNG = random();

    return mineField(RNG, settings[difficulty]);
}

function getDailyGame() {
    const dailyRNG = random(getDailySeed());

    return mineField(dailyRNG, settings["easy"]);
}

export { getDailyGame, getCasualGame };
