import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/navegation/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
