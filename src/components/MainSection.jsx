// Components
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Cnotact";

export default function MainSection({ language, winWidth }) {
  return (
    <main>
      <Home language={language} />
      <About language={language} winWidth={winWidth} />
      <Projects language={language} />
      <Contact language={language} />
    </main>
  );
}
