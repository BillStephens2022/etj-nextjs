import { useState } from "react";
import Header from "@/components/layout/header";
import Button from "@/components/ui/Button";
import classes from "@/pages/contact/contact.module.css";
import Link from "next/link";
import { createMessage } from "@/lib/api";
import { FaSquareFacebook, FaEnvelope } from "react-icons/fa6";
import { FaRegHandPointLeft } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    messageText: "",
  });
  // state to render a success message to the user if their message submission was successful
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createMessage(formData);
    setFormData({ name: "", messageText: "" });
    setSuccessMessage(true); // Set success message visibility to true after form submission
    setTimeout(() => {
      setSuccessMessage(false); // Hide success message after 3 seconds
    }, 3000);
  };

  return (
    <>
      <Header pageTitle="Contact Us" />

      <main className={classes.main}>
        <div className={classes.contact_info_div}>
          <div className={classes.fb_icon_div}>
            <Link
              href="https://www.facebook.com/EnterTheJohnsons"
              className={classes.fb_icon}
            >
              <FaSquareFacebook
                style={{
                  width: "25px",
                  height: "25px",
                  background: "white",
                  borderRadius: "5px",
                }}
              />

              <FaRegHandPointLeft
                style={{
                  marginLeft: "8px",
                  marginRight: "5px",
                  color: "white",
                }}
              />
              <p className={classes.fb_text}>Check out our Facebook Page</p>
            </Link>
          </div>
          <div className={classes.email_icon_div}>
            <FaEnvelope
              style={{ width: "25px", height: "25px", marginRight: "5px" }}
            />
            <p className={classes.email_text}>admin@enterthejohnsons.org</p>
          </div>
        </div>
        <div className={classes.form_div}>
          <h3 className={classes.note_heading}>Drop Us a Note!</h3>
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.form_group}>
              <label className={classes.label} htmlFor="name">
                From:
              </label>
              <input
                className={classes.input}
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={classes.form_group}>
              <label className={classes.label} htmlFor="message">
                Message:
              </label>
              <textarea
                className={classes.textarea}
                rows="10"
                text="text"
                id="message"
                name="messageText"
                placeholder="Your Message"
                value={formData.messageText}
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              className={classes.message_submit_button}
              margin="0 0 1rem 0"
            >
              Submit
            </Button>
            {successMessage && (
              <p className={classes.successMessage}>
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </main>
    </>
  );
}

export default Contact;
