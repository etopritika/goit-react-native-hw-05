import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import SendIcon from "../images/send-icon.svg";

export default function CommentsScreen() {
  const [inputText, setInputText] = useState("");
  const [message, setMessage] = useState("");
  const route = useRoute();
  const newPost = route.params?.newPost ?? null;
  const selectedIndex = route.params?.selectedIndex ?? null;

  const selectedPost = newPost[selectedIndex];
  const { picture } = selectedPost;
  
  const handleSendMessage = () => {
    setMessage(inputText);
    setInputText("");
  }

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: picture }} />
        <Text>{message}</Text>
      </View>
      <View style={styles.input__container}>
        <TextInput
          style={styles.message__input}
          placeholder="Коментувати..."
          type="text"
          value={inputText}
          onChangeText={setInputText}
        />
        <Pressable onPress={handleSendMessage} style={styles.send__icon}>
          <SendIcon />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 22,
    backgroundColor: "white",
    height: "100%",
    justifyContent: "space-between",
  },
  image: { width: "100%", height: 200, borderRadius: 8 },
  input__container: {position: "relative",},
  message__input: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },
  send__icon: { position: "absolute", top: 8, right: 8 },
});
