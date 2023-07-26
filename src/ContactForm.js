import React from "react";

function ContactForm() {
  return (
    <div className="container mt-5">
      <form>
        {/* Email Input */}
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email address</label>
          <input type="email" className="form-control" id="emailInput" placeholder="Enter your email" />
        </div>

        {/* Phone Number Input */}
        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">Phone number</label>
          <input type="tel" className="form-control" id="phoneInput" placeholder="Enter your phone number" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
