import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  Pressable,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import { Link } from "@react-navigation/native";

export default function Viewer({ navigation, route }) {
  const article = route.params.article;

  const goToLink = () => {
    Linking.openURL(article.url);
  };

  console.log("Viewer component: ", article);
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            alignItems: "center",
          }}
        >
          <Icon
            name="chevron-back"
            type="ionicon"
            color="black"
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Text style={{ fontWeight: "400", fontSize: 16 }}>
            {article.category.toUpperCase()}
          </Text>
          <Icon name="dots-three-vertical" type="entypo" />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 26 }}>{article.title}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <Text>{article.published_at.substring(0, 10)}</Text>
            <Text>{article.published_at.substring(11, 16)}</Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 400,
            // backgroundColor: "red",
            flex: 8,
            paddingHorizontal: 8,
          }}
        >
          <Image
            source={{ uri: article.image }}
            style={{
              flex: 1,
              resizeMode: "contain",
              borderRadius: 8,
            }}
          />
        </View>

        <View style={{ flex: 5, padding: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "300" }}>
            {article.author}
          </Text>
          <Text style={{ fontSize: 16 }}>{article.description}</Text>
          <Text>
            Read More Here:{" "}
            <Pressable onPress={goToLink}>
              <Text>Article</Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
