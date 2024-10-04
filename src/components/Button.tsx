import '../assets/scss/Button.css'

interface ButtonProps {
  className?: string;
  onClick: () => void;
  name: string;
  varient?: "Primary" | "Secondary" | "Teritory";
}

function Button({
  className = "",
  onClick,
  name,
  varient = "Primary",
}: ButtonProps) {
  return (
    <button className={`${className} ${varient}`} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
