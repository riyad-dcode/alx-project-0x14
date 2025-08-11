import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <button onClick={action} className="px-8 py-2 border-2 border-[#3809e2] rounded-full hover:bg-[#3809e2] hover:text-black transition-colors duration-300">
      {title}
    </button>
  )
}

export default Button;
