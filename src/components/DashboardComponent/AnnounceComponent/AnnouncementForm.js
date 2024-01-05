import React, { useState } from "react";

function AnnouncementForm({cancelAnnounce}){
    const [announceContent,setAnnounceContent] = useState("");
    const [announceImageUrl,uptateImageUrl] =  useState('');


 

    const announceContentHandeler = (event) => {
        setAnnounceContent(event.target.value)
    }
    const AnnounceImageHandler = (event) => {
        uptateImageUrl(event.target.value)
    }

    const announceFormHandler = (event) => {
        event.preventDefault()
        console.log(announceContent,announceImageUrl);
    }

  
    return(<>
     <h4>Announcement Creation</h4>
       <form className='row' onSubmit={announceFormHandler}>
      <div className="form-group col-md-12 mt-3">
                    <label for="select-image">Select Product Image</label>
                    <input type="file" className="form-control form-control" id="select-image" onChange={AnnounceImageHandler} />

                </div>
             

                <div className='col-md-12 mt-3'>
                  <label for="announceContent">Announce content</label>
                  <textarea placeholder='Enter the Announce Content here' id="announceContent" className="form-control" onChange={announceContentHandeler}></textarea>
                </div>
               

                <button type="submit" className="btn btn-primary mt-3 col-md-2 col-sm-4">Add Announce</button>
                <button type="submit" className="btn btn-danger ml-3 mt-3 col-md-2 col-sm-4" onClick={cancelAnnounce}>Cancel</button>


              </form>
    
    
    </>)
}

export default AnnouncementForm;