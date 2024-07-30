import React from "react";
import "./Contacts.css";

export function Contacts() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formId);

    formData.append("access_key", "87e9e587-6510-4239-8656-569d46a79e68");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <section className="contactsSec">
      <form onClick={onSubmit} id="formId">
        <h2>Contacts</h2>
        <div className="input-box fullName">
          <label>Full Name</label>
          <input
            name="full_name"
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
            name="email"
            required
          />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea
            name="message"
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
