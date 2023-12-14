import classes from "./iconButton.module.css";

const IconButton = ({ children, className, onClick }) => {

  const combinedClassName = `${classes.icon_button} ${className}`.trim();
  return <button className={combinedClassName} onClick={onClick}>{children}</button>
}

export default IconButton;