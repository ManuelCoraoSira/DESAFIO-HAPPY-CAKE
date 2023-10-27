
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./assets/components/NavigationBar";
import Home from "./assets/components/home";
import Contact from "./assets/components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;