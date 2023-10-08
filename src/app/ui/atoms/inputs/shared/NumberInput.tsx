"use client";

import { Input } from "./Input";

const handleInputValidValueOnType =
	(max?: number, defaultValue?: string) => (event: React.FormEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement;
		const valueToNumber = parseInt(target.value);

		if (defaultValue && isNaN(valueToNumber)) {
			target.value = defaultValue;
			return;
		}

		if (!target?.validity?.valid) {
			if (max && parseInt(target.value) > max) {
				target.value = max.toString();
				return;
			}
			target.value = "";
		}
	};

const toNumber = (value?: string | number) => (value ? parseInt(value.toString()) : undefined);

export const NumberInput = ({
	setDefaultValueOnClear,
	...props
}: Omit<React.ComponentProps<"input">, "type" | "defaultValue"> & {
	defaultValue?: number;
	setDefaultValueOnClear?: boolean;
}) => {
	const maxToNumber = toNumber(props.max);
	const defaultValue = setDefaultValueOnClear ? props.defaultValue?.toString() : undefined;
	return (
		<Input
			{...props}
			type="number"
			onInput={handleInputValidValueOnType(maxToNumber, defaultValue)}
		/>
	);
};
