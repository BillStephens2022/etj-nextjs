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
      <main className={classes.main}>
        <h3 className={classes.main_heading}>
          Martial arts and mentoring for our kids who need it most.
        </h3>
        <p className={classes.main_p}>We&#39;re a 501c3 - EIN: 83-2454419</p>

        <div className={classes.main_container}>
          <div className={classes.row}>
            <div className={classes.box}>
              <h4 className={classes.box_header}>Our Vision</h4>
              <p className={classes.box_p}>
                To be an effective Martial Art benefactor by providing quality
                Martial Arts training for youth that are historically challenged
                by ethnicity, financial means and demography within the Delaware
                Valley Region and beyond.
              </p>
            </div>
            <div className={classes.box}>
              <h4 className={classes.box_header}>Fundraising</h4>
              <p className={classes.box_p}>
                ETJ has partnered with Mightycause to provided funding for this
                unique initiative. Please help us.
              </p>
              <p className={classes.box_p_support}>Support us today!</p>
              <div className={classes.donate_button_div}>
                <Button
                  backgroundImage="var(--linear-gradient-red)"
                  href="https://www.mightycause.com/story/Iasxuf"
                  className={classes.donate_button}
                >
                  Donate
                </Button>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.box}>
              <h4 className={classes.box_header}>Events</h4>
            </div>
            <div className={classes.box}>
              <h4 className={classes.box_header}>Get Involved</h4>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
