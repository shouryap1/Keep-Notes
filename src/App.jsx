import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNotes from "./CreateNotes";
import Notes from "./Notes";
import './index.css';


const App = () => {
    return <>
        <Header/>
        <CreateNotes/>
        <Notes/>
        <Footer/>
    </>;
};


export default App;