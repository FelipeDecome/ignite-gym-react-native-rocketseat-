import {
	Center,
	Heading,
	Image,
	ScrollView,
	Text,
	VStack,
} from "@gluestack-ui/themed";

import backgroundImageSrc from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function SignUp() {
	return (
		<ScrollView
			contentContainerStyle={{
				flexGrow: 1,
			}}
			showsVerticalScrollIndicator={false}
		>
			<VStack flex={1}>
				<Image
					alt="Pessoas treinando"
					h={624}
					position="absolute"
					source={backgroundImageSrc}
					w="$full"
				/>

				<VStack flex={1} pb={"$16"} px={"$10"}>
					<Center my="$24">
						<Logo />

						<Text color="$gray100" fontSize="$sm">
							Treine sua mente e o seu corpo.
						</Text>
					</Center>

					<Center flex={1} gap="$2">
						<Heading color="$gray100">Crie sua conta</Heading>

						<Input placeholder="Nome" />

						<Input
							placeholder="Email"
							keyboardType="email-address"
							autoCapitalize="none"
						/>

						<Input placeholder="Senha" secureTextEntry />

						<Button title="Criar e acessar" />
					</Center>

					<Button mt="$12" title="Voltar para o login" variant="outline" />
				</VStack>
			</VStack>
		</ScrollView>
	);
}
