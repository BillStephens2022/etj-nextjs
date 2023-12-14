import Header from "@/components/layout/header";
import Button from "@/components/ui/Button";
import classes from "@/pages/contact/contact.module.css";

function Contact() {
    return (
        <>
        <Header pageTitle="Contact US" />
        <main class={classes.main}>
            <h3 className={classes.note_heading}>Drop Us a Note!</h3>
            <form className={classes.form}>
                <div className={classes.form_group}>
                    <label className={classes.label} htmlFor="name">From:</label>
                    <input className={classes.input} type="text" id="name" placeholder="Your Name" />
                </div>
                <div className={classes.form_group}>
                    <label className={classes.label} htmlFor="message">Message:</label>
                    <textarea className={classes.textarea} rows="10" type="text" id="name" placeholder="Your Message" />
                </div>
                <Button className={classes.message_submit_button} margin="0 0 1rem 0">Submit</Button>
            </form>

        </main>
        </>
    )
}

export default Contact;