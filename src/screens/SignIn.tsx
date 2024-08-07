import {
	Center,
	Heading,
	Image,
	ScrollView,
	Text,
	VStack,
} from "@gluestack-ui/themed";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import backgroundImageSrc from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import type { AuthNavigationRoutesProps } from "@routes/auth.routes";

type SignInFormData = {
	email: string;
	password: string;
};

const schema = yup.object({
	email: yup
		.string()
		.email("Email inválido")
		.required("O campo Email é obrigatório"),
	password: yup.string().required("O campo Senha obrigatório"),
});

export function SignIn() {
	const navigation = useNavigation<AuthNavigationRoutesProps>();
	const { control, formState, handleSubmit } = useForm<SignInFormData>({
		resolver: yupResolver(schema),
	});
	const { errors } = formState;

	function handleNewAccount() {
		navigation.navigate("signUp");
	}

	function handleSignIn(data: SignInFormData) {
		console.log(data);
	}

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

					<Center gap="$2">
						<Heading color="$gray100">Acesse a conta</Heading>

						<Controller
							control={control}
							name="email"
							render={({ field: { onChange, value } }) => (
								<Input
									autoCapitalize="none"
									errorMessage={errors.email?.message}
									isInvalid={!!errors.email}
									keyboardType="email-address"
									onChangeText={onChange}
									placeholder="Email"
									value={value}
								/>
							)}
						/>

						<Controller
							control={control}
							name="password"
							render={({ field: { onChange, value } }) => (
								<Input
									errorMessage={errors.password?.message}
									isInvalid={!!errors.password}
									onChangeText={onChange}
									onSubmitEditing={handleSubmit(handleSignIn)}
									placeholder="Senha"
									returnKeyType="send"
									secureTextEntry
									value={value}
								/>
							)}
						/>

						<Button onPress={handleSubmit(handleSignIn)} title="Acessar" />
					</Center>

					<Center flex={1} justifyContent="flex-end" mt="$4">
						<Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
							Ainda não tem acesso?
						</Text>

						<Button
							onPress={handleNewAccount}
							title="Criar conta"
							variant="outline"
						/>
					</Center>
				</VStack>
			</VStack>
		</ScrollView>
	);
}
