import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { FaPlus, FaUserPlus } from "react-icons/fa6";
import { GiCrossedSwords } from "react-icons/gi";
import { MdLogout, MdLockReset, MdOutlineAttachMoney } from "react-icons/md";
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
      setFormType("login");
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
      <div className={classes.welcome_div}>
        {session ? (
          <h3 className={classes.welcome_header}>
            Welcome,{" "}
            <span className={classes.welcome_header_span}>
              {session?.user.username}
            </span>
            <GiCrossedSwords />
          </h3>
        ) : (
          <h3 className={classes.not_logged_in}>
            You are not logged in. Please log in to access features on this
            page.
          </h3>
        )}
      </div>
      {session && (
        <div className={classes.main_container}>
          <h2 className={classes.functions_header}>Admin Functions</h2>
          <table className={classes.table}>
            <thead>
              {/* <tr>
                <th>Admin Functions:</th>
                <th>Buttons</th>
              </tr> */}
            </thead>
            <tbody>
              <tr className={classes.table_row}>
                <td className={classes.table_data}>Add A New Fundraiser</td>
                <td className={classes.table_data}>
                  <Button onClick={() => openModal("addFundraiser")}>
                    <MdOutlineAttachMoney />
                  </Button>
                </td>
              </tr>
              <tr className={classes.table_row}>
                <td className={classes.table_data}>Change Password</td>
                <td className={classes.table_data}>
                  <Button onClick={() => openModal("changePassword")}>
                    <MdLockReset />
                  </Button>
                </td>
              </tr>
              <tr className={classes.table_row}>
                <td className={classes.table_data}>Add A New Admin User</td>
                <td className={classes.table_data}>
                  <Button
                    onClick={() => openModal("signup")}
                  >
                    <FaUserPlus />
                  </Button>
                </td>
              </tr>
              <tr className={classes.table_row}>
                <td className={classes.table_data}>Logout</td>
                <td className={classes.table_data}>
                  <Button
                    backgroundImage="var(--linear-gradient-red)"
                    onClick={logoutHandler}
                  >
                    <MdLogout />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <main className={classes.main}></main>
      {modalOpen && <FormModal closeModal={closeModal} formType={formType} />}
    </>
  );
};

export default Admin;
