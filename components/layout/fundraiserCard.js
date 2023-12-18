import { useState } from "react";
import { FaTrashCan, FaPencil } from "react-icons/fa6";
import FormModal from "../forms/formModal";
import Button from "../ui/Button";
import IconButton from "../ui/iconButton";
import DeleteConfirmation from "../notifications/deleteConfirmation";
import { getFundraisers, deleteFundraiser } from "@/lib/api";
import classes from "@/components/layout/fundraiserCard.module.css";
import Image from "next/image";

const FundraiserCard = ({
  fundraisers,
  fundraiser,
  session,
  setFundraisers,
}) => {
  const [showConfirmation, setShowConfirmation] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    formType: "", // "addFundraiser" - will be pre-populated and editable with existing fundraiser data
    fundraiserData: null, // For storing fundraiser data in case of editing
  });

  const handleDeleteFundraiser = (fundraiserId) => {
    console.log("Are you sure you want to delete this ID? ", fundraiserId);
    setShowConfirmation(fundraiserId); // Set the confirmation state to the ID of the fundraiser to be deleted
  };

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
  };

  const cancelDeleteFundraiser = () => {
    setShowConfirmation(null); // Reset confirmation without deleting
  };

  const openModal = (formType, selectedFundraiser) => {
    setModalOpen(true);
    console.log(
      "formType: ",
      formType,
      " selectedFundraiser: ",
      selectedFundraiser
    );
    setFormData((prevFormData) => ({
      ...prevFormData,
      formType: formType,
      fundraiserData: selectedFundraiser,
    }));
    console.log("FORM DATA: ", formData);
  };

  const closeModal = () => {
    setModalOpen(false);
    setFormData({ formType: "", fundraiserData: null }); // reset formData state when closing the modal
  };

  const handleEditModal = async (event, fundraiserId) => {
    event.preventDefault();
    const selectedFundraiser = fundraisers.find(
      (fundraiser) => fundraiser._id === fundraiserId
    );
    if (selectedFundraiser) {
      openModal("addFundraiser", selectedFundraiser);
    }
  };

  const imageStyle = {
    objectFit: "cover",
  };

  const isImage = (url) => {
    // Check if the URL ends with a common image extension
    return /\.(jpeg|jpg|gif|png)$/i.test(url);
  };

  const videoSources = {
    mp4: "video/mp4", // Example: MP4 format
    webm: "video/webm", // Example: WebM format
    mov: "video/mov",
  };

  const renderVideoSources = () => {
    return Object.keys(videoSources).map((format) => (
      <source
        key={format}
        src={`${fundraiser.imageLink}`}
        type={videoSources[format]}
      />
    ));
  };

  function generateThumbnailURL(url) {
    const parts = url.split("/");
    const fileWithExtension = parts[parts.length - 1]; // Get the last part of the URL
    const publicId = fileWithExtension.split(".")[0]; // Remove the extension
    const thumbnailUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/e_preview:duration_0/${publicId}.jpg`;
    return thumbnailUrl;
  }

  const posterUrl = generateThumbnailURL(fundraiser.imageLink);

  return (
    <>
      <div className={classes.card} key={fundraiser._id}>
        <div className={classes.card_header}>
          <h3 className={classes.fundraiser_title}>{fundraiser.title}</h3>
        </div>
        <div className={classes.card_inner_wrapper}>
          {isImage(fundraiser.imageLink) ? (
            <div className={classes.banner_image}>
              <Image
                src={fundraiser.imageLink}
                width={300}
                height={360}
                quality={100}
                style={imageStyle}
                alt="Fundraiser Image"
                priority
              />
            </div>
          ) : (
            <div className={classes.banner_image}>
              <video width={250} height={300} controls poster={posterUrl}>
                {renderVideoSources()}
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          <div className={classes.card_main}>
            <div className={classes.fundraiser_details}>
              <p className={classes.fundraiser_detail}>
                {fundraiser.description}
              </p>
            </div>
          </div>
        </div>
        <div className={classes.donate_button_div}>
          <Button
            backgroundImage="var(--linear-gradient-red)"
            href="https://www.mightycause.com/story/Iasxuf"
          >
            Donate
          </Button>
        </div>
        {session && (
          <footer className={classes.card_footer}>
            {showConfirmation === fundraiser._id && (
              <DeleteConfirmation
                itemToBeDeleted="fundraiser"
                onClick1={confirmDeleteFundraiser}
                onClick2={cancelDeleteFundraiser}
                id={fundraiser._id}
              />
            )}

            <div className={classes.icon_button_div}>
              <IconButton
                className={classes.delete_button}
                onClick={(event) => handleDeleteFundraiser(fundraiser._id)}
              >
                <FaTrashCan />
              </IconButton>
              <IconButton
                className={classes.edit_button}
                onClick={(event) => handleEditModal(event, fundraiser._id)}
              >
                <FaPencil />
              </IconButton>
            </div>
          </footer>
        )}
      </div>
      {modalOpen && (
        <FormModal
          closeModal={closeModal}
          formType={formData.formType}
          selectedFundraiser={formData.fundraiserData}
        />
      )}
    </>
  );
};

export default FundraiserCard;
