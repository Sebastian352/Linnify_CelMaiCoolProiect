import {createStackNavigator} from '@react-navigation/stack';
import {AppRouteProps, AppRoutes} from '../routes/app-routes';
import {BottomTabs} from './tab-navigator';
import EditScreen from '../../screens/editScreen';

const Stack = createStackNavigator<AppRouteProps>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AppRoutes.Main} component={BottomTabs} />
      <Stack.Screen name={AppRoutes.Edit} component={EditScreen} />
    </Stack.Navigator>
  );
};
