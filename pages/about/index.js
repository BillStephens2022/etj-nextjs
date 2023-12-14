import Header from "@/components/layout/header";
import Button from "@/components/ui/Button";
import classes from "@/pages/about/about.module.css";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Header pageTitle="About Us"></Header>
      <div className={classes.about_nav}>
        <div className={classes.about_nav_item}>
          <h3 className={classes.about_title}>Our Story</h3>
          <p className={classes.about_p}>
            In 2017 the Kumdo @ KIPP program began at The KIPP Cooper Norcross
            Academy in Camden, NJ. This program provides free training in the
            very exclusive martial art of Kumdo (more commonly known as Kendo)
            to KIP&apos;s young Lanning Square Middle School students. This program
            had been heralded in publications such as The Philadelphia Inquirer:&nbsp;&nbsp;&nbsp;
              <Link href="https://www.philly.com/philly/news/new_jersey/its-called-the-golf-of-martial-arts-but-this-camden-school-is-making-kumdo-more-inclusive-20180331.html">It's Called the Golf of Martial Arts</Link>
          
            
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
        <div className={classes.about_nav_item}>
          <h3 className={classes.about_title}>Our Team</h3>
        </div>
      </div>
      <main className={classes.main}></main>
    </>
  );
};

export default About;
