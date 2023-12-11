// import { useSession } from "next-auth/react";
import { useState } from "react";
// import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
// import Button from "@/components/buttons/button";
import classes from "./navbar.module.css";

const Navbar = () => {
//   const { data: session } = useSession();
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();

  const handleLinkClick = () => {
    setIsChecked(false);
  };

//   const logoutHandler = () => {
//     signOut();
//   }

  return (
    <>
      <div className={classes.navbar}>
        <input
          type="checkbox"
          className={classes.nav_checkbox}
          id="navi-toggle"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label htmlFor="navi-toggle" className={classes.nav_button}>
          <span className={classes.nav_icon}>&nbsp;</span>
        </label>
        <div className={classes.nav_background}></div>
        <nav className={classes.navbar_nav}>
          <ul className={classes.nav_items}>
          <li className={classes.nav_item}>
              <Link
                href="/"
                className={`${classes.nav_item} ${classes.nav_link} ${
                  router.pathname === "/" ? classes.active : ""
                }`}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className={classes.nav_item}>
              <Link
                href="/about"
                className={`${classes.nav_item} ${classes.nav_link} ${
                  router.pathname === "/about" ? classes.active : ""
                }`}
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>
            <li className={classes.nav_item}>
              <Link
                href="/fundraising"
                className={`${classes.nav_item} ${classes.nav_link} ${
                  router.pathname === "/fundraising" ? classes.active : ""
                }`}
                onClick={handleLinkClick}
              >
                Fundraising
              </Link>
            </li>
           
            {/* {session && (
              <>
               <li className={classes.nav_item}>
               <Link
                href="/admin"
                className={`${classes.nav_item} ${classes.nav_link} ${
                  router.pathname === "/admin" ? classes.active : ""
                }`}
                onClick={handleLinkClick}
              >
                Admin
              </Link>
             </li>
              <li className={classes.nav_logout_button}>
                <Button
                  text="Log Off"
                  backgroundImage="linear-gradient(135deg, #F5515F 0%,#a1051d 100%)"
                  onClick={logoutHandler}
                 
                /> 
              </li>
              
             </>
            )} */}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;