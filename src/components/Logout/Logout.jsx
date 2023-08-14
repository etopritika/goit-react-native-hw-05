import { View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LogoutImg from "../../images/logout/log-out.svg";

export default function Logout() {
  const navigation = useNavigation();
  const handleSubmit = () => {
    navigation.navigate("Login");
  };
  return (
    <Pressable style={{ marginRight: 16 }} onPress={handleSubmit}>
      <LogoutImg />
    </Pressable>
  );
}
