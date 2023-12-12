import { GiCrossedSwords } from "react-icons/gi";
import classes from "@/components/layout/header.module.css";

const Header = ({ pageTitle }) => {
  return (
    <div className={classes.header_container}>
      <h1 className={classes.header}><GiCrossedSwords /> ETJ <GiCrossedSwords /></h1>
      {pageTitle && <h2 className={classes.page_heading}>{pageTitle}</h2>}
    </div>
  );
};

export default Header;
