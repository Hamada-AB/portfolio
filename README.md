# My Portfolio

## ⚠️ Important: Fork Before You Clone

**Attention:** This updated approach encourages proper GitHub workflow and ensures that users work within their own repository fork, making it easier to manage contributions and changes.

## Overview

This single-page application (SPA) is built using React, Vite, and plain CSS, showcasing my skills, projects, and experience. Below you'll find a brief overview of the sections and features included in this project.

This portfolio is divided into five main sections:

1. [Home](#home)
2. [About](#about)
3. [Projects](#projects)
4. [Contact](#contact)
5. [Footer](#footer)

### Home

- **Header**: Features a logo on the right, a navigation bar (Home, About, Projects, Contact) in the middle, and a language selection button on the left allowing visitors to choose between English and Italian.
- **Introduction**: Includes a large "Hello, I am Hamada" heading. Below it, there is an animated section displaying a series of phrases, with one new phrase appearing every 2 seconds.
- **Contact Button**: A smooth scroll button that takes the visitor directly to the Contact section.

### About

- **Heading**: "ABOUT ME" with an h2 tag.
- **Description**: A brief description of myself in three words.
- **Profile Section**: A div containing my photo and a short introduction about myself.
- **Tech Stack Carousel**: A Swiper carousel displaying logos of the technologies I have studied, including HTML, CSS, JavaScript, React, Git, GitHub, Node.js, Express.js, Prisma, PostgreSQL, and VSCode. The carousel loops and auto-plays, and users can interact with it by dragging the logos.

### Projects

- **Heading**: "PROJECTS" with an h2 tag.
- **Introduction**: A paragraph expressing my passion for what I do.
- **Project Cards**: A section displaying project cards, each with a background image relevant to the project. Hovering over a card reveals the project title, a button for a live demo, and a button for project details.
- **Project Modal**: Clicking on "Details" opens a modal with options to view the live demo, server repo, and client repo, as well as a close button. The modal also includes a Swiper carousel for project screenshots, complete with navigation buttons, pagination bullets, loop, and autoplay features.
- **Content Outline**: A Table of Contents (COT) created using react-scroll for sections like Overview, Technologies Used, Features, Highlights, Current Status, Challenges, and Learnings.

### Contact

- **Heading**: "CONTACT" with an h2 tag.
- **Message**: A paragraph encouraging visitors to reach out.
- **Contact Form**: A form for visitors to send messages, including fields for name, country, subject, email, and message. Only the email and message fields are required. The form data is sent to the [backend service](https://github.com/Hamada-AB/portfolio-server), which handles email delivery.

### Footer

- **Footer**: A simple footer section with relevant information.

## Technologies Used

- **HTML**
- **CSS**
- **React**
- **Vite**
- **react-scroll**
- **react-spring**
- **Swiper**
- **react-modal**
- **clsx**
- **html-react-parser**

## Installation

### Prerequisites

- Node.js and npm installed on your machine.

### Steps

1. **Fork the repository**:

   - Click the "Fork" button at the top right corner of the repository page to create your own copy of the repository.

2. **Clone the repository**:

   - Clone the forked repository to your local machine:

   ```bash
   git clone <your-forked-repository-url>

   ```

3. **Navigate to the project directory.**

4. **Install dependencies:**

   ```bash
   npm install

   ```

5. **Start the development server:**

   ```bash
   npm run dev

   ```

## Contact

If you have any questions or would like to get in touch, feel free to reach out through the [contact form](https://hmad.netlify.app/) on my portfolio or connect with me on [LinkedIn](https://www.linkedin.com/in/hamada-abdelaal).

## Live Demo

The application is live [here](https://hmad.netlify.app/).
