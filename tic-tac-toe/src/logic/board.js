import { WINNER_COMBINATIONS } from "../constantes.js"


export   const checkWinner = (boardToCheck) => {
    //revisando cada una de las combinaciones ganadoras posibles
    for (const pattern of WINNER_COMBINATIONS) {
    const [a, b, c] = pattern
    if (boardToCheck[a] &&  //si boardToCheck[a] es true, es decir que no es null
        boardToCheck[a] === boardToCheck[b] && //si el valor de [a] es igual al valor de [b]
        boardToCheck[a] === boardToCheck[c]) //si el valor de [a] es igual al valor de [c]
        {
      return boardToCheck[a] //si se cumple la condicion, devuelve el valor de [a]
    }
  }
  return null
  }