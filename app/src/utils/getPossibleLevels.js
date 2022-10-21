export function getPossibleLevels() {
    return [
        {
            level: "easy",
            bombs: 10,
            style: "bigger",
        },
        {
            level: "medium",
            bombs: 40,
            style: "medium",
        },
        {
            level: "hard",
            bombs: 99,
            style: "small",
        },
    ];
}
