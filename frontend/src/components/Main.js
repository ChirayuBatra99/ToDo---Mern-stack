import ToDo from "./ToDo"
import axios from "axios";
import React,{useEffect, useState} from 'react'
import {baseURL} from '../utils/constants'
import Popup from './Popup';
import styles from './Main.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {

  const [toDos, setToDos]= useState([]);
  const [input, setInput]= useState("");
  const [updateUI, setUpdateUI]= useState(false);
  const [showPopup, setShowPopup]= useState(false);
  const [popupContent, setPopupContent]= useState({});

  useEffect(()=>{
    axios.get(`${baseURL}/get`)
    .then((res)=> {setToDos(res.data); setInput("")} )
    .catch((error)=>console.log(error));
  },[updateUI]);


  const saveToDo=()=>{
    axios.post(`${baseURL}/save`, {toDo: input})
    .then((res)=>{
      setUpdateUI((prevState)=> !prevState);
    })
    .catch((error)=> console.log(error));
  }

  return (
    <div className={styles.mainContainer}>
          <h1 className={styles.header}>To Do List</h1>
          <div className={styles.inputHolder}>

                  <input value={input}
                  className="form-control"
                  onChange={(e)=> setInput(e.target.value)}
                  placeholder='Add a to do'
                  />

              <button type="button" className="btn btn-primary" onClick={saveToDo}>Add</button>
          </div>
          <div className={styles.showToDos}>
            {toDos.map((el)=>(
              <div className={styles.singleToDo}>
              <ToDo 
              
              text={el.toDo}
               id={el._id}
               setShowPopup={setShowPopup}
               setPopupContent={setPopupContent}
               setUpdateUI={setUpdateUI}
               />
              </div>
            ))}
          </div>

      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          popupContent={popupContent}
          setUpdateUI={setUpdateUI}
        />
      )}

    </div>
  )
}

export default Main;