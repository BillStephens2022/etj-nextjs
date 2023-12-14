import { FaTrashCan, FaPencil } from "react-icons/fa6";
import Button from "../ui/Button";
import IconButton from "../ui/iconButton";
import classes from "@/components/layout/fundraiserCard.module.css";

const FundraiserCard = ({ fundraiser, session }) => {
  const handleDeleteClick = () => {
    console.log("delete fundraiser clicked!");
  };

  const handleEditClick = () => {
    console.log("edit fundraiser clicked!");
  };

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
          </div>
          <div className={classes.card_main}>
            <div className={classes.fundraiser_details}>
              <p className={classes.fundraiser_detail}>
                {fundraiser.description}
              </p>
            </div>
          </div>

          <footer className={classes.cardFooter}>
            <Button
              backgroundImage="var(--linear-gradient-red)"
              href="https://www.mightycause.com/story/Iasxuf"
            >
              Donate
            </Button>
           
          </footer>
          {session && (
          <div className={classes.icon_button_div}>
              <IconButton
                className={classes.delete_button}
                onClick={handleDeleteClick}
              >
                <FaTrashCan />
              </IconButton>
              <IconButton className={classes.edit_button}
                onClick={handleEditClick}>
                <FaPencil />
              </IconButton>
            </div>
            )}
        </div>
      </div>
    </>
  );
};

export default FundraiserCard;
