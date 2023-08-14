import { View, ScrollView } from "react-native";
import User from "../components/User/User";
import UserPost from "../components/UserPost/UserPost";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";

export default function PostsScreen() {
  const [post, setPost] = useState([]);
  const route = useRoute();
  const newPost = route.params?.newPost ?? null;

  useEffect(() => {
    if (newPost) {
      setPost([...post, newPost]);
    }
  }, [newPost]);

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        height: "100%",
        paddingHorizontal: 16,
        paddingVertical: 22,
      }}
    >
      <User />
      <UserPost newPost={post} />
    </ScrollView>
  );
}
