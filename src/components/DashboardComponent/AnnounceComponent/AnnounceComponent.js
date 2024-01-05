import React, { useState } from "react";
import './AnnounceComponent.css';
import AnnouncementForm from "./AnnouncementForm";


function AnnouncementComponent(){

    
    const [createAnnounce,uptateAnnounce] = useState(false);



    const createAnnounceHandler = () => {
        uptateAnnounce(true)
    }

    const cancelAnouunceHandler = () => {
        uptateAnnounce(false)
    }
    return(<>
{!createAnnounce &&<button className="btn btn-primary" onClick={createAnnounceHandler}>Create Announcement</button>}
{createAnnounce && <AnnouncementForm cancelAnnounce={cancelAnouunceHandler}></AnnouncementForm>}   
    
    </>)
}

export default AnnouncementComponent;