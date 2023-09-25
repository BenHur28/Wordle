import { cn } from "@/lib/utils";
import { useMemo } from "react";

type KeyPressHandlerType = (key: string) => void;

type KeyboardProps = {
	keyPressHandler: KeyPressHandlerType;
};

type KeyProps = {
	small?: boolean;
	keyName: string;
	keyPressHandler: KeyPressHandlerType;
};

const Key = ({ keyName, keyPressHandler, small }: KeyProps) => {
	return (
		<span
			className={cn(
				"flex justify-center items-center text-white bg-[#818384] rounded-sm cursor-pointer mx-0.5 h-12 w-12",
				small ? "text-base px-14" : "text-xl"
			)}
			onClick={() => keyPressHandler(keyName)}
		>
			{keyName.toLocaleUpperCase()}
		</span>
	);
};

const Keyboard = ({ keyPressHandler }: KeyboardProps) => {
	const top = useMemo(() => {
		return "qwertyuiop".split("").map((char) => {
			return (
				<Key keyPressHandler={keyPressHandler} key={char} keyName={char} />
			);
		});
	}, [keyPressHandler]);

	const middle = useMemo(() => {
		return "asdfghjkl".split("").map((char) => {
			return (
				<Key keyPressHandler={keyPressHandler} key={char} keyName={char} />
			);
		});
	}, [keyPressHandler]);

	const bottom = useMemo(() => {
		const letters = "zxcvbnm".split("").map((char) => {
			return (
				<Key keyPressHandler={keyPressHandler} key={char} keyName={char} />
			);
		});
		const enterKey = (
			<Key
				small
				keyPressHandler={keyPressHandler}
				key="Enter"
				keyName="Enter"
			/>
		);
		const backspaceKey = (
			<Key
				small
				keyPressHandler={keyPressHandler}
				key="Backspace"
				keyName="Backspace"
			/>
		);
		return [enterKey, ...letters, backspaceKey];
	}, [keyPressHandler]);

	return (
		<div className="mt-10">
			<div className="flex justify-center mb-2">{top}</div>
			<div className="flex justify-center mb-2">{middle}</div>
			<div className="flex justify-center">{bottom}</div>
		</div>
	);
};

export default Keyboard;
