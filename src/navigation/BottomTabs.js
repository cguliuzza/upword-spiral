import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ActionContainerScreen from '../screens/ActionScreen/ActionContainerScreen';
import JournalContainerScreen from '../screens/JournalScreen/JournalContainerScreen/JournalContainerScreen';
import MotivationContainerScreen from '../screens/MotivationScreen/MotivationContainerScreen';
import CreateContainerScreen from '../screens/CreateScreen/CreateContainerScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Motivation" component={MotivationContainerScreen} />
      <Tab.Screen name="Create" component={CreateContainerScreen} />
      <Tab.Screen name="Action" component={ActionContainerScreen} />
      <Tab.Screen name="Journal" component={JournalContainerScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabs;