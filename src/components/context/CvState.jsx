import React, { useState } from "react";
import CvContext from "./CvContext";
import { useAlert } from "react-alert";

const CvState = (props) => {
  const alert = useAlert();
  const [message, setMessage] = useState([]);
  const [ConMessage, setConMessage] = useState([]);
  localStorage.setItem("login",false);
  const [Login, setLogin] = useState(false);


  let url;
  const getMessage = async () => {
    url = `/cv/fetchreview`;
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await response.json()
    setMessage(json)
  }

  const getContactMessage = async () => {
    url = `/cv/fetchneedumessage`;
    const response = await fetch( url, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
      }
    });
    const json = await response.json()
    setConMessage(json)
  }


  const addMessage = async (name, phone, title, description,) => {

    // API Call

    url = `/cv/message`;
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, name, phone })
    });
    const json = await response.json();
    if (!json.success) {
      alert.show(json.msg || "Invalid Input ", { type: "error" })
      return;
    } else {
      alert.show('Succsessfully Review sent!', {
        type: 'success'
      })
    }
    setMessage(message.concat(json));
  };

  const addContactMessage = async (name, phone, email, work, technology, description) => {

    // API Call

    url = `/cv/needu`;
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        // 'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ name, phone, email, work, technology, description })
    });
    const json = await response.json();
    if (!json.success) {
      alert.show(json.msg || "Invalid Input ", { type: "error" })
      return;
    } else {
      alert.show("Message sent Successfully !", { type: "success" });
    }
    setMessage(message.concat(json));
  };

  const deletemessage = async (id) => {

    // API call

    url = `/cv/delete/${id}`;
    const response = await fetch( url, {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json();

    if (!json.success) {
      alert.show(json.msg || "Anothrized Connection ! ", { type: "error" })
      return;
    } else {
      alert.show("Message Deletion Successfully !", { type: "success" });
    }

    const delNotes = ConMessage.filter(Conmessage => Conmessage._id !== id );
    setConMessage(delNotes);
  };


  return (
    <CvContext.Provider value={{ addMessage, getMessage, message, setLogin, Login, addContactMessage,getContactMessage,ConMessage,deletemessage }}>
      {props.children}
    </CvContext.Provider>
  )
}

export default CvState;