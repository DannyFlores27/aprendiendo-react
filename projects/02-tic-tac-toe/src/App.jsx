import React, { useState } from 'react'
import confetti from 'canvas-confetti'

// Importar de forma nombrada cuando no son default functions
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'

function App() {
  /* const board = Array(9).fill(null) */
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  /* const [board, setBoard] = useState(
    ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']
  ) */

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    // Si no hay nada en el storage, se usa el valor por defecto
    // ?? es el operador de fusión de nulos ya que turn puede ser null y ya es String no necesita ser convertido
    return turnFromStorage ?? TURNS.X
  })

  // Null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
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
    // Guardar en el storage
    saveGameToStorage({
      board: newBoard,
      turns: newTurn
    })
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
