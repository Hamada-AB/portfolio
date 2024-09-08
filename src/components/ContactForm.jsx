import { useState } from "react";

export default function ContactForm() {
  const [ok, setOk] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://portfolio-server-86bc.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((data) => {
        if (data && !data.error) {
          setOk("Your message has been sent successfully.");
        } else {
          setError("Failed to send message.");
        }
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Jhon Doe"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="country"
        placeholder="Italy"
        value={formData.country}
        onChange={handleChange}
      />
      <input
        type="text"
        name="subject"
        placeholder="What can I help you with?"
        value={formData.subject}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
}
