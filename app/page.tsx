import Navbar from "./components/navbar";
import Wordle from "./components/wordle";

export default function Home() {
	return (
		<div className="h-100 w-100 flex flex-col justify-center items-center">
			<Navbar />
			<Wordle wordOfDay="proxy" />
		</div>
	);
}
