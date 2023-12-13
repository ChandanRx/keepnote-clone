import React,{ useState } from "react";
import './index.css';
import AddIcon from '@mui/icons-material/Add';;

const CreateNote = (props) => {

  const [expand, setExpand] = useState(false);
  
  const [note,setNote] = useState({
    title : "",
    content : "",
  });

  const InputEvent = (event) => {



    const {name , value} = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name] : value,
      };
    });
    console.log(note);

  };

  const addEvent = (e) => {
    e.preventDefault();
    props.passNote(note);
    setNote({
      title : "",
      content : "",
    });
    
  };

  const expandIt = () => {
        setExpand(true);
  };
  const bToNormal = () => {
    setExpand(false);
  };
  return (
    <>
      <div className='CreateN' onDoubleClick={bToNormal}>
        <form>
          {expand ?
          <input 
            type='text' 
            name = "title" 
            value={note.title} 
            onChange={InputEvent}
            placeholder='Title' 
            autoComplete='off' 
            /> : null}


          <textarea 
            rows="" 
            column="" 
            name = "content" 
            value = {note.content} 
            onChange={InputEvent} 
            placeholder="Write a note..."
            onClick={expandIt}
            ></textarea>

          {expand ? 
          <button onClick={addEvent}>
          <AddIcon style={{fontWeight : "bolder"}} />
          </button> : null}
        </form>
      </div>
    </>
  );
  
};

export default CreateNote;