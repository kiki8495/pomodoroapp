import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];
export default function Header({ currentTime, setCurrenTime, setTime }) {
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrenTime(index);
    setTime(newTime * 60);
  }
  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((item, index) => (
        <TouchableOpacity
          onPress={() => handlePress(index)}
          key={index}
          style={[
            styles.itemStyle,
            currentTime !== index && { borderColor: "transparent" },
          ]}
        >
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  itemStyle: {
    width: "33%",
    borderWidth: 3 ,
    padding: 5,
    borderRadius: 8,
    borderColor: "white",
    marginVertical: 20,
  },
});
