import { useState, useEffect } from "react";
import Noteslist from "./noteslist";
import usefetch from "./usefetch";

const Home = () => {
    const{data, isPending} = usefetch('http://localhost:9000/notes');

   
    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {data && <Noteslist notes={data} title="All Notes"  />}
        </div>
    );
};

export default Home;
