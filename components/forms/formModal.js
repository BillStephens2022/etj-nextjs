import SignupForm from "@/components/forms/signupForm";
import LoginForm from "@/components/forms/loginForm";
import ChangePasswordForm from "./changePasswordForm";
import AddFundraiserForm from "@/components/forms/addFundraiserForm";
import Button from "@/components/ui/Button";
import classes from "@/components/forms/formModal.module.css";

const FormModal = ({ formType, closeModal, selectedFundraiser }) => {
  // Render different forms based on formType prop
  let formComponent;
  let formTitle;

  switch (formType) {
    case "signup":
      formComponent = <div><SignupForm closeModal={closeModal} /></div>;
      formTitle = "Sign Up"
      break;
    case "login":
      formComponent = <LoginForm closeModal={closeModal} />;
      formTitle = "Log In"
      break;
    case "changePassword":
        formComponent = <ChangePasswordForm closeModal={closeModal} />;
        formTitle = "Change Password"
    break;  
    case "addFundraiser":
      console.log("Switch statement: selectedFundraiser");
      formComponent = <AddFundraiserForm closeModal={closeModal} selectedFundraiser={selectedFundraiser} />;
      formTitle = selectedFundraiser ? "Edit Fundraiser" : "Add Fundraiser"
      break;
    default:
      formComponent = null;
  }

  return (
    <div className={classes.modal}>
      <div className={classes.modal_content}>
        <div className={classes.modal_header}>
          <h5 className={classes.modal_header}>{formTitle}</h5>
          <button
            type="button"
            onClick={closeModal}
            className={`${classes.buttonPosition} ${
              closeModal ? classes.modalOpen : ""
            }`}
          >
            {" "}
            x
          </button>
        </div>
        <div className={classes.form}>{formComponent}</div>
        <div className={classes.modal_footer}>
          <Button
            backgroundColor="darkgray"
            type="button"
            zIndex="4004"
            color="white"
            onClick={closeModal}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
