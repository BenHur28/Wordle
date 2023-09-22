"use client";
import { useState, useEffect } from "react";

const Wordle = () => {
	const [guess, setGuess] = useState<Array<string>>([]);

	useEffect(() => {
		const handleKeyDown = ({ key }: { key: string }) => {
			if (guess.length == 5) {
				if (key === "Enter") {
					console.log(guess);
				}
			}
			if (key === "Backspace") {
				setGuess((prev) => {
					const temp = [...prev];
					temp.pop();
					return temp;
				});
			}
			if (guess.length < 5) {
				const isChar = /^[a-z]$/.test(key);
				if (isChar) {
					setGuess((prev) => [...prev, key]);
				}
			}
		};
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [guess, guess.length]);

	return (
		<div>
			<div className="flex mt-10 gap-x-2">
				{Array.from({ length: 5 }).map((_, i) => (
					<span
						className="flex justify-center items-center border-2 border-solid-black text-4xl h-16 w-16"
						key={i}
					>
						{guess[i] || ""}
					</span>
				))}
			</div>
		</div>
	);
};

export default Wordle;
