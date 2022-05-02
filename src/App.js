import "./App.css";
import Header from "./components/Header/Header.js";

function App() {
	return (
		<div id="container">
			<Header />

			<main id="site-content"></main>

			<footer id="site-footer">
				<p>@PetMyPet</p>
			</footer>
		</div>
	);
}

export default App;
