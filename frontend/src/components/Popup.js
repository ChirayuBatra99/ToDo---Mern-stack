import axios from "axios";
import React, { useState } from "react";
import { baseURL } from "../utils/constants";
import styles from "./Popup.module.scss"

function Popup({setShowPopup, popupContent, setUpdateUI}) {
    const [input, setInput]= useState(popupContent.text);

    const updateToDo=()=>{
        axios.put(`${baseURL}/update/${popupContent.id}`, {toDo: input})
        .then((res)=>{
            setUpdateUI((prevState)=> !prevState);
            setShowPopup(false);
        });
    };

  return (
    <div className="backdrop">
      <div className="popup">
        <div className={styles.mainContainer}>
            <h1 className={styles.header}>Update To Do</h1>
            {/* <h2 className={styles.header}>{popupContent.text}</h2> */}
            <div className={styles.inputHolder}>

            <input
             className="form-control"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            type="text"
            placeholder="Update To do"
            />
            
            <button
            className="btn btn-success"
            onClick={updateToDo}
            >Update</button>
         </div>

         </div>
      </div>
    </div>
  )
}

export default Popup
