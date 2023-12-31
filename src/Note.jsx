import React from "react";
import './index.css'
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {
  const deleteNote = () =>{
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <br/>
        <button className="btn" onClick={deleteNote}>
               <DeleteIcon/>
        </button>
      </div>
    </>
);
  
};

export default Note;