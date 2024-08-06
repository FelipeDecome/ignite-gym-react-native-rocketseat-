import { HStack, Heading, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList } from "react-native";

import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/Home/Header";
import type { AppNavigationRoutesProps } from "@routes/app.routes";

import { gluestackUIConfig } from "../../config/gluestack-ui.config";

const muscleGroups = [
	"Costas",
	"Ombros",
	"Peito",
	"Bíceps",
	"Tríceps",
	"Pernas",
	"Abdômen",
];

const exercises = [
	{
		name: "Supino reto",
		sets: 4,
		reps: 10,
	},
	{
		name: "Supino inclinado",
		sets: 3,
		reps: 12,
	},
	{
		name: "Supino declinado",
		sets: 4,
		reps: 8,
	},
	{
		name: "Crucifixo",
		sets: 2,
		reps: 10,
	},
];

export function Home() {
	const [selectedGroup, setSelectedGroup] = useState("ombros");

	const navigation = useNavigation<AppNavigationRoutesProps>();

	function handleOpenExerciseDetails() {
		navigation.navigate("exercise");
	}

	return (
		<VStack flex={1}>
			<HomeHeader />

			<FlatList
				data={muscleGroups}
				renderItem={({ item }) => (
					<Group
						name={item}
						isActive={selectedGroup === item.toLowerCase()}
						onPress={() => setSelectedGroup(item.toLowerCase())}
					/>
				)}
				keyExtractor={(item) => item}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					gap: gluestackUIConfig.tokens.space["3"],
					paddingHorizontal: gluestackUIConfig.tokens.space["8"],
				}}
				style={{
					marginVertical: gluestackUIConfig.tokens.space["11"],
					maxHeight: gluestackUIConfig.tokens.space["11"],
					minHeight: gluestackUIConfig.tokens.space["11"],
				}}
			/>

			<VStack flex={1} px="$8">
				<HStack alignItems="center" justifyContent="space-between" mb="$5">
					<Heading color="$gray200" fontSize="$md" fontFamily="$heading">
						Exercícios
					</Heading>

					<Text color="$gray200" fontSize="$sm" fontFamily="$body">
						4
					</Text>
				</HStack>

				<FlatList
					data={exercises}
					renderItem={({ item }) => (
						<ExerciseCard exercise={item} onPress={handleOpenExerciseDetails} />
					)}
					keyExtractor={(item) => item.name}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{
						gap: gluestackUIConfig.tokens.space["3"],
						paddingBottom: gluestackUIConfig.tokens.space["5"],
					}}
				/>
			</VStack>
		</VStack>
	);
}
