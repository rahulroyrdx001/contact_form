import React, { useState } from "react";
import style from "../component/form.module.css";

function From() {
  const [fromdata, setFromdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    gender: "",
    departments: "",
    message: "",
  });

  const [error, setError] = useState({});

  const validate = (fromdata) => {
    const newerror = {};
    if (!fromdata.firstname) {
      newerror.firstname = "first Name require";
    }
    if (!fromdata.lastname) {
      newerror.lastname = "Last name require";
    }
    if (!fromdata.email) {
      newerror.email = "email require";}
    // } else if (!/\S+@\S+\.\S+/.test(fromdata.email)) {
    //   newerror.email = "Valid email require";
    // }
    if (!fromdata.phone) {
      newerror.phone = "Phone number require";
    }
    setError(newerror);
    return newerror;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromdata({ ...fromdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valdata = validate(fromdata);
    if (Object.keys(valdata).length) return;
    console.log(valdata);
    console.log(fromdata);
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name*</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          onChange={handleChange}
        />
        <p>{error.firstname}</p>
        <label htmlFor="lastname">Last Name*</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          onChange={handleChange}
        />
        <p>{error.lastname}</p>
        <label htmlFor="email">Email*</label>
        <input type="email" id="email" name="email" onChange={handleChange} />
        <p>{error.email}</p>
        <label htmlFor="phone">Contact number*</label>
        <input type="tel" id="phone" name="phone" onChange={handleChange} />
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onChange={handleChange}
        />
        <p>{error.phone}</p>
        <label htmlFor="male">Male</label>
        <br />
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onChange={handleChange}
        />
        <label htmlFor="female">Female</label>
        <br />
        <input
          type="radio"
          id="others"
          name="gender"
          value="other"
          onChange={handleChange}
        />
        <label htmlFor="others">Other</label>
        <br></br>
        <label htmlFor="departmet">Department</label>
        <br />
        <select name="departments" id="departments" onChange={handleChange}>
          <option value="ECE">ECE</option>
          <option value="CSE">CSE</option>
          <option value="EE">EE</option>
          <option value="IT">IT</option>
        </select>
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          name="message"
          id="Message"
          placeholder="message"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit from</button>
      </form>
    </div>
  );
}

export default From;
