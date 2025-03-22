import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Research from "./components/pages/Research";
import Blog from "./components/pages/Blog";
import Event from "./components/pages/Event";
import Register from "./components/pages/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/event" element={<Event />} />
      <Route path="/research" element={<Research />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register/:eventId" element={<Register />} />
    </Routes>
  );
}
