import { Center, Image, Text, VStack } from "@gluestack-ui/themed";

import backgroundImageSrc from "@assets/background.png";
import Logo from "@assets/logo.svg";

export function SignIn() {
	// const { signIn } = useAuth();
	// const { navigate } = useNavigation();

	// const handleSignIn = async () => {
	//   try {
	//     await signIn();
	//     navigate('Home');
	//   } catch (error) {
	//     console.error(error);
	//   }
	// };

	return (
		<VStack bg="$gray700" flex={1}>
			<Image
				alt="Pessoas treinando"
				h={624}
				position="absolute"
				source={backgroundImageSrc}
				w="$full"
			/>

			<Center my="$24">
				<Logo />

				<Text color="$gray100" fontSize="$sm">
					Treine sua mente e o seu corpo.
				</Text>
			</Center>
		</VStack>
	);
}
