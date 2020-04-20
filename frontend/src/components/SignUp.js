import React, { useState } from "react";
import signup from "../styles/signup.scss";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import Snack from "./Snack"




const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
  });


  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const { email, password, name, lastname } = form;

  const [flash, setFalsh] = useState(true);

  const handleSubmit = e => {
    e.precentDefault();
    console.log(form);
    fetch("/auth/signup",
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
    <div className="container">
      <div className="box">
        <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="" />
      </div>

      <div>
        <h1>{`${name}`}</h1>

        <form className="form" noValidate autoComplete=" off" onSubmit={handleSubmit} >

          <div className="input">
            <TextField id="standard-basic" label="E-mail" type="email" name="email" onChange={onChange} placeholder="E-mail" value={email} />
            <TextField id="standard-basic" label="Password" type="password" name="password" onChange={onChange} placeholder="password" value={password} />
            <TextField id="standard-basic" label="Confirm password" type="passwordconf" name="passwordconf" onChange={onChange} placeholder="Confirm password" value={password} />
            <TextField id="standard-basic" label="Name" type="name" name="name" onChange={onChange} placeholder="name" value={name} />
            <TextField id="standard-basic" label="Lastname" type="lastname" name="lastname" onChange={onChange} placeholder="lastname" value={lastname} />
          </div>


          <Snack />
        </form>
      </div>
    </div>
  );
};


export default SignUp;
