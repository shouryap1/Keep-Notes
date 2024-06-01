import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNotes from "./CreateNotes";
import Notes from "./Notes";
import './index.css';

const App = () => {
    const [addItem, setAddItem] = useState([]);
    
    const addNote = (note) => {
        if (!note.title.trim() && !note.content.trim()) {
            alert("Title and Content can't remain empty");
        }
        else if (!note.title.trim()) {
            alert("Title can't remain empty");
        }
        else if(!note.content.trim()){
            alert("Content of note can't remain empty");
        }
        else{
        setAddItem((prevData) => {
            return [...prevData, note];
        });
    }
    };

    const onDelete = (id) => {
        setAddItem((oldData) =>
            oldData.filter((currentData, index) => {
                return index !== id;
            })
        );
    };

    return (
        <>
            <Header />
            <CreateNotes passNote={addNote} />
            <div className="notes-container">
                {addItem.map((val, index) => {
                    return (
                        <Notes
                            key={index}
                            id={index}
                            title={val.title}
                            content={val.content}
                            deleteItem={onDelete}
                        />
                    );
                })}
            </div>
            <Footer />
        </>
    );
};

export default App;
