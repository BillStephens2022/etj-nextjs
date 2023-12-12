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
      <main className={classes.main}>
      <Button margin="1rem" backgroundImage="var(--linear-gradient-red)" href="https://www.mightycause.com/story/Iasxuf">Donate</Button>
        <Header>ETJ</Header>
        {/* <div className={classes.background_image_container}></div> */}
        <div className={classes.logo_container}>
          <Image
            src={logo}
            alt="logo"
            width={300}
            height={208}
            placeholder="blur"
            style={{objectFit: "contain"}}
            className={classes.logo}
          />
        </div>
        
      </main>
    </>
  );
};

export default Home;
