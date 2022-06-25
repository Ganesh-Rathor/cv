import React,{useState,useContext} from 'react'
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useAlert } from 'react-alert';
import CvContext from '../context/CvContext';


function Login() {
  const Navigate = useNavigate();
  const context = useContext(CvContext);
  const {setLogin,Login} = context;

  const alert = useAlert();
  const [login, setlogin] = useState({phone:"",email:"",password:""});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/admin/login", {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: login.email, password: login.password,phone:login.phone })
    })
    const json = await response.json();
    if (json.success === true) {
        // save the authToken to local storage
        localStorage.setItem("token", json.AuthToken);
        alert.show('Succsessfully Login!',{
          type: 'success'
      })
      setLogin(true);

        setTimeout(()=>{

            Navigate('/');
        },1500)
    }
    else{
      alert.show('Login faild!',{
        type: 'error'
    })
       setlogin({email:"",password:"",phone:""})
    }
}

const handleLogout = ()=> {
  localStorage.removeItem('token');
  alert.show("Successfully LogOut Ganesh !",{
    type:"info"
  })
  setLogin(false);
    Navigate('/')
}

const onchange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value })
}

const verifyuser = async () => {
  const response = await fetch( "/admin/verify", {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const json = await response.json()
  if (json.success) {
    alert.show("Verify User Successfully",{type:"success"});
  }
  else{
    alert.show(json.msg,{type:"error"});

  }
    
}

  return (
    <div className="lbody">

    <div className="box">
        <h1>{!Login? "Login":"LogOut"}</h1>
        {!Login  ? <> <form >

        <input type="text" value={login.email} name='email' placeholder="username" onChange={onchange} />
        <input type="text" value={login.phone} name='phone' placeholder="phone" onChange={onchange} />
        <input type="password" value={login.password} name="password" placeholder="password" onChange={onchange} />
        <button type='submit' onClick={handleSubmit}>LogIn</button>
        </form> </>: <button onClick={handleLogout}>Logout</button>}

        <button className='my-4' onClick={verifyuser}>Verify user</button>
    </div>
    </div>
  )
}

export default Login