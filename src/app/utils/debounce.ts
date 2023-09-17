/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { DEFAULT_DEBOUNCE_DELAY } from "@/app/constants";

type TDebounceCallback = (...args: Array<any>) => void;
const debouncedFunctions = new WeakMap<TDebounceCallback, NodeJS.Timeout>();

export const debounce = <T extends TDebounceCallback>(
	fn: T,
	delay: number = DEFAULT_DEBOUNCE_DELAY,
): T => {
	const debouncedFn = (...args: Array<any>) => {
		const prevTimeout = debouncedFunctions.get(fn);

		if (prevTimeout) {
			clearTimeout(prevTimeout);
		}

		const timeout = setTimeout(() => {
			fn(...args);
			debouncedFunctions.delete(fn);
		}, delay);
		debouncedFunctions.set(fn, timeout);
	};

	return debouncedFn as T;
};
