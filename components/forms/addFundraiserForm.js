import { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import { CldUploadWidget } from "next-cloudinary";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@/components/ui/Button";
import classes from "@/components/forms/addFundraiser.module.css";

const initialFormData = {
  title: "",
  description: "",
  fundraiserDate: "",
  imageLink: "",
};



const createFundraiser = async (formData) => {
  const response = await fetch("/api/fundraiser", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log("Fundraiser created successfully: ", data);
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  return data;
};

const AddFundRaiserForm = ({ closeModal }) => {
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
    await createFundraiser(formData);
    closeModal();
  };

  return (
    <Fragment>
      <div className={classes.form_container}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.form_group}>
            <label htmlFor="fundraiserDate" className={classes.label}>
              Fundraiser Date
            </label>
            <DatePicker
              className={classes.datePicker}
              id="fundraiserDate"
              name="fundraiserDate"
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
              margin="0.5rem 0 0.5rem 0"
            >Submit</Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default AddFundRaiserForm;
