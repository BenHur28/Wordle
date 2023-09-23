import { cn } from "@/lib/utils";

type CurrentGuessProps = {
	guess: string[];
	wordOfDay: string;
	charMap: Record<string, number>;
};

type SubmittedGuessesProps = {
	submittedGuesses: string[][];
	wordOfDay: string;
	charMap: Record<string, number>;
};

const CurrentGuess = ({ guess }: CurrentGuessProps) => {
	return (
		<div className="flex gap-x-2 mb-2">
			{Array.from({ length: 5 }).map((_, i) => (
				<span
					className="flex justify-center items-center border-2 border-solid-black text-4xl h-16 w-16"
					key={i}
				>
					{guess[i]?.toLocaleUpperCase() || ""}
				</span>
			))}
		</div>
	);
};

const SubmittedGuesses = ({
	submittedGuesses,
	wordOfDay,
	charMap,
}: SubmittedGuessesProps) => {
	return (
		<>
			{submittedGuesses.map((guess, i) => {
				return (
					<GuessRow
						key={i}
						guess={guess}
						wordOfDay={wordOfDay}
						charMap={charMap}
					/>
				);
			})}
		</>
	);
};

const GuessRow = ({ guess, wordOfDay, charMap }: CurrentGuessProps) => {
	const tempMap = { ...charMap };

	guess.forEach((char, i) => {
		const isCorrect = wordOfDay[i] === char;
		if (isCorrect) {
			tempMap[char] -= 1;
		}
	});

	return (
		<div className="flex gap-x-2 mb-2">
			{Array.from({ length: 5 }).map((_, i) => {
				const isCorrect = guess[i] === wordOfDay[i];
				let isPresent = false;
				if (!isCorrect && tempMap[guess[i]]) {
					isPresent = true;
					tempMap[guess[i]] -= 1;
				}
				return (
					<span
						className={cn(
							"flex justify-center items-center border-2 border-solid-black text-4xl h-16 w-16",
							isCorrect ? "bg-green-800" : "",
							isPresent ? "bg-yellow-500" : ""
						)}
						key={i}
					>
						{guess[i].toLocaleUpperCase()}
					</span>
				);
			})}
		</div>
	);
};

const EmptyGuess = () => {
	return (
		<div className="flex gap-x-2 mb-2">
			{Array.from({ length: 5 }).map((_, i) => (
				<span
					className="flex justify-center items-center border-2 border-solid-black text-4xl h-16 w-16"
					key={i}
				></span>
			))}
		</div>
	);
};

export { EmptyGuess, SubmittedGuesses, CurrentGuess };
