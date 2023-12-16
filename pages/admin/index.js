import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import useSWR from "swr";
import { FaUserPlus } from "react-icons/fa6";
import { GiCrossedSwords } from "react-icons/gi";
import { MdLogout, MdLockReset, MdOutlineAttachMoney } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import { formatDate } from "@/lib/util";
import Header from "@/components/layout/header";
import Loader from "@/components/layout/loader";
import Button from "@/components/ui/Button";
import FormModal from "@/components/forms/formModal";
import classes from "@/pages/admin/admin.module.css";
import IconButton from "@/components/ui/iconButton";

const Admin = () => {
  const { data: session } = useSession();
  // state for whether modal is open or closed
  const [modalOpen, setModalOpen] = useState(false);
  // state to set the form type to tell the modal which form to display
  const [formType, setFormType] = useState("");
  const [messages, setMessages] = useState([]);

  const { data, error } = useSWR(
    "/api/messages/",
    (url) => fetch(url).then((res) => res.json()),
    { refreshInterval: 1000 }
  );

    // Use useEffect to handle changes to the session object
    useEffect(() => {
      if (!session) {
        console.log("SESSION: ", session);
        setModalOpen(true);
        setFormType("login");
      }
    }, [session]);


  useEffect(() => {
    if (error) {
      console.error("Error fetching messages:", error);
    }
    if (data) {
      console.log(data);
      const sortedMessages = data.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      console.log(sortedMessages);
      setMessages(sortedMessages);
    }
  }, [data, error]);

  
  
  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return (
      <>
        <Header />
        <Loader />
      </>
    );
  }

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
      <main className={classes.main}>
      <h3 className={classes.message_center_header}>Message Center</h3>
      <div className={classes.messages_div}>
  <table className={classes.messages_table}>
    <thead>
      <tr className={classes.message_table_row}>
        <th className={classes.table_col_header}>Date</th>
        <th className={classes.table_col_header}>From</th>
        <th className={classes.table_col_header}>Message</th>
        <th className={classes.table_col_header}><FaTrashCan /></th>
      </tr>
    </thead>
    <tbody>
      {messages.map((message) => (
        <tr key={message._id} className={classes.message_table_row}>
          <td className={classes.message_date}>{formatDate(message.date)}</td>
          <td className={classes.message_name}>{message.name}</td>
          <td className={classes.message_text}>{message.messageText}</td>
          <td className={classes.message_delete_icon}><IconButton className={classes.message_delete_icon}><FaTrashCan /></IconButton></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      </main>
      {modalOpen && <FormModal closeModal={closeModal} formType={formType} />}
    </>
  );
};

export default Admin;
