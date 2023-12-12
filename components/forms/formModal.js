import SignupForm from "@/components/forms/signupForm";
import LoginForm from "@/components/forms/loginForm";
import AddFundraiserForm from "@/components/forms/addFundraiserForm";
import Button from "@/components/ui/Button";
import classes from "@/components/forms/formModal.module.css";

const FormModal = ({ formType, closeModal }) => {
  // Render different forms based on formType prop
  let formComponent;
  let formTitle;

  switch (formType) {
    case "signup":
      formComponent = <div><LoginForm closeModal={closeModal} /></div>;
      formTitle = "Log In"
      break;
    case "login":
      formComponent = <LoginForm closeModal={closeModal} />;
      formTitle = "Log In"
      break;
    case "addFundraiser":
      formComponent = <AddFundraiserForm closeModal={closeModal} />;
      formTitle = "Add Fundraiser"
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
