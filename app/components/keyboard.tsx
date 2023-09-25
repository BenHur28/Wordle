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
	return <span>{keyName}</span>;
};

const Keyboard = ({ keyPressHandler }: KeyboardProps) => {
	const top = useMemo(() => {
		return "qwertyuiop".split("").map((char) => {
			return (
				<Key keyPressHandler={keyPressHandler} key={char} keyName={char} />
			);
		});
	}, [keyPressHandler]);

	return <div>{top}</div>;
};

export default Keyboard;
