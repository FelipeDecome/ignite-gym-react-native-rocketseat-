import { VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { FlatList } from "react-native";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/Home/Header";

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

export function Home() {
	const [selectedGroup, setSelectedGroup] = useState("ombros");

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
		</VStack>
	);
}
