import { WINNER_COMBOS } from '../constants.js'

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      // Si hay un ganador
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // Si no hay ganador
    return null
  }

export const checkEndGame = (newBoard) => {
    // Revisamos si hay un empate
    // Si no hay espacios vacíos en el table
    // Entonces hay empate
    return newBoard.every((Square) => Square !== null)
  }