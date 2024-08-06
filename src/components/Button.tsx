import {
	ButtonSpinner,
	Button as GluestackButton,
	Text,
} from "@gluestack-ui/themed";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof GluestackButton> & {
	isLoading?: boolean;
	title: string;
	variant?: "solid" | "outline";
};

export function Button({
	isLoading = false,
	title,
	variant = "solid",
	...rest
}: Props) {
	return (
		<GluestackButton
			bg={variant === "outline" ? "transparent" : "$green700"}
			borderWidth="$1"
			borderColor={variant === "outline" ? "$green500" : "transparent"}
			borderRadius="$md"
			h="$14"
			w="$full"
			$active-bg={variant === "outline" ? "$gray500" : "$green500"}
			disabled={isLoading}
			{...rest}
		>
			{isLoading ? (
				<ButtonSpinner color="$white" />
			) : (
				<Text
					color={variant === "outline" ? "$green500" : "$white"}
					fontFamily="$heading"
					fontSize="$sm"
				>
					{title}
				</Text>
			)}
		</GluestackButton>
	);
}
