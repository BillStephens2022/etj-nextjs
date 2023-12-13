import Image from "next/image";
import logo from "../../public/images/logo2.png";
import classes from "@/components/layout/loader.module.css";

const Loader = () => {
  return (
    <div className={classes.container}>
      <h2>Loading!!</h2>
      <Image
        src={logo}
        alt="logo"
        width={300}
        height={208}
        placeholder="blur"
        style={{ objectFit: "contain" }}
        className={classes.logo}
      ></Image>
    </div>
  );
};

export default Loader;
