import Link from "next/link";
import Image from "next/image";
import { FaRegHandPointRight } from "react-icons/fa";
import Header from "@/components/layout/header";
import PhotoSlider from "@/components/layout/photoSlider";
import chris from "@/public/images/chris.jpg";
import hkphooey from "@/public/images/hkphooey.png";
import panda from "@/public/images/panda.png";
import classes from "@/pages/about/about.module.css";

const About = () => {
 
  return (
    <>
      <Header pageTitle="About Us"></Header> 
      <div className={classes.slider_div}> 
      <PhotoSlider />   
      </div> 
      <div className={classes.about_container}>
        <div className={classes.about_item}>
          <h3 className={classes.about_title}>Our Story</h3>
          <p className={classes.about_p}>
            In 2017 the Kumdo @ KIPP program began at The KIPP Cooper Norcross
            Academy in Camden, NJ. This program provides free training in the
            very exclusive martial art of Kumdo (more commonly known as Kendo)
            to KIP&apos;s young Lanning Square Middle School students. This
            program had been heralded in publications such as The Philadelphia
            Inquirer. <br />
            See article here:&nbsp;&nbsp;
            <FaRegHandPointRight />
            &nbsp;&nbsp;&nbsp;
            <Link
              className={classes.link}
              href="https://www.philly.com/philly/news/new_jersey/its-called-the-golf-of-martial-arts-but-this-camden-school-is-making-kumdo-more-inclusive-20180331.html"
            >
              It&apos;s Called the Golf of Martial Arts
            </Link>
          </p>
          <p className={classes.about_p}>
            The first year of the program was a great success and was
            subsequently expanded at the request of the KIPP Academy to include
            primary students. It was soon identified that graduating KIPP
            Lanning Square Middle School scholars would no longer have the
            ability to train in Kumdo under the Kumdo @ KIPP program. It was
            also identified that in order to provide the fullest Kumdo training
            experience to Kumdo @ KIPP students, said students would need to
            train at greater frequencies and at the SYK Sword Academy of Cherry
            Hill, NJ.{" "}
          </p>{" "}
          <p className={classes.about_p}>
            This led to the genesis of this Not For Profit—Enter The Johnsons.
            Enter The Johnsons (ETJ) raises funds to financially sponsor Kumdo
            training for Kumdo @ KIPP Program students and alumni. Eventually,
            ETJ will provide other historically challenged youth in the Delaware
            Valley Region, primarily of The City of Camden, that are not Kumdo @
            KIPP Program alumni, the funding and support to train in some type
            of quality martial art. ETJ will continue the important work that
            was started.
          </p>
        </div>
        <div className={classes.about_item}>
          <h3 className={classes.about_title}>Our Team</h3>
          <div className={classes.member_info}>
            <div className={classes.member_summary}>
              <Image
                src={chris}
                alt="Chris Johnson"
                width={200}
                placeholder="blur"
                style={{ objectFit: "contain" }}
                className={classes.member_img}
              />
              <h4 className={classes.member_name_heading}>Chris T. Johnson</h4>
              <h5 className={classes.member_job_title}>Founder</h5>
            </div>

            <p className={classes.member_details}>
              Christopher Thomas Johnson (CJ) was born in Brooklyn, NY to Pastor
              Thomas and Barbara Johnson. He was raised in Glen Rock, New
              Jersey. <br />
              <br />
              CJ received his Bachelor of Arts in Political Science from Hampton
              University, Hampton VA in 1992. Upon graduating from Hampton
              University, CJ was commissioned into the United States Navy as a
              Deep Sea Diver and Salvage Officer. Among numerous Naval Diving
              Operations, CJ was a Navy Deep Sea Diver for the TWA FLIGHT 800
              CRASH RECOVERY; OPERATION RESTORE DIGNITY – the 1997 Haitian Ferry
              Recovery; and the famed Civil War Ship - USS MONITOR SALVAGE
              OPERATION. <br />
              <br />
              CJ received a Master of Government Administration from the
              University of Pennsylvania, Fels Center of Government in 2002 and
              was awarded the Fels Leadership Award. He was honorably discharged
              from the U.S. Navy as a Lieutenant Commander in September of 2002
              after serving as the Executive Officer of Naval Reserve Center,
              Fort Dix. In the private sector, CJ was the Director of Government
              Affairs & Contracts for MAR-VEL International, Inc. from
              2002-2009. There he was responsible for numerous
              multimillion-dollar contracts and programs. <br />
              <br />
              In 2013, he earned his Master of Divinity from Palmer Theological
              Seminary. He was the Pastoral Minister for Covenant House Atlantic
              City (South Jersey) from 2013-2015. Covenant House is the largest
              privately funded agency in the Americas providing shelter, food,
              immediate crisis care, and an array of other services to homeless
              and runaway youth. <br />
              <br /> CJ has earned his 2nd Degree Black Belt in Traditional
              Okinawan GOJU RYU Karate (while in Okinawa, Japan), a blue belt in
              Brazilian Jiu Jitsu and a 1st Degree Black Belt in Kumdo. CJ, his
              wonderful wife and children are members of Grace Temple Baptist
              Church of Lawnside, New Jersey where he is an ordained minister.
            </p>
          </div>
          <div className={classes.member_info}>
            <div className={classes.member_summary}>
              <Image
                src={hkphooey}
                alt="Obadiah"
                width={300}
                placeholder="blur"
                style={{ objectFit: "contain" }}
                className={classes.member_img}
              />
              <h4 className={classes.member_name_heading}>
                Obadiah Schottenfeld
              </h4>
              <h5 className={classes.member_job_title}>Vice President</h5>
            </div>

            <p className={classes.member_details}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Habitasse platea dictumst vestibulum rhoncus est pellentesque.
              Diam volutpat commodo sed egestas egestas fringilla phasellus
              faucibus. <br />
              <br />
              At in tellus integer feugiat scelerisque. Sollicitudin nibh sit
              amet commodo nulla facilisi nullam vehicula ipsum. Quam lacus
              suspendisse faucibus interdum posuere lorem ipsum dolor. Semper
              feugiat nibh sed pulvinar. Odio aenean sed adipiscing diam donec
              adipiscing tristique.
            </p>
          </div>
          <div className={classes.member_info}>
            <div className={classes.member_summary}>
              <Image
                src={panda}
                alt="Abraham"
                width={200}
                placeholder="blur"
                style={{ objectFit: "contain" }}
                className={classes.member_img}
              />
              <h4 className={classes.member_name_heading}>Abraham Summers</h4>
              <h5 className={classes.member_job_title}>Treasurer</h5>
            </div>

            <p className={classes.member_details}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consectetur adipiscing elit duis tristique sollicitudin nibh sit
              amet. Non quam lacus suspendisse faucibus. Sapien et ligula
              ullamcorper malesuada proin libero nunc consequat interdum. Augue
              ut lectus arcu bibendum at varius. <br /> <br />
              Bibendum arcu vitae elementum curabitur. Nam at lectus urna duis
              convallis convallis. Massa id neque aliquam vestibulum morbi
              blandit cursus. Pellentesque pulvinar pellentesque habitant morbi
              tristique senectus et netus et. Suspendisse interdum consectetur
              libero id. Non consectetur a erat nam at lectus urna duis.
            </p>
          </div>
        </div>
      </div>
      <main className={classes.main}></main>
    </>
  );
};

export default About;
