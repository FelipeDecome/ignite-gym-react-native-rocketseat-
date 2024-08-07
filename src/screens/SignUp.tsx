import {
	Center,
	Heading,
	Image,
	ScrollView,
	Text,
	VStack,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";

import backgroundImageSrc from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

type SignUpFormData = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
};

export function SignUp() {
	const navigation = useNavigation();
	const { control, formState, handleSubmit } = useForm<SignUpFormData>({});
	const { errors } = formState;

	function handleGoBack() {
		navigation.goBack();
	}

	function handleSignUp(data: SignUpFormData) {
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

					<Center flex={1} gap="$3">
						<Heading color="$gray100">Crie sua conta</Heading>

						<Controller
							control={control}
							name="name"
							render={({ field: { onChange, value } }) => (
								<Input
									errorMessage={errors.name?.message}
									isInvalid={!!errors.name}
									onChangeText={onChange}
									placeholder="Nome"
									value={value}
								/>
							)}
							rules={{
								required: "Campo obrigatório",
							}}
						/>

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
							rules={{
								required: "Campo obrigatório",
								pattern: {
									value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
									message: "Email inválido",
								},
							}}
						/>

						<Controller
							control={control}
							name="password"
							render={({ field: { onChange, value } }) => (
								<Input
									errorMessage={errors.password?.message}
									isInvalid={!!errors.password}
									onChangeText={onChange}
									placeholder="Senha"
									secureTextEntry
									value={value}
								/>
							)}
						/>

						<Controller
							control={control}
							name="confirmPassword"
							render={({ field: { onChange, value } }) => (
								<Input
									errorMessage={errors.confirmPassword?.message}
									isInvalid={!!errors.confirmPassword}
									onChangeText={onChange}
									onSubmitEditing={handleSubmit(handleSignUp)}
									placeholder="Confirmar a Senha"
									returnKeyType="send"
									secureTextEntry
									value={value}
								/>
							)}
						/>

						<Button
							onPress={handleSubmit(handleSignUp)}
							title="Criar e acessar"
						/>
					</Center>

					<Button
						mt="$12"
						onPress={handleGoBack}
						title="Voltar para o login"
						variant="outline"
					/>
				</VStack>
			</VStack>
		</ScrollView>
	);
}
