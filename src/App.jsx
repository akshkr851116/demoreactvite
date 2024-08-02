import React from "react";
import { Routes, Route,NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./components/App.css"
import ContactDetails from "./components/ContactDetails";


function App() {
	return (
		<div>
			{/* <nav style={{margin:20}}> */}
		        {/* NavLink component gives the activ class but Link is not . */}
				{/* <Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</nav> */}
			<nav style={{margin:20}}>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/contact">Contact</NavLink>
			</nav>
			<Routes>
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route path="/" element={<Home />} />
				<Route path="/contactdetails" element={<ContactDetails/>} />
			</Routes>
		</div>
	);
}

export default App;
