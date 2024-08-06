import { Center, Heading, Text, VStack } from "@gluestack-ui/themed";
import * as ImagePicker from "expo-image-picker";
import { ScrollView, TouchableOpacity } from "react-native";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";

import { useState } from "react";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";

export function Profile() {
	const [userPhoto, setUserPhoto] = useState<string>(
		"https://github.com/felipedecome.png",
	);

	async function handleUserPhotoSelect() {
		const photoSelected = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			quality: 1,
			aspect: [4, 4],
		});

		if (photoSelected.canceled) return;

		setUserPhoto(photoSelected.assets[0].uri);
	}

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
							uri: userPhoto,
						}}
						size="xl"
					/>

					<TouchableOpacity onPress={handleUserPhotoSelect}>
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

					<Center gap="$4" w="$full">
						<Input placeholder="Nome" islight />
						<Input value="decome.felipe@gmail.com" islight isReadOnly />
					</Center>

					<Heading
						alignSelf="flex-start"
						color="$gray200"
						fontSize="$md"
						fontFamily="$heading"
						mb="$2"
						mt="$12"
					>
						Alterar senha
					</Heading>

					<Center gap="$4" w="$full">
						<Input placeholder="Senha antiga" islight secureTextEntry />
						<Input placeholder="Nova senha" islight secureTextEntry />
						<Input
							placeholder="Confirme a nova senha"
							islight
							secureTextEntry
						/>

						<Button title="Atualizar" />
					</Center>
				</Center>
			</ScrollView>
		</VStack>
	);
}
