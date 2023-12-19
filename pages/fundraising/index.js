import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { getFundraisers } from "@/lib/api";
import Header from "@/components/layout/header";
import FundraiserCard from "@/components/layout/fundraiserCard";
import Button from "@/components/ui/Button";
import Loader from "@/components/layout/loader";
import classes from "@/pages/fundraising/fundraising.module.css";

const Fundraising = ({ fundraisers }) => {
  const { data: session } = useSession();
  const [localFundraisers, setLocalFundraisers] = useState(fundraisers || []);

  const { data: updatedFundraisers, error } = useSWR("/api/fundraiser/", getFundraisers, {
    refreshInterval: 1000,
  });

  useEffect(() => {
    if (updatedFundraisers) {
      const sortedFundraisers = updatedFundraisers.sort(
        (a, b) => new Date(b.fundraiserDate) - new Date(a.fundraiserDate)
      );
      setLocalFundraisers(sortedFundraisers);
    }
  }, [updatedFundraisers]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!updatedFundraisers) {
    return (
      <>
        <Header pageTitle="Fundraising" />
        <Loader />
      </>
    );
  }

  return (
    <>
      <Header pageTitle="Fundraising"></Header>

      <div className={classes.main}>
        <Button
          backgroundImage="var(--linear-gradient-red)"
          href="https://www.mightycause.com/story/Iasxuf"
        >
          Donate
        </Button>
        <div className={classes.fundraisers_div}>
          {localFundraisers.map((fundraiser) => (
            <FundraiserCard
              key={fundraiser._id}
              fundraisers={localFundraisers}
              fundraiser={fundraiser}
              session={session}
              setFundraisers={setLocalFundraisers}
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
  console.log("executing getStaticProps for fundraisers!");
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
