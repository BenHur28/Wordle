"use client";
import { useState, useEffect } from "react";

const Wordle = () => {
	const [guess, setGuess] = useState<Array<string>>([]);

	useEffect(() => {
		const handleKeyDown = ({ key }: { key: string }) => {
			if (guess.length < 5) {
				const isChar = /[a-z]/.test(key);
				if (isChar) {
					setGuess((prev) => [...prev, key]);
				}
			}
		};
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [guess.length]);

	return (
		<div>
			{guess.map((char, i) => (
				<span key={i}>{char}</span>
			))}
		</div>
	);
};

export default Wordle;
