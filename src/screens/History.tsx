import { Heading, Text, VStack } from "@gluestack-ui/themed";

import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { SectionList } from "react-native";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";

const history = [
	{
		title: "06.08.2024",
		data: [
			{
				title: "Costas",
				description: "Puxada frontal",
				time: "08:56",
			},
			{
				title: "Pernas",
				description: "Agachamento",
				time: "09:30",
			},
		],
	},
	{
		title: "05.08.2024",
		data: [
			{
				title: "Peito",
				description: "Supino reto",
				time: "08:56",
			},
			{
				title: "Pernas",
				description: "Agachamento",
				time: "09:30",
			},
		],
	},
	{
		title: "04.08.2024",
		data: [
			{
				title: "Ombros",
				description: "Desenvolvimento",
				time: "08:56",
			},
			{
				title: "Pernas",
				description: "Agachamento",
				time: "09:30",
			},
		],
	},
];

export function History() {
	return (
		<VStack flex={1}>
			<ScreenHeader title="Histórico" />

			<SectionList
				sections={history}
				keyExtractor={(item) => item.title}
				renderItem={({ item }) => <HistoryCard history={item} />}
				showsVerticalScrollIndicator={false}
				renderSectionHeader={({ section: { title } }) => (
					<Heading
						color="$gray200"
						fontFamily="$heading"
						fontSize="$md"
						mb="$3"
						mt="$10"
					>
						{title}
					</Heading>
				)}
				contentContainerStyle={
					history.length === 0 && {
						flex: 1,
						justifyContent: "center",
					}
				}
				ListEmptyComponent={() => (
					<Text color="$gray100" textAlign="center">
						Não há exercicios registrados ainda. {"\n"} Vamos fazer exercícios
						hoje?
					</Text>
				)}
				style={{
					paddingHorizontal: gluestackUIConfig.tokens.space["8"],
				}}
			/>
		</VStack>
	);
}
