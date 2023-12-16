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

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("form submitted: ", formData);
    await createMessage(formData);
  };

  return (
    <>
      <Header pageTitle="Contact US" />

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
            </Link>
            <FaRegHandPointLeft style={{ marginRight: "5px" }} />
            <p>Check out our Facebook Page</p>
          </div>
          <div className={classes.email_icon_div}>
              <FaEnvelope
                style={{ width: "25px", height: "25px", marginRight: "5px" }}
              />
              <p>admin@enterthejohnsons.org</p>
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
          </form>
        </div>
      </main>
    </>
  );
}

export default Contact;
