import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Notes = () => {
    return (
        <div className="notes-container"> {/* Container for notes */}
            <div className="notes">
                <h1>
                    title
                </h1>
                <br/>
                <p>This is the content</p>
                <button className="btn">
                <DeleteOutlineIcon className="deleteIcon"/>
                </button>
            </div>
            {/* Add more instances of Notes component as needed */}
        </div>
    );
};

export default Notes;
