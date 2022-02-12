import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { data } from "../utils/data";

export default function Home(props) {
  return (
    <ScrollView>
      {data.map(function (element) {
        return (
          <View key={element.id}>
            <View
              style={{
                flex: 1,
                backgroundColor: "#deb887",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Image source={{ uri: element.picture }} style={styles.image} />
              <Text style={styles.about}> {element.about}</Text>
              <Text style={styles.author}> by {element.author}</Text>
              <Text style={styles.tags}> {element.tags}</Text>
              <Text style={styles.comments}> {element.comments.length} Comments</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 180,
  },
  about: {
    padding: 4,
    borderBottomColor: "dimgrey",
    borderBottomWidth: 1.5,
    position: "relative",
    bottom: 180,
    left: 200,
    width: 160,
    height: "auto",
    fontWeight: "bold",
  },
  author: {
    position: "relative",
    bottom: 180,
    left: 200,
    fontSize: 20,
    fontWeight: "bold",
  },
  tags: {
    position: "relative",
    bottom: 160,
    left: 200,
    width: 160,
    backgroundColor: "gray",
    borderRadius: 5,
    fontWeight: "bold",
  },
  comments: {
    position: "relative",
    bottom: 140,
    left: 200,
    width: 160,
    fontWeight: "bold",
  },
});
