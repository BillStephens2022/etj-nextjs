import { useRef, useEffect } from "react";
import classes from "@/components/layout/imageModal.module.css";

const ImageModal = ({ imageUrl, onClose }) => {
    const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

    return (
      <div className={classes.image_modal} onClick={onClose}>
        <div ref={modalRef} className={classes.image_content}>
          <img src={imageUrl} alt="full-size Image" className={classes.modal_image} />
        </div>
      </div>
    );
  };
  
  export default ImageModal;