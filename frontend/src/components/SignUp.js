import React, { useState } from 'react';

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    lastname: ""
  });


  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const { email, password, name, lastname } = form;


  const handleSubmit = e => {
    e.precentDefault();
    console.log(form);
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
