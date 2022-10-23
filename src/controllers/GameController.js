import random from "seedrandom";

const secret = process.env.SEED_SECRET;

function mineField(rng, height, width, bombCount) {
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

function getDailyGame() {
    const dailyRNG = random(getDailySeed());

    return mineField(dailyRNG, 10, 10);
}

export { getDailyGame };
