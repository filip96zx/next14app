import { DEBOUNCE_DELAY } from "@/constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TDebounceCallback = (...args: Array<any>) => void;
const activeTimeouts = new Map<TDebounceCallback, NodeJS.Timeout>();

export const debounce = <T extends TDebounceCallback>(
	fn: T,
	delay: number = DEBOUNCE_DELAY,
): ((...args: Parameters<T>) => void) => {
	const debouncedFn = (...args: Parameters<T>) => {
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

	return debouncedFn;
};

export const cancelDebounce = <T extends TDebounceCallback>(fn: T) => {
	const prevTimeout = activeTimeouts.get(fn);
	if (prevTimeout) {
		clearTimeout(prevTimeout);
		activeTimeouts.delete(fn);
	}
};
