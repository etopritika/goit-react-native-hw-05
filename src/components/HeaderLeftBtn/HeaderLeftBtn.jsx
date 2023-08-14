import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ArrowLeft from "../../images/arrow-left.svg"

export default function HeaderLeftBtn() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PostsScreen");
      }}
      style={{marginLeft: 16}}
    >
      <ArrowLeft/>
    </TouchableOpacity>
  );
}
