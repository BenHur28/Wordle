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
	return (
		<div className="flex gap-x-2 mb-2">
			{Array.from({ length: 5 }).map((_, i) => (
				<span
					className={cn(
						"flex justify-center items-center border-2 border-solid-black text-4xl h-16 w-16",
						guess[i] === wordOfDay[i] ? "bg-green-800" : "",
						!(guess[i] === wordOfDay[i]) && !!charMap[guess[i]]
							? "bg-yellow-500"
							: ""
					)}
					key={i}
				>
					{guess[i].toLocaleUpperCase()}
				</span>
			))}
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
