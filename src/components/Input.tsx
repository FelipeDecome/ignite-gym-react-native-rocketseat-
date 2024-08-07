import {
	FormControl,
	FormControlError,
	FormControlErrorText,
	Input as GluestackInput,
	InputField,
} from "@gluestack-ui/themed";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof InputField> & {
	errorMessage?: string;
	isInvalid?: boolean;
	islight?: boolean;
	isReadOnly?: boolean;
};

export function Input({
	errorMessage,
	isInvalid: isInvalidProp = false,
	islight = false,
	isReadOnly = false,
	...rest
}: Props) {
	const isInvalid = isInvalidProp || !!errorMessage;

	return (
		<FormControl isInvalid={isInvalid} w="$full">
			<GluestackInput
				bg={islight ? "$gray600" : "$gray700"}
				borderColor="transparent"
				borderRadius="$md"
				borderWidth="$1"
				isInvalid={isInvalid}
				isReadOnly={isReadOnly}
				h="$14"
				opacity={isReadOnly ? 0.5 : 1}
				px="$4"
				$focus-borderColor={isInvalid ? "$red500" : "$green500"}
				$invalid-borderColor="$red500"
			>
				<InputField
					color="$white"
					fontFamily="$body"
					placeholderTextColor="$gray300"
					{...rest}
				/>
			</GluestackInput>

			{errorMessage && (
				<FormControlError>
					<FormControlErrorText color="$red500">
						{errorMessage}
					</FormControlErrorText>
				</FormControlError>
			)}
		</FormControl>
	);
}
