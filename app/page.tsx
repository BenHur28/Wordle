import Wordle from "./components/wordle";

export default function Home() {
	return (
		<div className="h-100 w-100 flex flex-col justify-center items-center">
			<div className="border-b w-full text-center">
				<h1 className="text-black text-3xl font-semibold py-2">WORDLE</h1>
			</div>
			<Wordle />
		</div>
	);
}
