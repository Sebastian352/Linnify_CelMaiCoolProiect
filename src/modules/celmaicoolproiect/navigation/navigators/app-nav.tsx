import {createStackNavigator} from '@react-navigation/stack';
import {AppRouteProps, AppRoutes} from '../routes/app-routes';
import {BottomTabs} from './tab-navigator';
import { MainNavigator } from './main-nav';
import { AuthNavigator } from '../../../auth/navigation/navigators/auth-nav';
import useAuthStore from '../../../auth/store/useAuthStore';

const Stack = createStackNavigator<AppRouteProps>();


export const AppNavigator = () => {
const {user} = useAuthStore((state) => ({user: state.user}));
console.log(user);
  return(
  <Stack.Navigator screenOptions={{headerShown:false}}>
    {!user?.id ? <Stack.Screen name={AppRoutes.Auth} component={AuthNavigator} /> : <Stack.Screen name={AppRoutes.MainNav} component={MainNavigator} />}
  </Stack.Navigator>
  );
}