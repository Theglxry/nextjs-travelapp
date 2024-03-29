import Image from "next/image";

// typescript prop validation
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string; //string bcus of img name is string ... ? cus not all btn have icons
  variant: string;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return( 
  <button
  type={type}
  className={`flexCenter gap-3 rounded-full border ${variant}`} 
  >
 {icon && <Image src={icon} alt={title} width={24} height={24}/>}
 <label className="bold-16 whites">{title}</label>
  </button>)
}; 

export default Button;
