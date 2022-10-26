import { api } from "../api.js";
const PATH = "/games";

export class GameService {
    // Possible levels are
    // - easy: 10 bombs
    // - medium: 40 bombs
    // - hard: 99 bombs
    async getDailyGame(level = "easy") {
        try {
            const { data: board } = await api.get(
                `${PATH}/daily?level=${level}`
            );
            return board;
        } catch (error) {
            return [];
        }
    }

    async getRandomGame(level = "easy") {
        try {
            const { data: board } = await api.get(
                `${PATH}/casual?level=${level}`
            );
            return board;
        } catch (error) {
            return [];
        }
    }

    static revealEmptySquares(board = [], x, y, order) {
        let boardCopy = board.map((row) => [...row]);
        if (x < 0 || y < 0 || x >= order || y >= order) return boardCopy;
        if (boardCopy[y][x] < 0) return boardCopy;
        if (boardCopy[y][x] === 0) boardCopy[y][x] = -9;
        else {
            boardCopy[y][x] = boardCopy[y][x] * -1;
            return boardCopy;
        }
        boardCopy = GameService.revealEmptySquares(boardCopy, x - 1, y, order);
        boardCopy = GameService.revealEmptySquares(boardCopy, x + 1, y, order);
        boardCopy = GameService.revealEmptySquares(boardCopy, x, y + 1, order);
        boardCopy = GameService.revealEmptySquares(boardCopy, x, y - 1, order);
        return boardCopy;
    }
}
