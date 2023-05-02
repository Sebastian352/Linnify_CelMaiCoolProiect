import {createStackNavigator} from '@react-navigation/stack';
import {AppRouteProps, AppRoutes} from '../routes/app-routes';
import {BottomTabs} from './tab-navigator';

const Stack = createStackNavigator<AppRouteProps>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AppRoutes.Main} component={BottomTabs} />
    </Stack.Navigator>
  );
};
