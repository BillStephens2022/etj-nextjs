import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { FaPlus } from "react-icons/fa6";
import { GiCrossedSwords } from "react-icons/gi";
import Header from "@/components/layout/header";
import Button from "@/components/ui/Button";
import FormModal from "@/components/forms/formModal";
import classes from "@/pages/admin/admin.module.css";

const Admin = () => {
  const { data: session } = useSession();
  // state for whether modal is open or closed
  const [modalOpen, setModalOpen] = useState(false);
  // state to set the form type to tell the modal which form to display
  const [formType, setFormType] = useState("");

  // Use useEffect to handle changes to the session object
  useEffect(() => {
    if (!session) {
      console.log("SESSION: ", session);
      setModalOpen(true);
      setFormType("signup");
    }
  }, [session]);

  const openModal = (type) => {
    console.log("Opening modal...");
    setModalOpen(true);
    setFormType(type);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const logoutHandler = () => {
    signOut();
  };

  return (
    <>
      <Header pageTitle="Admin Page" />
      <div>
       {session ?
        <h3 className={classes.welcome_header}>
          Welcome,{" "}
          <span className={classes.welcome_header_span}>
           {session?.user.username}
          </span>
          <GiCrossedSwords />
        </h3>
        :
        <h3 className={classes.not_logged_in}>You are not logged in. Please log in to access features on this page.</h3>
       }
      </div>
      {session && (
      <div className={classes.button_div}>
      
        <Button minWidth="10rem" margin="0 0.5 0 0rem" onClick={() => openModal("addFundraiser")}>
          <FaPlus /> Fundraiser
        </Button>
        <Button
            backgroundImage="var(--linear-gradient-red)"
            margin="0 0 0 0.5rem"
            onClick={() => openModal("signup")}
          >
            <FaPlus /> New Admin User
          </Button>
          <Button
            backgroundImage="var(--linear-gradient-red)"
            margin="0 0 0 0.5rem"
            onClick={logoutHandler}
          >
            Log Off
          </Button>
        
      </div>
      )}
      <main className={classes.main}></main>
      {modalOpen && <FormModal closeModal={closeModal} formType={formType} />}
    </>
  );
};

export default Admin;
