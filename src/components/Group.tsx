import { Button, Text } from "@gluestack-ui/themed";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Button> & {
	name: string;
	isActive?: boolean;
};

export function Group({ isActive, name, ...rest }: Props) {
	return (
		<Button
			alignItems="center"
			bg="$gray600"
			borderColor={isActive ? "$green500" : "transparent"}
			borderWidth={1}
			sx={{
				":active": {
					borderColor: "$green500",
				},
			}}
			h="$10"
			justifyContent="center"
			minWidth="$24"
			rounded="$md"
			{...rest}
		>
			<Text
				color={isActive ? "$green500" : "$gray200"}
				fontSize="$xs"
				fontFamily="$heading"
				textTransform="uppercase"
			>
				{name}
			</Text>
		</Button>
	);
}
