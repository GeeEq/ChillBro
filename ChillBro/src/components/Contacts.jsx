import React from "react";
import "./Contacts.css";

export function Contacts() {
  return (
    <section className="contactsSec">
      <form>
        <h2>Contacts</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input
            type="text"
            className="field"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea
            name=""
            id=""
            className="field mess"
            placeholder="Enter Your Message"
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
