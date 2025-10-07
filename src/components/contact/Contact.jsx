import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import email from "../../assets/email.png";
import mail_icon from "../../assets/mail_icon.png";
import phone_call from "../../assets/phone-call.png";
import city from "../../assets/city.png";
import send from "../../assets/send.png";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "859e15bf-b8ba-47c4-bf29-cb09ce2f23ab");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setTimeout(() => {
        setResult("");
      }, 1000);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="Contact" name={"Contact"}>
      <div className="contact-col">
        <h3>
          Send Us Message <img src={email} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={city} alt="" />
            Mansoura, majmae almahakim{" "}
          </li>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            Contact@Codax.dev{" "}
          </li>
          <li>
            {" "}
            <img src={phone_call} alt="" />
            +20 12345678910{" "}
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Enter Yoyr Message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={send} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
