import samsungFoodImage from "../image/samsung-food.jpg";
import home from "../image/home.png";
import save from "../image/save.png";
import make from "../image/make.png";
import grocery from "../image/grocery.png";

export const intro = {
  en: "Thank you for visiting my project portfolio! As a junior full-stack developer, I'm deeply committed to crafting seamless and functional web applications. This portfolio highlights the skills I've developed through intensive training and hands-on experience in both front-end and back-end development. Below, you'll find a project that reflects my current expertise. My journey is far from over, and this portfolio will continue to grow as I embrace new challenges and sharpen my skills. I invite you to explore my work and follow along as I evolve.",

  it: "Grazie per aver visitato il mio portfolio di progetti! Come sviluppatore full-stack junior, sono profondamente impegnato nella creazione di applicazioni web fluide e funzionali. Questo portfolio mette in evidenza le competenze che ho sviluppato attraverso un’intensa formazione e un’esperienza pratica sia nello sviluppo front-end che back-end. Di seguito, troverai un progetto che riflette la mia attuale esperienza. Il mio percorso è lontano dall'essere concluso e questo portfolio continuerà a crescere man mano che affronterò nuove sfide e perfezionerò le mie competenze. Ti invito a esplorare il mio lavoro e a seguire il mio progresso.",
};

export const projects = [
  {
    id: 1,
    title: "Samsung Food Replica",
    image: samsungFoodImage,
    liveDemo: "https://www.linkedin.com/in/hamada-abdelaal-67aa9b223",
    serverRepo: "https://github.com/Hamada-AB/samsung-food-server",
    clientRepo: "https://github.com/Hamada-AB/samsung-food-client",
    screenShots: [home, save, make, grocery],

    detailsEN: {
      overview: `The Samsung Food Replica is a project completed as the final assignment of my coding bootcamp at Boolean UK. This application is a streamlined version of the <a href="https://samsungfood.com//" target="_blank">Samsung&nbsp;Food</a> website, showcasing my ability to build responsive and user-friendly web applications. The project is currently under development and continues to receive updates as I refine its features and functionalities.`,
      technologies: [
        { side: "Front-End", techs: "HTML, CSS, JavaScript, React" },
        { side: "Back-End", techs: "Node.js, Express.js" },
        { side: "Database", techs: "PostgreSQL, Prisma" },
      ],

      features: [
        {
          feat: "Responsive",
          desc: "Adapted layout for various screen sizes to ensure a seamless user experience across devices (only the home page for now).",
        },

        {
          feat: "Dynamic",
          desc: "Integrated React components to manage and display content dynamically.",
        },
        {
          feat: "Server",
          desc: "Used Node.js and Express.js to handle server-side logic and API endpoints.",
        },
        {
          feat: "Integration",
          desc: "Implemented PostgreSQL with Prisma for efficient data management and retrieval.",
        },
      ],

      highlights: [
        {
          light: "User Interface",
          desc: "Focused on creating an intuitive and visually appealing interface that mirrors the aesthetics of the Samsung Food website.",
        },
        {
          light: "Performance Optimization",
          desc: " Applied best practices in performance optimization to enhance loading times and overall responsiveness.",
        },
        {
          light: "Real-World Application",
          desc: "  Demonstrated practical application of full-stack development skills by replicating a real-world website with functional components and server-side capabilities.",
        },
      ],

      status:
        "The application is still under development and is being actively updated to improve features and functionality. ",

      challenges: [
        {
          side: "Challenge",
          desc: " Optimizing the website design to function seamlessly using only plain CSS.",
        },
        {
          side: "Learning",
          desc: "Gained hands-on experience with responsive design techniques and the integration of front-end and back-end technologies to build a cohesive application.",
        },
      ],
    },

    detailsIT: {
      overview: `La Replica di Samsung Food è un progetto completato come compito finale del mio bootcamp di programmazione presso Boolean UK. Questa applicazione è una versione semplificata del sito web <a href="https://samsungfood.com//" target="_blank">Samsung&nbsp;Food</a>, che dimostra la mia capacità di costruire applicazioni web reattive e facili da usare. Il progetto è attualmente in fase di sviluppo e continua a ricevere aggiornamenti mentre ne perfeziono le caratteristiche e le funzionalità.`,
      technologies: [
        { side: "Front-End", techs: "HTML, CSS, JavaScript, React" },
        { side: "Back-End", techs: "Node.js, Express.js" },
        { side: "Database", techs: "PostgreSQL, Prisma" },
      ],
      features: [
        {
          feat: "Responsivo",
          desc: "Layout adattato per varie dimensioni dello schermo per garantire un'esperienza utente fluida su diversi dispositivi (solo la home page per ora).",
        },
        {
          feat: "Dinamico",
          desc: "Componenti React integrati per gestire e visualizzare contenuti in modo dinamico.",
        },
        {
          feat: "Server",
          desc: "Utilizzo di Node.js e Express.js per gestire la logica lato server e gli endpoint API.",
        },
        {
          feat: "Integrazione",
          desc: "Implementazione di PostgreSQL con Prisma per una gestione e recupero efficiente dei dati.",
        },
      ],
      highlights: [
        {
          light: "Interfaccia Utente",
          desc: "Focalizzazione sulla creazione di un'interfaccia intuitiva e visivamente attraente che rispecchia l'estetica del sito web Samsung Food.",
        },
        {
          light: "Ottimizzazione delle Prestazioni",
          desc: "Applicazione delle migliori pratiche nell'ottimizzazione delle prestazioni per migliorare i tempi di caricamento e la reattività complessiva.",
        },
        {
          light: "Applicazione Reale",
          desc: "Dimostrazione dell'applicazione pratica delle competenze di sviluppo full-stack replicando un sito web reale con componenti funzionali e capacità lato server.",
        },
      ],
      status:
        "L'applicazione è ancora in fase di sviluppo e viene attivamente aggiornata per migliorare le funzionalità e le caratteristiche.",
      challenges: [
        {
          side: "Sfida",
          desc: "Ottimizzare il design del sito web per funzionare senza problemi utilizzando solo CSS puro.",
        },
        {
          side: "Apprendimento",
          desc: "Acquisizione di esperienza pratica con tecniche di design reattivo e l'integrazione di tecnologie front-end e back-end per costruire un'applicazione coesa.",
        },
      ],
    },
  },
];
