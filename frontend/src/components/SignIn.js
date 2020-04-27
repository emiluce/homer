import React, { useState } from "react";
import signup from "../styles/signup.scss";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import Snack from "./Snack";
import {
  Link
} from "react-router-dom";




const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const { email, password } = form;

  const [flash, setFalsh] = useState(true);

  const handleSubmit = e => {
    e.precentDefault();
    console.log(form);
    fetch("/auth/signin",
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(this.state),
      })
      .then(res => res.json())
      .then(
        res => this.setState({ "flash": res.flash }),
        err => this.setState({ "flash": err.flash })
      )
  };



  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));



  const classes = useStyles();






  return (



    <div>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/signup">SignUp</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container">
        <div className="box">
          <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="" />
        </div>

        <div>
          <h1>{`${email}`}</h1>

          <form className="form" noValidate autoComplete="off" onSubmit={handleSubmit} >

            <div className="input">
              <TextField id="standard-basic" label="E-mail" type="email" name="email" onChange={onChange} placeholder="E-mail" value={email} />
              <TextField id="standard-basic" label="Password" type="password" name="password" onChange={onChange} placeholder="password" value={password} />
            </div>


            <Snack />
          </form>
        </div>
      </div>
    </div>
  );
};


export default SignIn;
