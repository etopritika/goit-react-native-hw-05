import { View, Image, Text } from "react-native";
import UserPosts from "../UserPost/UserPost";
import { styles } from "./User-styles";

export default function User() {
  return (
    <View style={styles.container}>
      <View style={styles.user__container}>
        <Image style={styles.avatar} source={require('../../images/avatar/girl.jpeg')} />
        <View style={styles.user__title}>
          <Text style={styles.user__name}>Natali Romanova</Text>
          <Text style={styles.user__email}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
}
