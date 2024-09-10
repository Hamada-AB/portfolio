import { useState, useEffect } from "react";
import { formIcon } from "../assets/icon/contact";
import parse from "html-react-parser";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function ContactForm({ language }) {
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
      setError(
        language === "EN"
          ? "Email and message are required"
          : "Email e messaggio sono obbligatori"
      );
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
          setError("");
        } else {
          setError(
            language === "EN"
              ? "Failed to send message."
              : "Invio del messaggio fallito"
          );
        }
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Slide in Animation
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : `translateX(100px)`,
    config: { mass: 1, tension: 120, friction: 40 },
  });

  return (
    <animated.form
      ref={ref}
      style={animationProps}
      onSubmit={handleSubmit}
      className="contact-form"
    >
      <div className="inputs-container">
        <div>
          <input
            type="text"
            name="name"
            placeholder={
              language === "EN"
                ? "Your name (optional)"
                : "Il tuo nome (facoltativo)"
            }
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder={
              language === "EN" ? "Country (optional)" : "Paese (facoltativo)"
            }
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="subject"
            placeholder={
              language === "EN" ? "Subject (optional)" : "Oggetto (facoltativo)"
            }
            value={formData.subject}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder={
              language === "EN"
                ? "Your email (required)"
                : "La tua email (obbligatorio)"
            }
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <textarea
        name="message"
        placeholder={
          language === "EN"
            ? "Type your message here (required)."
            : "Scrivi qui il tuo messaggio (obbligatorio)."
        }
        value={formData.message}
        onChange={handleChange}
      />

      {show && (
        <div className="success-message">
          {parse(formIcon.success)}
          <p>
            {language === "EN"
              ? "Your message has been sent."
              : "Il tuo messaggio è stato inviato."}
          </p>
          <p className="thanks">
            {language === "EN" ? "THANK YOU!" : "GRAZIE!"}
          </p>
        </div>
      )}

      <div className="submit-btn">
        {error && <p className="error">{error}</p>}
        <button type="submit">{language === "EN" ? "SEND" : "INVIA"}</button>
      </div>
    </animated.form>
  );
}
