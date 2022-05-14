import { Routes, Route } from "react-router-dom";
import Home from "./home";
import News from "./news";
import Contact from "./contact";

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/news' element={<News />} />
			<Route path='/contact' element={<Contact />} />
		</Routes>
	);
}
