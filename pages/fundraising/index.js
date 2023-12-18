import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getFundraisers } from "@/lib/api";
import useSWR from "swr";
import Header from "@/components/layout/header";
import FundraiserCard2 from "@/components/layout/fundraiserCard2";
import Button from "@/components/ui/Button";
import Loader from "@/components/layout/loader";
import classes from "@/pages/fundraising/fundraising.module.css";

const Fundraising = ({ props }) => {
  const { data: session } = useSession();
  const [fundraisers, setFundraisers] = useState(props?.fundraisers || []);
  const { data, error } = useSWR(
    "/api/fundraiser/",
    (url) => fetch(url).then((res) => res.json()),
    { refreshInterval: 1000 }
  );


  useEffect(() => {
    if (error) {
      console.error("Error fetching fundraisers:", error);
    }
    if (data) {
      const sortedFundraisers = data.sort(
        (a, b) => new Date(b.fundraiserDate) - new Date(a.fundraiserDate)
      );
      console.log(sortedFundraisers);
      setFundraisers(sortedFundraisers);
    }
  }, [data, error]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return (
      <>
        <Header />
        <Loader />
      </>
    );
  }

  return (
    <>
      <Header pageTitle="Fundraising"></Header>

      <div className={classes.main}>
        <Button
          backgroundImage="var(--linear-gradient-red"
          href="https://www.mightycause.com/story/Iasxuf"
        >
          Donate
        </Button>
        <div className={classes.fundraisers_div}>
          {fundraisers.map((fundraiser) => (
            <FundraiserCard2
              key={fundraiser._id}
              fundraisers={fundraisers}
              fundraiser={fundraiser}
              session={session}
              setFundraisers={setFundraisers}
            />
          ))}
          {/* {fundraisers.length > 0 ? (
            <FundraiserCard fundraiser={fundraisers[0]} session={session} setFundraisers={setFundraisers} />
          ) : (
            <p>No fundraisers available</p> // Handle the case when there are no fundraisers
          )} */}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  let fundraisers = [];

  try {
    const fundraisersJSON = await getFundraisers();
    fundraisers = fundraisersJSON.sort(
      (a, b) => new Date(b.fundraiserDate) - new Date(a.fundraiserDate)
    );
  } catch (error) {
    console.error(error.message);
  }

  return {
    props: {
      fundraisers,
    },
    revalidate: 1200, // Re-generate page every 1200 seconds (20 minutes)
  };
}

export default Fundraising;
