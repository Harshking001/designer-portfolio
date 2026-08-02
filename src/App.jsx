import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import "./App.css";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Cursor />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Work />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
