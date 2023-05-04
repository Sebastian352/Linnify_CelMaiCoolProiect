import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabRouteProps, TabRoutes} from '../routes/tab-routes';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../../screens/homeScreen';
import FavoriteScreen from '../../screens/favoriteScreen';
import AccountScreen from '../../screens/accountScreen';
import {HomeIcon, PersonIcon, UmbrellaIcon} from '../../../../assets/icons';
import {Pressable, StyleSheet, Text} from 'react-native';
import {TabBar} from 'react-native-tab-view';
import {CardStyleInterpolators} from '@react-navigation/stack';
import EditScreen from '../../screens/editScreen';
import { AppRoutes } from '../routes/app-routes';

const Tab = createBottomTabNavigator<TabRouteProps>();

export const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen
        name={TabRoutes.Home}
        component={HomeScreen}
        options={{tabBarIcon: homeIcon}}
      />
      <Tab.Screen
        name={TabRoutes.Favorites}
        component={FavoriteScreen}
        options={{tabBarIcon: favoriteIcon}}
      />
      <Tab.Screen
        name={TabRoutes.Account}
        component={AccountScreen}
        options={{tabBarIcon: accountIcon,headerRight:editButton,headerShown:true}}
      />
    </Tab.Navigator>
  );
};

const tabOptions = (focused: boolean, color: string, children: string) => {
  return {
    tabBarStyle: {...styles.bottomTab, paddingBottom: 10},
    headerShown: false,
    tabBarLabel: tabBarLabel,
  };
};

const tabBarLabel = ({focused, color, children}) => {
  let size: number;
  if (focused) {
    size = 20;
  } else {
    size = 15;
  }
  return (
    <Text style={{fontSize: size, color: color, fontWeight: 'bold'}}>
      {children}
    </Text>
  );
};


const editButton = () =>{
const navigation = useNavigation();
  return(
    <Pressable style={styles.editButton}  onPress={()=> navigation.navigate(AppRoutes.Edit)}>
      <Text style={styles.editTextStyle}>Edit</Text>
    </Pressable>
  )
}

const homeIcon = () => {
  return <HomeIcon width={50} height={50} />;
};

const favoriteIcon = () => {
  return <UmbrellaIcon width={50} height={50} />;
};

const accountIcon = () => {
  return <PersonIcon width={50} height={50} />;
};

const styles = StyleSheet.create({
  bottomTab: {
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
    position: 'absolute',
  },
  editButton:{
    paddingRight:16,
  },
  editTextStyle:{
    fontWeight:'bold',
    fontSize:20,
  }
});
