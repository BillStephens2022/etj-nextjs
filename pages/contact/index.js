import Header from "@/components/layout/header";
import Button from "@/components/ui/Button";
import classes from "@/pages/contact/contact.module.css";
import Link from "next/link";
import { FaSquareFacebook, FaEnvelope } from "react-icons/fa6";
import { FaRegHandPointLeft } from "react-icons/fa";

function Contact() {
  return (
    <>
      <Header pageTitle="Contact US" />

      <main class={classes.main}>
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
          <form className={classes.form}>
            <div className={classes.form_group}>
              <label className={classes.label} htmlFor="name">
                From:
              </label>
              <input
                className={classes.input}
                type="text"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className={classes.form_group}>
              <label className={classes.label} htmlFor="message">
                Message:
              </label>
              <textarea
                className={classes.textarea}
                rows="10"
                type="text"
                id="name"
                placeholder="Your Message"
              />
            </div>
            <Button
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
