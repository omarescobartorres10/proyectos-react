import { useState } from "react";
import confetti from "canvas-confetti"
import { Square } from "./components/Square.jsx"
import { TURNS } from "./constantes.js";
import { checkWinner } from "./logic/board";
import { WinnerModal } from "./components/winnerModal.jsx";





export default function App () {

  const [board, setBoard] = useState(() => {
    const saveBoard = window.localStorage.getItem('board')
    return saveBoard ? JSON.parse(saveBoard) : Array(9).fill(null) }) // esta es la estructura de dato que va a guardar el estado del juego. 

  const [turn, setTurn] = useState(() => {
    const saveTurn = window.localStorage.getItem('turn')
    return saveTurn ?? TURNS.X }) // esta es el estado que guarda el turno del jugador.

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board') // para eliminar el board del localStorage
    window.localStorage.removeItem('turn')  // para eliminar el turno del localStorage
  }


  const checkGame = (boardToCheck) => {
    return boardToCheck.every((square) => square !== null)//si el array esta lleno, es decir que no hay ningun null, entonces es un empate.
  }

  //Normalmente en las aplicaicones de react o en los juegos donde quieras empezar dde nuevo lo primero que tenemos que hacer es setear los valores a sus estados iniciales.  

  
  const updateBoard = (index) => {

    if(board[index] || winner) return //esto es para que no se pueda jugar en un square que ya tiene un valor.

    const newBoard = [...board] //esto es una copia del array. 
    newBoard[index] = turn //esto actualiza el valor del index. 
    setBoard(newBoard) //esto actualiza el estado del board.

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X //este ternario quiere decir que si el turno es X, entonces el nuevo turno es O, si no, el nuevo turno es X.
    setTurn(newTurn)

    //guardar

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)


    //revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
      

    } else if (checkGame(newBoard)) {
      setWinner(false)
    }

  }
  
   
    
  



  return(
    <main className="board">
    <h1>Tic Tac Toe</h1>
    <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((_, index) => { {/*esto recorre el array y devuelve un div con el valor del index*/}
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
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal
      winner={winner}
      resetGame={resetGame}
      />
    </main>
  )
}


//un estado es básicamenre un valor que vez que cambie va a volver a re-renderizar el componente. 

//ennreact no debes mutar los estados. Siempre crea un nuevo array o un nuevo objeto para actualizar el estado. 

//en react la actualización del estado es asíncrona. 

//Los useState no deben de ir dentro de un condicional. 