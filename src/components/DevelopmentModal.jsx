import { useState, useEffect } from "react";

export default function DevelopmentModal({ language }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="dev-modal">
        <div className="dev-modal-content">
          <span className="dev-close-btn" onClick={closeModal}>
            &times;
          </span>
          ⚠️
          <h2>
            {language === "EN" ? "Site Under Development" : "Sito in Sviluppo"}
          </h2>
          <p>
            {language === "EN"
              ? `Thank you for visiting my portfolio! Please note that this site is
            still under development and may not be fully responsive on smaller
            screens yet. For the best experience, please view this site on a
            desktop or wide-screen device.`
              : `Grazie per aver visitato il mio portfolio! Si prega di notare che questo sito è ancora in fase di sviluppo e potrebbe non essere completamente reattivo su schermi più piccoli. Per la migliore esperienza, si consiglia di visualizzare il sito su un dispositivo desktop o con uno schermo ampio.`}
          </p>
          <p>
            {language === "EN"
              ? `Your feedback is valuable to me as I continue to improve the site.
            Stay tuned for updates!`
              : `Il tuo feedback è prezioso per me mentre continuo a migliorare il sito. Resta sintonizzato per aggiornamenti!`}
          </p>
        </div>
      </div>
    )
  );
}
