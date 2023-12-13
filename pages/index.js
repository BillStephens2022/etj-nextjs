import Head from "next/head";
import Image from "next/image";
import logo from "../public/images/logo2.png";
import classes from "@/styles/Home.module.css";
import Header from "@/components/layout/header";
import Button from "@/components/ui/Button";

const Home = () => {
  return (
    <>
      <Head>
        <title>ETJ</title>
        <meta name="description" content="ETJ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.logo_container}>
        <Image
          src={logo}
          alt="logo"
          width={300}
          height={208}
          placeholder="blur"
          style={{ objectFit: "contain" }}
          className={classes.logo}
        />
      </div>
      <Header>ETJ</Header>
      {/* <div className={classes.background_image_container}></div> */}
      <div className={classes.donate_button_div}>
        <Button
          backgroundImage="var(--linear-gradient-red)"
          href="https://www.mightycause.com/story/Iasxuf"
          className={classes.donate_button}
        >
          Donate
        </Button>
      </div>
      <main className={classes.main}></main>
    </>
  );
};

export default Home;
