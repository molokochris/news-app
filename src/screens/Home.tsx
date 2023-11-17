import { View, Text, StatusBar } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { Icon } from "@rneui/base";

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "whitesmoke" }}>
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor="whitesmoke"
      />
      <ScrollView>
        <View style={{ flex: 1, alignItems: "center", paddingVertical: 10 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 40,
              paddingHorizontal: 14,
              paddingVertical: 8,
              height: 50,
              marginTop: 25,
              marginBottom: 20,
            }}
          >
            <TextInput
              style={{
                backgroundColor: "white",
                width: "86%",
                paddingHorizontal: 6,
                borderColor: "gray",
                // borderWidth: 1,
                height: "100%",
              }}
              placeholder="Find interesting news"
              placeholderTextColor="gray"
            />
            <Pressable
              style={{
                backgroundColor: "white",
                alignItems: "center",
                // paddingHorizontal: 4,
                borderLeftWidth: 1,
                borderLeftColor: "gray",
                // paddingLeft: 10,
                padding: 6,
                // borderWidth: 1,
                // borderColor: "gray",
                // borderRadius: 100,
                height: "98%",
                justifyContent: "center",
              }}
            >
              <Icon
                name="search1"
                type="ant-design"
                color="#ed6335"
                size={20}
                style={{ marginLeft: 4 }}
              />
            </Pressable>
          </View>
          <View style={{ flex: 1, paddingVertical: 10 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  backgroundColor: "#ed6335",
                  marginHorizontal: 2,
                  color: "white",
                  borderRadius: 25,
                }}
              >
                All
              </Text>
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  backgroundColor: "white",
                  marginHorizontal: 2,
                  borderRadius: 25,
                }}
              >
                Political
              </Text>
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  backgroundColor: "white",
                  marginHorizontal: 2,
                  borderRadius: 25,
                }}
              >
                Entertainment
              </Text>
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  backgroundColor: "white",
                  marginHorizontal: 2,
                  borderRadius: 25,
                }}
              >
                Sport
              </Text>
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  backgroundColor: "white",
                  marginHorizontal: 2,
                  borderRadius: 25,
                }}
              >
                Technology
              </Text>
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  backgroundColor: "white",
                  marginHorizontal: 2,
                  borderRadius: 25,
                }}
              >
                Shows
              </Text>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
