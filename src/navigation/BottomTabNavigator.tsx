import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../modules/home/HomeScreen';
import { TabStack } from './navigationTypes';
import BottomTabCustom from '../components/bottom-tab/BottomTabCustom';

function BottomTabNavigator() {
  return (
    <TabStack.Navigator
      initialRouteName='Home'
      tabBar={props => <BottomTabCustom {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <TabStack.Screen name="Home" component={HomeScreen} />
      <TabStack.Screen name="Notification" component={HomeScreen} />
      <TabStack.Screen name="Wallet" component={HomeScreen} />
      <TabStack.Screen name="Profile" component={HomeScreen} />
    </TabStack.Navigator>
  );
}

export default BottomTabNavigator;