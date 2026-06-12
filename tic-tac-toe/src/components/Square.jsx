export const Square  = ({children, isSelected, updateBoard, index}) => {



  const className = `square ${isSelected ? "is-selected" : ""} ` //esto es para que el square cambie de color si es seleccionado.

  const handleClick = () => {
    updateBoard(index)
  }



  return(
    <div className={className} onClick={handleClick}>
     {children} {/* esto muestra el valor del index en el square */}
    </div>
  )
}