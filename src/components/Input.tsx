import { Input as GluestackInput, InputField } from "@gluestack-ui/themed";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof InputField> & {
	islight?: boolean;
	isReadOnly?: boolean;
};

export function Input({ islight = false, isReadOnly = false, ...rest }: Props) {
	return (
		<GluestackInput
			bg={islight ? "$gray600" : "$gray700"}
			borderColor="transparent"
			borderRadius="$md"
			borderWidth="$1"
			h="$14"
			px="$4"
			$focus={{
				borderWidth: "$1",
				borderColor: "$green500",
			}}
			isReadOnly={isReadOnly}
			opacity={isReadOnly ? 0.5 : 1}
		>
			<InputField
				color="$white"
				fontFamily="$body"
				placeholderTextColor="$gray300"
				{...rest}
			/>
		</GluestackInput>
	);
}
