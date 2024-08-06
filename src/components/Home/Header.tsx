import { HStack, Heading, Icon, Text, VStack } from "@gluestack-ui/themed";
import { LogOut } from "lucide-react-native";

import { UserPhoto } from "../UserPhoto";

export function HomeHeader() {
	return (
		<HStack alignItems="center" bg="$gray600" gap="$4" pb="$5" pt="$16" px="$8">
			<UserPhoto
				alt="Imagem do usuário"
				h="$16"
				source={{ uri: "https://github.com/felipedecome.png" }}
				w="$16"
			/>

			<VStack flex={1}>
				<Text color="$gray100" fontSize="$sm">
					Olá,
				</Text>
				<Heading color="$gray100" fontSize="$md">
					Felipe Decome
				</Heading>
			</VStack>

			<Icon as={LogOut} color="$gray200" size="xl" />
		</HStack>
	);
}
