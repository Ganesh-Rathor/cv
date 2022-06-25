import React,{useState,useContext,useEffect} from "react";
import "./contact.css";
import NeedU from "./needu";
import CvContext from "../context/CvContext";

const Contact = () => {
    const context = useContext(CvContext);
    const { addContactMessage,getContactMessage,ConMessage,Login } = context;
    const [contact, setContact] = useState({ name: "", phone: "", email: "", work: "", technology: "", description: "" });

    const onchange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addContactMessage(contact.name, contact.phone, contact.email, contact.work, contact.technology, contact.description);
        setContact({ name: "", phone: "", email: "", work: "", technology: "", description: "" });

    };

    useEffect(() => {
        if(Login){
            getContactMessage();
        }
      });


    return (
        <>
            <section id="contact ">
                <div className="contact-box">
                    <div className="contact-links">
                        <h2>CONTACT</h2>
                        <div className="links">
                            <div className="link">
                                <a href="https://www.linkedin.com/in/ganesh-rathor-92388422b/"><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
                            </div>
                            <div className="link">
                                <a href="https://github.com/Ganesh-Rathor"><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
                            </div>
                            <div className="link">
                                <a href="https://codepen.io/ganesh-rathor"><img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen" /></a>
                            </div>
                            <div className="link">
                                <a href="mailto:rathorganesh35@gmail.com"><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
                            </div>
                            <p className="mail h5">rathorganesh35@gmail.com</p>
                            <p className="mail h5">Bharat (m.p.) Singoli</p>
                            <p className="mail h5 mx-2">458226</p>



                        </div>
                    </div>
                    <div className="contact-form-wrapper">
                        <form>
                            <div className="form-item">
                                <input type="text" onChange={onchange} value={contact.name} name="name" required />
                                <label>Name:</label>
                            </div>
                            <div className="form-item">
                                <input type="text" onChange={onchange} value={contact.phone} name="phone" required />
                                <label>Phone Number:</label>
                            </div>

                            <div className="form-item">
                                <input type="text" onChange={onchange} value={contact.email} name="email" required />
                                <label>Email:</label>
                            </div>
                            <div className="form-item">
                                <input type="text" onChange={onchange} value={contact.technology} name="technology" required />
                                <label>About which Tech:</label>
                            </div>
                            <div className="form-item">
                                <input type="text" onChange={onchange} value={contact.work} name="work" required />
                                <label>Which type Query</label>
                            </div>
                            <div className="form-item">
                                <textarea className="" onChange={onchange} value={contact.description} name="description" required></textarea>
                                <label>Message:</label>
                            </div>
                            <button type="submit" onClick={handleSubmit} className="submit-btn">Send</button>
                        </form>
                    </div>
                </div>

            </section>
            {ConMessage.map((msg,i)=>{
            return(
                
            <NeedU msg={msg} key={1000 + i}/>
            )
        })}
            
        </>
    );
}

export default Contact;