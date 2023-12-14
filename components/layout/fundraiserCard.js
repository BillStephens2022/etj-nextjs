import { useState } from "react";
import { FaTrashCan, FaPencil } from "react-icons/fa6";
import Button from "../ui/Button";
import IconButton from "../ui/iconButton";
import DeleteConfirmation from "../notifications/deleteConfirmation";
import { getFundraisers, deleteFundraiser, editFundraiser } from "@/lib/api";
import classes from "@/components/layout/fundraiserCard.module.css";

const FundraiserCard = ({ fundraiser, session, setFundraisers }) => {
  const [showConfirmation, setShowConfirmation] = useState(null);

  const handleDeleteFundraiser = (fundraiserId) => {
    console.log("Are you sure you want to delete this ID? ", fundraiserId);
    setShowConfirmation(fundraiserId);  // Set the confirmation state to the ID of the fundraiser to be deleted
  }

  const confirmDeleteFundraiser = async (fundraiserId) => {

    try {
      const success = await deleteFundraiser(fundraiserId);
      if (success) {
        const updatedFundraisers = await getFundraisers();
        const sortedFundraisers = updatedFundraisers.sort(
          (a, b) => new Date(b.fundraiserDate) - new Date(a.fundraiserDate)
        );
        setFundraisers(sortedFundraisers);
      } else {
        console.error("Error deleting fundraiser");
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  const cancelDeleteFundraiser = () => {
    setShowConfirmation(null); // Reset confirmation without deleting
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
          {showConfirmation === fundraiser._id && (
                <DeleteConfirmation itemToBeDeleted="fundraiser" onClick1={confirmDeleteFundraiser} onClick2={cancelDeleteFundraiser} id={fundraiser._id} />
              )}
          {session && (
          <div className={classes.icon_button_div}>
              <IconButton
                className={classes.delete_button}
                onClick={(event) =>
                  handleDeleteFundraiser(fundraiser._id)}
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
