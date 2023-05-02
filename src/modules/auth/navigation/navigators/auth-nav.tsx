import {createStackNavigator} from '@react-navigation/stack';
import {AuthRouteProps, AuthRoutes} from '../routes/auth-routes';
import LoginScreen from '../../screens/LoginScreen';

const Stack = createStackNavigator<AuthRouteProps>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AuthRoutes.Auth} component={LoginScreen} />
    </Stack.Navigator>
  );
};
