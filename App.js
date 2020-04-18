import React, {useState} from "react";
import { View, StyleSheet, Switch } from "react-native";

export default function App() {

  const [isEnabled, setIsEnabled] = useState(false);
  const alternarSwitch = () => {
    setIsEnabled(previousState => !previousState);
  }

  return (
    <View style={styles.container}>

      <Switch 
        trackColor={{ false: "#95a5a6", true: "#2c3e50" }}
        thumbColor={!isEnabled ? "#7f8c8d" : "#f1c40f"}
        onValueChange={alternarSwitch}
        value={isEnabled}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
