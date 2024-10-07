interface InputProps{
    className: string,
    type:string,
    onChange?: (e : React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    placeholder?: string 
}

function InputField({className, type, onChange, value="", placeholder=""} : InputProps) {
  return (
    <input type= {type} placeholder={placeholder} className={className} value={value} onChange={onChange}/>
  )
}

export default InputField