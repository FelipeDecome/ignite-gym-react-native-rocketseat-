import {
	Box,
	HStack,
	Heading,
	Icon,
	Image,
	Text,
	VStack,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import { ScrollView, TouchableOpacity } from "react-native";

import BodySvg from "@assets/body.svg";
import RepsSvg from "@assets/repetitions.svg";
import SeriesSvg from "@assets/series.svg";
import { Button } from "@components/Button";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";

export function Exercise() {
	const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

	return (
		<VStack flex={1}>
			<VStack bg="$gray600" pt="$12" px="$8">
				<TouchableOpacity onPress={handleGoBack}>
					<Icon as={ArrowLeft} color="$green500" size="xl" />
				</TouchableOpacity>

				<HStack
					alignItems="center"
					justifyContent="space-between"
					mb="$8"
					mt="$4"
				>
					<Heading
						color="$gray100"
						flexShrink={1}
						fontFamily="$heading"
						fontSize="$lg"
					>
						Puxada frontal
					</Heading>

					<HStack alignItems="center" gap="$1">
						<BodySvg />

						<Text
							color="$gray200"
							fontFamily="$body"
							textTransform="capitalize"
						>
							Costas
						</Text>
					</HStack>
				</HStack>
			</VStack>

			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingBottom: gluestackUIConfig.tokens.space["8"],
				}}
			>
				<VStack p="$8">
					<Image
						alt="Exercício"
						h="$80"
						mb="$3"
						resizeMode="cover"
						rounded={"$lg"}
						source={{
							uri: "https://treinomestre.com.br/wp-content/uploads/2017/11/fazer-o-treino-de-trapezio-separado--768x512.jpg.webp",
						}}
						w="$full"
					/>

					<Box bg="$gray600" rounded="$md" pb="$4" px="$4">
						<HStack
							alignItems="center"
							justifyContent="space-around"
							mb="$6"
							mt="$5"
						>
							<HStack gap="$2">
								<SeriesSvg />
								<Text color="$gray200">3 séries</Text>
							</HStack>

							<HStack gap="$2">
								<RepsSvg />
								<Text color="$gray200">12 repetições</Text>
							</HStack>
						</HStack>

						<Button title="Marcar como realizado" />
					</Box>
				</VStack>
			</ScrollView>
		</VStack>
	);
}
