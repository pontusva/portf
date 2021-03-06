import Navbar from "./components/NavbarComponents/Navbar";
import Home from "./components/HomeComponents/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/ContactComponents/Contact";
import About from "./components/AboutComponents/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
