import { useEffect, useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import axios from "axios";

export function ScrollViewUsers() {
  const [error, setError] = useState(false);
  const [displayPeople, setDisplayPeople] = useState([]);
  const randomPeopleUrl = "https://randomuser.me/api/?results=10";
  useEffect(() => {
    async function gettingRandomPeople() {
      try {
        const { data } = await axios.get(randomPeopleUrl);
        console.log(data);
        setDisplayPeople(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("finally");
      }
    }
    gettingRandomPeople();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "hotpink", width: "100%" }}>
      {displayPeople.map((person) => {
        return (
          <View key={person.name.last}>
            <Text style={styles.writtenContent}>
              {person.name.first} {person.name.last}
            </Text>
          </View>
        );
      })}
      {displayPeople.name}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  writtenContent: {
    color: "white",
    padding: 10,
    textAlign: "center",
  },
});
