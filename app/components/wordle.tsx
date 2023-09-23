"use client";
import { useState, useEffect } from "react";

const Wordle = () => {
	const word = "bread";
	const answer = word.split("");
	const [submittedGuesses, setSubmittedGuesses] = useState<string[][]>([]);
	const [guess, setGuess] = useState<Array<string>>([]);

	useEffect(() => {
		const handleKeyDown = ({ key }: { key: string }) => {
			const isChar = /^[a-z]$/.test(key);
			const isBackspace = key === "Backspace";
			const isEnter = key === "Enter";
			const isGuessFinished = guess.length === 5;

			if (isBackspace) {
				setGuess((prev) => {
					const temp = [...prev];
					temp.pop();
					return temp;
				});
			} else if (isChar && !isGuessFinished) {
				setGuess((prev) => [...prev, key]);
			} else if (isGuessFinished && isEnter) {
				setSubmittedGuesses((prev) => [...prev, guess]);
				setGuess([]);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [guess, guess.length]);

	console.log(submittedGuesses);

	const CurrentGuess = () => {};

	const PreviousGuess = () => {};

	const EmptyGuess = () => {
		return (
			<div className="flex gap-x-2 mb-2">
				{Array.from({ length: 5 }).map((_, i) => (
					<span
						className="flex justify-center items-center border-2 border-solid-black text-4xl h-16 w-16"
						key={i}
					>
						{guess[i] || ""}
					</span>
				))}
			</div>
		);
	};

	return (
		<div>
			<div className="mt-10">
				{Array.from({ length: 6 - submittedGuesses.length }).map((_, i) => (
					<EmptyGuess key={i} />
				))}
			</div>
		</div>
	);
};

export default Wordle;
