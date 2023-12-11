import { useState } from "react";
import Header from "@/components/layout/header";
import Button from "@/components/ui/Button";
import FormModal from "@/components/forms/formModal";
import AddFundraiserForm from "@/components/forms/addFundraiserForm";
import classes from "@/pages/admin/admin.module.css";

const Admin = () => {
  // state for whether modal is open or closed
  const [modalOpen, setModalOpen] = useState(false);
  // state to set the form type to tell the modal which form to display
  const [formType, setFormType] = useState("");

  const handleAddFundraiser = () => {};

  const openModal = (type) => {
    console.log("Opening modal...");
    setModalOpen(true);
    setFormType(type);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Header pageTitle="Admin Page" />
      <div className={classes.button_div}>
        <Button minWidth="10rem" onClick={() => openModal("addFundraiser")}>
          Add New Fundraiser
        </Button>
      </div>

      {modalOpen && <FormModal closeModal={closeModal} formType={formType} />}
    </>
  );
};

export default Admin;
