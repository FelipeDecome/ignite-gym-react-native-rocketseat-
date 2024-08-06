import { Image } from "@gluestack-ui/themed";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Image>;

export function UserPhoto({ ...rest }: Props) {
	return (
		<Image
			rounded="$full"
			borderWidth="$2"
			borderColor="$gray400"
			bg="$gray500"
			{...rest}
		/>
	);
}
