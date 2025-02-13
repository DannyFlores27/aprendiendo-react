import React, { useState } from 'react'
import confetti from 'canvas-confetti'

// Importar de forma nombrada cuando no son default functions
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'

function App() {
  /* const board = Array(9).fill(null) */
  const [board, setBoard] = useState(Array(9).fill(null))
  /* const [board, setBoard] = useState(
    ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']
  ) */

  const [turn, setTurn] = useState(TURNS.X)

  // Null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    // Revisamos si hay un empate
    // Si no hay espacios vacíos en el table
    // Entonces hay empate
    return newBoard.every((Square) => Square !== null)
  }

  const updateBoard = (index) => {
    // No actualizamos esta posición si ya está ocupada
    // o si ya hay un ganador
    if (board[index] || winner) {
      return
    }
    // Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard) // Asincrono, no garantiza que ya esté actualizado
    // Cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Verificar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Empate
    }
  }

  // board.map((_, index) => { _ porque no se usa

  return (
    <main className="board">
      <h1>Tic Tac Toe Game</h1>
      <button onClick={resetGame}>Reiniciar</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
