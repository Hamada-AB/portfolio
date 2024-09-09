import { useState, useEffect } from "react";
import { formIcon } from "../assets/icon/contact";
import parse from "html-react-parser";

export default function ContactForm() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    subject: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (show) {
        setShow(false);
      }
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [show]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      setError("Email and message are required");
      return;
    }

    try {
      await fetch("https://portfolio-server-86bc.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((data) => {
        if (data && !data.error) {
          setFormData({
            name: "",
            country: "",
            subject: "",
            email: "",
            message: "",
          });

          setShow(true);
        } else {
          setError("Failed to send message.");
        }
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="inputs-container">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your name (optional)"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country (optional)"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject (optional)"
            value={formData.subject}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email (required)"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <textarea
        name="message"
        placeholder="Type your message here (required)."
        value={formData.message}
        onChange={handleChange}
      />
      {error && <p className="error">{error}</p>}

      {show && (
        <div className="success-message">
          {parse(formIcon.success)}
          <p>Your message has been sent. </p>
          <p className="thanks">THANK YOU!</p>
        </div>
      )}

      <div className="submit-btn">
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
