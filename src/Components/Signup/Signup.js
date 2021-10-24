import React from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/Context'


export default function Signup() {
  const history = useHistory()
  const [error,setError]=useState();
  const [username, setUstername] = useState();
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const { firebase } = useContext(FirebaseContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
      result.user.updateProfile({ displayName: username }).then(() => {
        firebase.firestore().collection('users').add({
          id: result.user.uid,
          username: username,
          phone: phone
        }).then(() => {
          history.push("/login")
        })
      })
    }).catch((error)=>{
      console.log();
      setError(error.message);
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            name="name"
            onChange={(e) => setUstername(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            name="email"
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            name="phone"
            onChange={(e) => { setPhone(e.target.value) }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          { error ? <h6 style={{color:"red"}} >{error}</h6> :''}
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            name="password"
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
