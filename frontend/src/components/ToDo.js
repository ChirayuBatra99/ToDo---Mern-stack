import axios from "axios";
import React from "react";
import { baseURL } from "../utils/constants";
import styles from "./ToDo.module.scss"


function ToDo({text, id, setPopupContent, setShowPopup, setUpdateUI}) {

    const handleEdit=()=>{
        setPopupContent({text, id});
        setShowPopup(true);
    }

    const handleRemove=()=>{
        axios.delete(`${baseURL}/delete/${id}`).then((res)=>{
            setUpdateUI((prevState)=>! prevState);
        });
    }

  return(
    <div className={styles.Container}>
       <div className={styles.textContainer}>{text}</div> 
        <button  type="button" className="btn btn-success mr-1" onClick={handleEdit}>edit</button>
        <button type="button" className="btn btn-danger" onClick={handleRemove}> remove </button>
    </div>
  )
}

export default ToDo
