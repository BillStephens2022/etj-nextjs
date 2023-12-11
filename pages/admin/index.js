import Header from "@/components/layout/header";
import Button from "@/components/ui/Button";
import classes from "@/pages/admin/admin.module.css";

const Admin = () => {
  return (
    <>
      <Header pageTitle="Admin Page" />
      <div className={classes.button_div}>
        <Button minWidth="10rem">Add New Fundraiser</Button>
      </div>
    </>
  );
};

export default Admin;
