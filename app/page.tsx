"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Wordle from "./components/wordle";

export default function Home() {
	const [wordOfDay, setWord] = useState<string>("");
	useEffect(() => {
		async function fetchWord() {
			const response = await fetch("/api/word").then((res) => res.json());
			setWord(response);
		}
		fetchWord();
	}, []);

	return (
		<div className="h-100 w-100 flex flex-col justify-center items-center">
			<Navbar />
			<Wordle wordOfDay={wordOfDay} />
		</div>
	);
}
