import React from "react";
import "./Contacts.css";

export function Contacts() {
  return (
    <section className="contactsSec">
      <form>
        <h2>Contacts</h2>
        <div className="input-box"></div>
        <label>Full Name</label>
        <input type="text" className="field" placeholder="Enter Your Name" />
      </form>
    </section>
  );
}
