import classes from "@/components/layout/header.module.css";

const Header = ({ children }) => {
    return (
       <>
         <h1 className={classes.header}>{children}</h1>
       </>
    );
   }
   
   export default Header;