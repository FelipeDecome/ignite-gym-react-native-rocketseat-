import { HStack, Heading, Text, VStack } from "@gluestack-ui/themed";

type History = {
	title: string;
	description: string;
	time: string;
};

type Props = {
	history: History;
};

export function HistoryCard({ history }: Props) {
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
					{history.title}
				</Heading>
				<Text
					color="$gray100"
					fontFamily="$body"
					fontSize="$lg"
					numberOfLines={1}
				>
					{history.description}
				</Text>
			</VStack>

			<Text color="$gray300" fontFamily="$body" fontSize="$md">
				{history.time}
			</Text>
		</HStack>
	);
}
