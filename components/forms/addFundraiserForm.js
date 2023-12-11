import { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import { CldUploadWidget } from "next-cloudinary";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@/components/buttons/button";
import classes from "@/components/forms/addFundraiser.module.css";

const initialFormData = {
  title: "",
  description: "",
  date: "",
  imageLink: "",
};

const AddFundRaiserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    // Convert the selected date to a string in the desired format (ISO string)
    const formattedDate = date.toISOString();
    setFormData((prevData) => ({
      ...prevData,
      fundraiserDate: formattedDate, // Update fundraiserDate in formData with the formatted date string
    }));
  };

  const handleImageUpload = (imageUrl) => {
    setUploadedImageUrl(imageUrl); // Update the uploaded image URL state
    setFormData((prevData) => ({
      ...prevData,
      imageLink: imageUrl, // Update imageLink field in formData
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("form submitted: ", formData);
    onSubmit(formData);
  };

  return (
    <Fragment>
      <div className={classes.form_container}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.form_group}>
            <label htmlFor="date" className={classes.label}>
              Fundraiser Date
            </label>
            <DatePicker
              className={classes.datePicker}
              id="date"
              placeholderText={"Fundraiser Date"}
              selected={
                formData.fundraiserDate ? new Date(formData.fundraiserDate) : null
              } // Parse the stored date string to a Date object for the DatePicker component
              onFocus={(e) => (e.target.readOnly = true)}
              disabledKeyboardNavigation
              onChange={(date) => handleDateChange(date)}
            />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="title" className={classes.label}>
              Fundraiser Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Fundraiser Title"
              className={classes.input}
              id="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="description" className={classes.label}>
              Fundraiser Description
            </label>
            <textarea
              rows={10}
              name="description"
              placeholder="Fundraiser Description"
              className={classes.textarea}
              id="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="imageLink" className={classes.label}>
              Fundraiser Image Preview
            </label>
            <div className={classes.upload_and_preview}>
              {uploadedImageUrl && (
                <img
                  src={uploadedImageUrl}
                  alt="Uploaded Fundraiser Image"
                  className={classes.imagePreview}
                />
              )}
              <CldUploadWidget
                uploadPreset="etj_nonprofit"
                onSuccess={(results) => {
                  const uploadedUrl = results.info.url;
                  handleImageUpload(uploadedUrl);
                }}
              >
                {({ open }) => {
                  return (
                    <button
                      className={classes.upload_button}
                      onClick={(e) => {
                        open();
                        e.preventDefault();
                      }}
                    >
                      Upload an Image
                    </button>
                  );
                }}
              </CldUploadWidget>
            </div>
          </div>
          <div className={classes.form_group}>
            <Button
              type="submit"
              text="Submit"
              margin="0.5rem 0 0.5rem 0"
            ></Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default AddFundRaiserForm;
