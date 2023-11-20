import {
  View,
  Text,
  StatusBar,
  Dimensions,
  ImageBackground,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Icon } from "@rneui/base";
import axios from "axios";
// import { baseURL, timeout } from "../API/NewsDataApi";

export default function Home() {
  const width = 0.98 * Dimensions.get("window").width;
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countryLatestNews, setCountryLatestNews] = useState([]);

  const apiKey = "pub_33040b9785391b611009e8baa5fa226a800d4";
  let data = [];

  const options = {
    method: "GET",
    url: "https://newsi-api.p.rapidapi.com/api/category",
    params: {
      category: "world",
      language: "en",
      country: "us",
      sort: "top",
      page: "1",
      limit: "20",
    },
    headers: {
      "X-RapidAPI-Key": "4543035688msh791936ec2f31bf7p1257bejsn14d165cc2af0",
      "X-RapidAPI-Host": "newsi-api.p.rapidapi.com",
    },
  };
  const saOptions = {
    method: "GET",
    url: "http://api.mediastack.com/v1/news",
    params: {
      category: "world",
      language: "en",
      country: "za",
      sort: "top",
      page: "1",
      limit: "20",
    },
    headers: {
      access_key: "ae5c9648f0ca48661b64b2ed40bf43b5",
      // "X-RapidAPI-Host": "newsi-api.p.rapidapi.com",
    },
  };

  async function latestCountry() {
    const apiKey = "ae5c9648f0ca48661b64b2ed40bf43b5";
    try {
      const response = await axios.request(
        `http://api.mediastack.com/v1/news?access_key=${apiKey}&countries=za`
      );
      // const response = await axios.request(saOptions);
      console.log("SA Data : ", response.data);
      setCountryLatestNews(response.data);
      // setCountryLatest(response)
    } catch (error) {
      console.log(error);
    }
  }

  // axios({
  //   method: "get",
  //   url: `https://newsdata.io/api/1/news?apikey=${apiKey}`,
  // })
  //   .then((Response) => {
  //     // console.log(Response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // const getLatestNews = async () => {
  // setLoading(true)

  {
    /*NewsData.io api request*/
    // axios
    //   .get(`https://newsdata.io/api/1/news?apikey=${apiKey}&country=za`)
    //   .then((response) => {
    //     data = response.data;
    //     // console.log(data.results);
    //     let latestNewsImages = data.results.map((article) => {
    //       if (article.image_url !== null || article.image_url !== undefined) {
    //         return article.image_url;
    //       }
    //     });
    //     // .filter((article) => {
    //     //   return article.image_url !== null;
    //     // });
    //     // setLatestNewsImages(latestNewsImages);
    //     setLatestNews(response.data.results);
    //     console.log(latestNewsImages);
    //     setLoading(false);
    //     // console.log(response.data);
    //   });
    // }
  }
  async function getLatestNews() {
    {
      /* newsi api request */
    }
    try {
      const response = await axios.request(options);
      setLatestNews(response.data);
      // console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  const timestamp = (time) => {
    return new Date(time * 1000);
  };
  useEffect(() => {
    // getLatestNews();
    // latestCountry();
  }, []);
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
              width: "100%",
              // backgroundColor: "red",
              paddingHorizontal: 10,
              paddingVertical: 20,
              // flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Pressable
              style={{
                justifyContent: "center",
                // backgroundColor: "red",
                // borderWidth: 1,
                // borderColor: "gray",
                alignItems: "center",
                // padding: 10,
                width: 40,
                height: 40,
                borderRadius: 100,
              }}
            >
              <Icon name="user-o" type="font-awesome" color="black" size={20} />
            </Pressable>
            <View
              style={{
                flex: 10,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Icon name="location" type="ionicon" color="tomato" size={15} />
              <Text style={{ color: "gray" }}>Plk, Koloti</Text>
            </View>
            <Pressable
              style={{
                justifyContent: "center",
                // backgroundColor: "red",
                alignItems: "center",
                padding: 10,
                borderRadius: 100,
              }}
            >
              <Icon name="bell" type="fontisto" color="black" size={20} />
            </Pressable>
          </View>
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
              marginTop: 5,
              // marginTop: 25,
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
          {/* // categories pills */}
          <View style={{ flex: 1, paddingVertical: 10 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 12,
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
                  paddingVertical: 12,
                  backgroundColor: "white",
                  marginHorizontal: 2,
                  borderRadius: 25,
                  color: "gray",
                }}
              >
                Political
              </Text>
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 12,
                  backgroundColor: "white",
                  marginHorizontal: 2,
                  borderRadius: 25,
                  color: "gray",
                }}
              >
                Entertainment
              </Text>
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 12,
                  backgroundColor: "white",
                  marginHorizontal: 2,
                  borderRadius: 25,
                  color: "gray",
                }}
              >
                Sport
              </Text>
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 12,
                  backgroundColor: "white",
                  marginHorizontal: 2,
                  borderRadius: 25,
                  color: "gray",
                }}
              >
                Technology
              </Text>
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 12,
                  backgroundColor: "white",
                  marginHorizontal: 2,
                  borderRadius: 25,
                  color: "gray",
                }}
              >
                Shows
              </Text>
            </ScrollView>
          </View>
          {/* top news corousel */}
          <View
            style={{
              flex: 1,
              // height: 200,
              // backgroundColor: "red",
              // paddingHorizontal: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {loading ? (
              <ActivityIndicator color="black" />
            ) : (
              <Carousel
                // mode="parallax"
                loop
                width={width}
                height={width}
                autoPlay={true}
                data={latestNews}
                scrollAnimationDuration={3500}
                // onSnapToItem={(index) => console.log("current index:", index)}
                renderItem={({ index }) => (
                  // <View
                  //   style={{
                  //     flex: 1,
                  //     borderWidth: 1,
                  //     borderRadius: 8,
                  //     justifyContent: "center",
                  //     // alignItems: "center",
                  //     // backgroundColor: "red",
                  //   }}
                  // >
                  //   {/* <Text style={{ textAlign: "center", fontSize: 30 }}>
                  //     {index}
                  //   </Text> */}
                  // </View>
                  <ImageBackground
                    source={{ uri: latestNews[index].image }}
                    resizeMode="cover"
                    style={{
                      flex: 1,
                      // borderRadius: 8,
                      justifyContent: "flex-end",
                    }}
                    // imageStyle={{ borderRadius: 25 }}
                  >
                    <View
                      style={{
                        backgroundColor: "rgba(0,0,0,0.4)",
                        // borderBottomRightRadius: 25,
                        // borderBottomLeftRadius: 25,
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "#ed6335",
                          fontWeight: "bold",
                          // alignSelf: "flex-start",
                          // marginLeft: 12,
                        }}
                      >
                        {latestNews[index].sourceName}
                      </Text>
                      <Text
                        style={{
                          // textAlign: "center",
                          fontSize: 18,
                          color:
                            latestNews[index].image == null
                              ? "red"
                              : "whitesmoke",
                          // shadowOffset: 20,
                          // flexDirection: "column",
                          textAlign: "center",
                        }}
                      >
                        {/* {index} */}
                        {latestNews[index].title}
                      </Text>
                      <View
                        style={{
                          justifyContent: "space-evenly",
                          flexDirection: "row",
                          alignItems: "center",
                          // backgroundColor: "red",
                          // flex: 1,
                          width: "100%",
                        }}
                      >
                        <Text style={{ color: "gray", fontSize: 12 }}>
                          {latestNews[index].publishedAt}
                        </Text>
                      </View>
                    </View>
                  </ImageBackground>
                )}
              />
            )}
          </View>
          {/* Other Tabs */}
          <View
            style={{
              flex: 1,
              paddingVertical: 10,
              backgroundColor: "yellow",
              width: "100%",
              paddingHorizontal: 10,
            }}
          >
            <View style={{ paddingVertical: 10 }}>
              <Text style={{ fontSize: 16 }}>Top SA News</Text>
              {/* <Button title="get Latest" onPress={latestCountry} /> */}
            </View>
            <View
              style={{
                width: "100%",
                height: 100,
                backgroundColor: "red",
                padding: 10,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 2 }}>
                <Text>Head</Text>
                <Text>sub</Text>
                <Text>Description</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "gray",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Text>Image</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
