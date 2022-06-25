import React,{useContext} from "react";
import "./contact.css";
import CvContext from "../context/CvContext";
 
const NeedU = (props) => {
  const context = useContext(CvContext);
  const {name, phone, email, work, technology, description,date,_id } = props.msg;
  const deletemsg = () => {
    context.deletemessage(_id);
  }
    return (
        <div className=" card mx-3 my-3 bd" style={{width: "25rem",display:"inline-block"}}>
        <div className="card-body text-light">
          <h5 className="card-title text-light h3">{name} <span className="mx-1 h6 mark bg-primary"> {technology}</span></h5>
          <p className="card-text text-light">{description}</p>
          <i className="fa-solid fa-trash-can " onClick={deletemsg} ></i>
          <span className="bg-success mx-1 fs-1rem">{phone}</span>
          <span className="bg-success mx-1 fs-1rem">{email}</span>
          <h6 className="text-light my-2">{date} <span className="bg-primary fs-1rem p-7px mx-2">{work}</span></h6>
        </div>
      </div>
    )
}

export default NeedU;