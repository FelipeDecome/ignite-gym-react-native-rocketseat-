import { Center, Heading, Text, useToast, VStack } from "@gluestack-ui/themed";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { ToastMessage } from "@components/ToastMessage";
import { UserPhoto } from "@components/UserPhoto";

import { gluestackUIConfig } from "../../config/gluestack-ui.config";

const MAX_ALLOWED_PHOTO_SIZE = 5 * 1024 * 1024;

export function Profile() {
	const [userPhoto, setUserPhoto] = useState<string>(
		"https://github.com/felipedecome.png",
	);

	const toast = useToast();

	async function handleUserPhotoSelect() {
		try {
			const photoSelected = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				quality: 1,
				aspect: [4, 4],
			});

			if (photoSelected.canceled) return;

			const photoURI = photoSelected.assets[0].uri;

			if (photoURI) {
				const photoInfo = await FileSystem.getInfoAsync(photoURI);

				if (!photoInfo.exists) {
					return toast.show({
						placement: "top",
						render: ({ id }) => (
							<ToastMessage
								id={id}
								title="Erro ao selecionar a imagem"
								description="Infelizmente, não foi possível selecionar a imagem. Tente novamente."
								action="error"
								onClose={() => toast.close(id)}
							/>
						),
					});
				}

				if (photoInfo.exists && photoInfo.size > MAX_ALLOWED_PHOTO_SIZE) {
					return toast.show({
						placement: "top",
						render: ({ id }) => (
							<ToastMessage
								id={id}
								title="Erro ao selecionar a imagem"
								description="Essa imagem é muito grande. Escolha uma imagem de até 5mb."
								action="error"
								onClose={() => toast.close(id)}
							/>
						),
					});
				}

				setUserPhoto(photoSelected.assets[0].uri);
			}
		} catch (error) {
			console.error(error);
		}
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
