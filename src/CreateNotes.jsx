import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNotes = () => {

    const [note, setNote]= useState({
        title:"",
        content:"",
    });

    const InputEvent = (event) =>{

        // const value= event.target.value;
        // const name= event.target.name;
        
        const {name,value} = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
                

            };
        });
        console.log(note);
    };

    return (
        <div className="main_note">
            <form>
                <input type='text' name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"/>
                <textarea rows='' column="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a note..."></textarea>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                >
                    Add Note
                </Button>
            </form>
        </div>
    );
};

export default CreateNotes;
