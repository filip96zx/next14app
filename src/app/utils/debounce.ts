/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { DEFAULT_DEBOUNCE_DELAY } from "@/app/constants";

type TDebounceCallback = (...args: Array<any>) => void;
const activeTimeouts = new Map<TDebounceCallback, NodeJS.Timeout>();

export const debounce = <T extends TDebounceCallback>(
	fn: T,
	delay: number = DEFAULT_DEBOUNCE_DELAY,
): T => {
	const debouncedFn = (...args: Array<any>) => {
		const prevTimeout = activeTimeouts.get(fn);

		if (prevTimeout) {
			clearTimeout(prevTimeout);
		}

		const timeout = setTimeout(() => {
			fn(...args);
			activeTimeouts.delete(fn);
		}, delay);
		activeTimeouts.set(fn, timeout);
	};

	return debouncedFn as T;
};
