import React, { useState } from 'react';

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


  return (
    <div>
      <h1>{`${name}`}</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" onChange={onChange} placeholder="E-mail" value={email} />
        <input type="password" name="password" onChange={onChange} placeholder="password" value={password} />
        <input type="passwordconf" name="passwordconf" onChange={onChange} placeholder="Confirm password" value={password} />
        <input type="name" name="name" onChange={onChange} placeholder="name" value={name} />
        <input type="lastname" name="lastname" onChange={onChange} placeholder="lastname" value={lastname} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default SignUp;
