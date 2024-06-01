import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNotes = (props) => {

    const[expand,setExpand] = useState(false);

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

    const addEvent = () =>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        });

    };
    
    const ExpandIt = () =>{
        setExpand(true);
    }

    const ShrinkIt = () =>{
        setExpand(false);
    }


    return (
        <div className="main_note">
            <form>
                {expand?
                <input type='text' name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off" onDoubleClick={ShrinkIt}/> :null}
                <textarea rows='' column="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a note..." onClick={ExpandIt} onDoubleClick={ShrinkIt}></textarea>
                {expand?
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={addEvent}
                >
                    Add Note
                </Button>:null}
            </form>
        </div>
    );
};

export default CreateNotes;
