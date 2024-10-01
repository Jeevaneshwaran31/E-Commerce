interface ButtonProps {
    className ? : string,
    onClick : () => void,
    name : string 
}

function Button({className = "", onClick, name}:ButtonProps) {
  return (
    <button className={className} onClick={onClick}>{name}</button>
  )
}

export default Button