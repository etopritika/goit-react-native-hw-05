import {
  View,
  TextInput,
  Pressable,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FormLink } from "../Form-link/Form-link";
import { styles } from "../Registration/Registration-styles";
import { loginStyles } from "./Login-styles";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const navigation = useNavigation();

  const handleShowPress = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    if (email === "") {
      alert("Email is required");
      return;
    }
    console.log(`Your email: ${email}`);
    navigation.navigate("Home");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.input__container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={loginStyles.container}>
          <Text style={styles.title}>Увійти</Text>

          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
            type="email"
            name="email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <View style={styles.pass__container}>
            <TextInput
              style={styles.pass__input}
              placeholder="Пароль"
              type="password"
              name="password"
              secureTextEntry={showPassword}
            />
            <Pressable style={styles.show__password} onPress={handleShowPress}>
              <Text style={styles.pass__text}>Показати</Text>
            </Pressable>
          </View>

          <Pressable style={styles.submit} onPress={handleSubmit}>
            <Text style={styles.submit__text}>Увійти</Text>
          </Pressable>
          <FormLink screenName="Register">
            Немає акаунту? Зареєструватися
          </FormLink>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
