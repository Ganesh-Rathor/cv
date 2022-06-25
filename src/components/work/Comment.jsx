import React,{useState,useContext} from "react";
import "./comment.css";
import CvContext from "../context/CvContext";

const Comment = () => { 
    const context = useContext(CvContext);
    const {addMessage} = context;
    
    
    const [Message, setMessage] = useState({phone:"",name:"",description:"",title:""});

    const onChange = (e)=> {
        setMessage({...Message,[e.target.name]:e.target.value})
    }

    const Submit = (e) => {
        e.preventDefault();
        addMessage(Message.name,Message.phone,Message.title,Message.description);
        
        setMessage({phone:"",name:"",description:"",title:""})
    }

    return (

        <div id="message" className="container d-flex justify-content-center align-items-center">

            <form>
                <div className="form-group  my-2">
                    <label htmlFor="formName" className="d-block">
                        <i className="icon" data-feather="user"></i>
                    </label>
                    <input type="text" name="name" value={Message.name} onChange={onChange} id="formName" className="form-control form-control-lg thick" placeholder="Name" required min={3} />
                </div>

                <div className="form-group  my-2">
                    <label htmlFor="formPhone" className="d-block">
                        <i className="icon" data-feather="user"></i>
                    </label>
                    <input type="text" name="phone" value={Message.phone}   onChange={onChange} id="formPhone" className="form-control form-control-lg thick" placeholder="Phone" required min={10} />
                </div>

                <div className="form-group ">
                    <label htmlFor="formTitle" className="d-block">
                        <i className="icon" data-feather="mail"></i>
                    </label>
                    <input type="text" name="title" value={Message.title} onChange={onChange} id="formTitle" className="form-control form-control-lg thick" placeholder="Review: good,nice,bad.." required min={5} />
                </div>

                <div className="form-group message">
                    <textarea id="formMessage" name="description" value={Message.description} onChange={onChange} className="form-control form-control-lg " rows="7" placeholder="Message"></textarea>
                </div>

                <div className="text-center">
                    <button type="submit" onClick={Submit} className="btn btn-primary" tabIndex="-1">Leave Review</button>
                </div>
            </form>

        </div>
    )
}

export default Comment;