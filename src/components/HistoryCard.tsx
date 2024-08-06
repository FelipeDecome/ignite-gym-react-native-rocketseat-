import { HStack, Heading, Text, VStack } from "@gluestack-ui/themed";

export function HistoryCard() {
	return (
		<HStack
			alignItems="center"
			bg="$gray600"
			justifyContent="space-between"
			mb="$3"
			px="$5"
			py="$4"
			rounded="$md"
			w="$full"
		>
			<VStack mr="$5">
				<Heading
					color="$white"
					fontFamily="$heading"
					fontSize="$md"
					textTransform="capitalize"
				>
					Costas
				</Heading>
				<Text
					color="$gray100"
					fontFamily="$body"
					fontSize="$lg"
					numberOfLines={1}
				>
					Puxada frontal
				</Text>
			</VStack>

			<Text color="$gray300" fontFamily="$body" fontSize="$md">
				08:56
			</Text>
		</HStack>
	);
}
