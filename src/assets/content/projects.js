import samsungFoodImage from "../image/samsung-food.jpg";

// Samsung screen shots
import home1 from "../image/samsung/home-1.png";
import home2 from "../image/samsung/home-2.png";
import home3 from "../image/samsung/home-3.png";
import home4 from "../image/samsung/home-4.png";
import home5 from "../image/samsung/home-5.png";
import home6 from "../image/samsung/home-6.png";
import home7 from "../image/samsung/home-7.png";

import login1 from "../image/samsung/login-1.png";
import login2 from "../image/samsung/login-2.png";

import signup1 from "../image/samsung/signup-1.png";

import recipe1 from "../image/samsung/recipe-1.png";
import recipe2 from "../image/samsung/recipe-2.png";

import explore1 from "../image/samsung/explore-1.png";
import explore2 from "../image/samsung/explore-2.png";

import saved from "../image/samsung/saved.png";

import details1 from "../image/samsung/details-1.png";
import details2 from "../image/samsung/details-2.png";

import comment1 from "../image/samsung/comment-1.png";
import comment2 from "../image/samsung/comment-2.png";

import post1 from "../image/samsung/post-1.png";
import post2 from "../image/samsung/post-2.png";

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
    screenShots: [
      home1,
      home2,
      home3,
      home4,
      home5,
      home6,
      home7,
      login1,
      login2,
      signup1,
      recipe1,
      recipe2,
      explore1,
      explore2,
      saved,
      details1,
      details2,
      comment1,
      comment2,
      post1,
      post2,
    ],

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
