// Components
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Cnotact";

export default function MainSection({ language }) {
  return (
    <main>
      <Home language={language} />
      <About language={language} />
      <Projects language={language} />
      <Contact language={language} />
    </main>
  );
}
