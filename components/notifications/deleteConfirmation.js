import classes from "@/components/notifications/deleteConfirmations.module.css";

const DeleteConfirmation = ({ itemToBeDeleted, onClick1, onClick2, id }) => {

    return (
        <>
            <div className={classes.delete_notification}>
                <p>Are you sure you want to delete this {itemToBeDeleted}?</p>
                <button onClick={() => onClick1(id)}>Yes</button>
                <button onClick={() => onClick2(id)}>No</button>
            </div>
        </>
    )
}

export default DeleteConfirmation;