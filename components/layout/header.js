import { GiCrossedSwords } from "react-icons/gi";
import classes from "@/components/layout/header.module.css";

const Header = ({ pageTitle, isAnimated=false }) => {
  const splitTitle = (text) => {
    const splitTitleArray = text.split(" ").map((word, index) => <span key={index}>{word}&nbsp;</span>);
    return splitTitleArray;
  };
  return (
    <div className={classes.header_container}>
      <h1 className={classes.header}>
        <span className={classes.swords}>
          <GiCrossedSwords />
        </span>{" "}
        ETJ{" "}
        <span className={classes.swords}>
          <GiCrossedSwords />
        </span>
      </h1>
      {pageTitle && (
        <h2 className={isAnimated ? classes.page_heading_animated : classes.page_heading}>{splitTitle(pageTitle)}</h2>
      )}
    </div>
  );
};

export default Header;
