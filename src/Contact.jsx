import { useState } from "react";
import "./App.css";

const Contact = () => {
  const [values, setValues] = useState({
    fullname: "",
    mail: "",
    phone: "",
    message: "",
  });
  const getValue = (event) => {
    let curValue = event.target.value;
    let curName = event.target.name;
    setValues((preValue) => {
      return {
        ...preValue,
        [curName]: curValue,
      };
    });
  };
  const show = (e) => { 
    e.preventDefault();
    alert(
      `My name is ${values.fullname} my no. is ${values.phone} and my email is ${values.mail} I want to say that ${values.message}`
    );
  };
  return (
    <>
      
      <div className=" my-5 ">
        <h1 className=" text-center">Contact Us</h1>
      </div>
      <div className=" conainer contact-div">
        <div className=' row '  id="contact-gutter">
          <div className=" col-md-6 col-10 mx-auto">
            <form onSubmit={show}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter you name"
                  name="fullname"
                  value={values.fullname}
                  onChange={getValue}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your mobile no."
                  name="phone"
                  value={values.phone}
                  onChange={getValue}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="mail"
                  value={values.mail}
                  onChange={getValue}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  value={values.message}
                  onChange={getValue}
                  name="message"
                  rows="3"
                ></textarea>
              </div>
              <div className=" col-12">
                <button className=" btn btn-outline-primary " type="submit">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
