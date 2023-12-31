import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/router";
import Image from "next/image";
import { editFundraiser, createFundraiser } from "@/lib/api";
import Button from "@/components/ui/Button";
import classes from "@/components/forms/addFundraiser.module.css";
import "react-datepicker/dist/react-datepicker.css";

const initialFormData = {
  title: "",
  description: "",
  fundraiserDate: "",
  imageLink: "",
};

const AddFundraiserForm = ({ closeModal, selectedFundraiser = null }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const router = useRouter(); // Initialize the useRouter hook
  useEffect(() => {
    if (selectedFundraiser) {
      // Populate form fields with selectedFundraiser data if available
      setFormData({
        title: selectedFundraiser.title || "",
        description: selectedFundraiser.description || "",
        imageLink: selectedFundraiser.imageLink || "", // Leave imageLink empty for user input
        fundraiserDate: selectedFundraiser.fundraiserDate || "",
      });
    }
  }, [selectedFundraiser]);

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
    if (selectedFundraiser) {
      // Call editFundraiser if a selectedFundraiser was passed into the modal (this would only occur if user chose to edit an exising episode)
      await editFundraiser(selectedFundraiser._id, formData);
    } else {
      // Call createFundraiser if no selectedFundraiser is available
      await createFundraiser(formData);
      router.push("/fundraising"); // Redirect to the Fundraising Page after creating a fundraiser
    }

    closeModal();
  };

  return (
    <>
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
                formData.fundraiserDate
                  ? new Date(formData.fundraiserDate)
                  : null
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
            <div className={classes.upload_and_preview}>
              {uploadedImageUrl && (
                <div className={classes.imagePreview_div}>
                  <label htmlFor="imageLink" className={classes.label}>
                    Fundraiser Image Preview
                  </label>
                  <div className={classes.imagePreview}>
                    <Image
                      src={uploadedImageUrl}
                      layout="responsive" // Retains aspect ratio and resizes based on container
                      width={125} 
                      height={75}
                      alt="Uploaded Fundraiser Image"
                    />
                  </div>
                </div>
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
            <Button type="submit" margin="0.5rem 0 0.5rem 0">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddFundraiserForm;
