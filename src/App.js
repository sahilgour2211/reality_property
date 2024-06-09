import Home from "./components/Home/Home";
import { Routes, Route, Router } from "react-router-dom";
import Services from "./components/Services/Services";
import ContactUS from "./components/Contact-US/ContactUS";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUS />} />
      </Routes>
    </div>
  );
}

export default App;
