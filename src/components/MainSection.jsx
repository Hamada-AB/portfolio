// Components
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Cnotact";

// Projects Data
const projects = [
  {
    id: 1,
    title: "Samsung Food Replica",
    image: "https://via.placeholder.com/300x400",
    liveDemo: "https://example.com/my-final-project",
    details: "Detailed information about Mu final project",
  },
];

export default function MainSection({ language }) {
  return (
    <main>
      <Home language={language} />
      <About language={language} />
      <Projects language={language} projects={projects} />
      <Contact language={language} />
    </main>
  );
}
