import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/pages/layout/Container";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/company">Company</Link> |{" "}
          <Link to="/contact">Contact</Link> |{" "}
          <Link to="/newproject">New</Link>
        </nav>
      </header>

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>

      <footer>
        <p>Footer</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
