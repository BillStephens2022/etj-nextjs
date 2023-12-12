import classes from "@/components/layout/fundraiserCard.module.css";
import Button from "../ui/Button";

const FundraiserCard = ({ fundraiser }) => {
  return (
    <>
      <div className={classes.card} key={fundraiser._id}>
        <div className={classes.card_inner_wrapper}>
          <div
            className={classes.banner_image}
            style={{ backgroundImage: `url(${fundraiser.imageLink})` }}
          >
            {" "}
          </div>
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

          <footer className={classes.cardFooter}><Button backgroundImage="var(--linear-gradient-red)"  href="https://www.mightycause.com/story/Iasxuf">Donate</Button></footer>
        </div>
      </div>
    </>
  );
};

export default FundraiserCard;
