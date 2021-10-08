import { useState } from 'react';

export const useCouter = (initialState = 10) => {
	const [counter, setCounter] = useState(initialState); //10

	const reset = () => {
		setCounter(initialState);
	};

	const increment = (factor = 1) => {
		setCounter(counter + 1);
	};

	const decrement = (factor = 1) => {
		setCounter(counter - 1);
	};

	return {
		counter,
		increment,
		decrement,
		reset,
	};
};
