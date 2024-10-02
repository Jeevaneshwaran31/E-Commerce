interface InputProps{
    className: string,
    type:string,
    onChange?: (e : React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    placeholder?: string 
}

function InputField( props : InputProps) {
  return (
    <input type= {props.type} placeholder={props.placeholder} className={props.className} value={props.value} onChange={props.onChange}/>
  )
}

export default InputField