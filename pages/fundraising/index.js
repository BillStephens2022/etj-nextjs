import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import Header from "@/components/layout/header";
import classes from "@/pages/fundraising/fundraising.module.css";

const Fundraising = ({props}) => {
  const { data: session } = useSession();
  const [fundraisers, setFundraisers] = useState(props?.fundraisers || []);
  const { data, error } = useSWR("/api/fundraiser/", (url) => fetch(url).then(res => res.json()), { refreshInterval: 1000 });
  
  useEffect(() => {
    if (error) {
      console.error("Error fetching fundraisers:", error); 
    }
    if (data) {
      const sortedFundraisers = data.sort(
        (a, b) => new Date(b.fundraiserDate) - new Date(a.fundraiserDate)
      );
      setFundraisers(sortedFundraisers);
    }
  }, [data, error]);

  if (error) {
    return <p>{error}</p>
  }

  if (!data) {
    return <p>Loading...</p>
  }


    return (
        <>
          <Header pageTitle="Fundraising"></Header>
          <div className={classes.fundraisers_div}>
          {fundraisers.map((fundraiser) => (
            <div className={classes.card} key={fundraiser._id}>
              <div className={classes.card_inner_wrapper}>
                <div className={classes.banner_image} style={{ backgroundImage: `url(${fundraiser.imageLink})` }}> </div>
                <div className={classes.card_header}>
                  <h3 className={classes.fundraiser_title}>{fundraiser.title}</h3>
                  <h4 className={classes.fundraiser_aired}>
                    Aired: {fundraiser.fundraiserDate}
                  </h4>
                </div>
                <div className={classes.card_main}>
                  <div className={classes.fundraiser_details}>
                    <p className={classes.fundraiser_detail}>
                      {fundraiser.description}
                    </p>
                  </div>
                </div>
               
                  <footer className={classes.cardFooter}>
                  
                  </footer>

          

              </div>
          
        
            </div>
          ))}
        </div>
        </>
    );
}

export async function getStaticProps() {
  let fundraisers = [];

  try {
    const fundraisersJSON = await getFundraisers();
    fundraisers = fundraisersJSON.sort((a, b) => new Date(b.fundraiserDate) - new Date(a.fundraiserDate));
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