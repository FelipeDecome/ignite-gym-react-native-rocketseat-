import { Center, Text, VStack } from "@gluestack-ui/themed";
import { ScrollView, TouchableOpacity } from "react-native";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";

import { gluestackUIConfig } from "../../config/gluestack-ui.config";

export function Profile() {
	return (
		<VStack flex={1}>
			<ScreenHeader title="Perfil" />

			<ScrollView
				contentContainerStyle={{
					paddingBottom: gluestackUIConfig.tokens.space["9"],
				}}
			>
				<Center mt="$6" px="$10">
					<UserPhoto
						alt="Imagem do usuário"
						source={{
							uri: "https://github.com/felipedecome.png",
						}}
						size="xl"
					/>

					<TouchableOpacity>
						<Text
							color="$green500"
							fontSize="$md"
							fontFamily="$heading"
							mb="$8"
							mt="$2"
						>
							Alterar Foto
						</Text>
					</TouchableOpacity>
				</Center>
			</ScrollView>
		</VStack>
	);
}
