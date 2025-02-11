import React, { useState } from 'react'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  /* const board = Array(9).fill(null) */
  const [board, setBoard] = useState(Array(9).fill(null))
  /* const [board, setBoard] = useState(
    ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']
  ) */

  const [turn, setTurn] = useState(TURNS.X)

  // Null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null)

  const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const checkWinner = (boardToCheck) => {
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
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner) // ???????????????????????????

      // Porque no se muestra el alert después de que hay un ganador

      // ???????????????????????????????????????????????????????

      alert(`Winner: ${newWinner}`)
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe Game</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
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
    </main>
  )
}

export default App
