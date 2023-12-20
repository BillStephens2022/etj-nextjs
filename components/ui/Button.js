import { useRouter } from "next/router";
import classes from "@/components/ui/button.module.css";

const Button = ({
  children,
  onClick,
  type,
  href,
  backgroundColor = "",
  backgroundImage = "linear-gradient(135deg, steelblue 0%, darkslateblue 100%)",
  color = "white",
  icon,
  margin = "0",
  minWidth = "auto",
  className = "",
  style = {},
  ...restProps
}) => {
  const router = useRouter();

  const buttonStyle = {
    backgroundColor: backgroundColor ? backgroundColor : "none",
    backgroundImage: backgroundColor ? "none" : backgroundImage,
    color: color,
    margin: margin,
    width: minWidth,
    ...style,
  };

  const combinedClassName = `${classes.custom_btn} ${className}`.trim();

  const handleClick = () => {
    if (href) {
      router.push(href); // if there is an href prop passed in, use router.push to navigate to the specified href
    } else if (onClick) {
      // otherwise use the onClick prop to determine what the button will do
      onClick();
    }
  };

  return (
    <button
      className={combinedClassName}
      onClick={handleClick}
      type={type}
      style={buttonStyle}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
