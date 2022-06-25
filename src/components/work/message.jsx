import React,{useContext} from "react";
import "./message.css"; 
import CvContext from "../context/CvContext";


function NoteItem(props) {
  const context = useContext(CvContext);
  const {Login} = context;
  const {message} = props;
  return (

      <div className="chat-log_item chat-log_item-own z-depth-0">
        <div className="row justify-content-end mx-1 d-flex">
          <div className="col-auto px-0">
            <span className="chat-log_author">
              @{message.name}
            </span>
          </div>
          <div className="col-auto px-0">
          </div>
        </div>
        <h5 className="mx-4">{message.title}</h5>
        {/* <hr className="my-1 py-0 col-8" style="opacity: 0.5" /> */}
        <div className="chat-log_message">
          <p>{message.description}</p>
        </div>
        {/* <hr className="my-1 py-0 col-8" style="opacity: 0.5" /> */}
        <div className="row chat-log_time m-0 p-0 justify-content-end">
          {message.date} {Login && <span className=" bg-light d-inline text-dark h5"> {message.phone} </span>}
        </div> 
      </div>

  );
}

export default NoteItem;