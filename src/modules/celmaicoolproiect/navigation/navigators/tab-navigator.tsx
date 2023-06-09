import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabRouteProps, TabRoutes} from '../routes/tab-routes';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../../screens/homeScreen';
import FavoriteScreen from '../../screens/favoriteScreen';
import AccountScreen from '../../screens/accountScreen';
import {
  BookMarkIcon,
  HomeIcon,
  PersonIcon,
  PlayCircleIcon,
  ProfileIcon,
  UmbrellaIcon,
} from '../../../../assets/icons';
import {Pressable, StyleSheet, Text} from 'react-native';
import {TabBar} from 'react-native-tab-view';
import {CardStyleInterpolators} from '@react-navigation/stack';
import EditScreen from '../../screens/editScreen';
import {AppRoutes} from '../routes/app-routes';
import {COLORS} from '../../../../constants/themes';

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
        options={{
          tabBarIcon: accountIcon,
          headerRight: editButton,
          headerShown: true,
          headerTitle: '',
          headerStyle: styles.headerStyle,
          headerShadowVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

const tabOptions = (focused: boolean, color: string, children: string) => {
  return {
    tabBarStyle: {...styles.bottomTab, paddingBottom: 10},
    headerShown: false,
    tabBarShowLabel: false,
  };
};

const editButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.editButton}
      onPress={() => navigation.navigate(AppRoutes.Edit)}>
      <Text style={styles.editTextStyle}>...</Text>
    </Pressable>
  );
};

const homeIcon = ({focused}) => {
  let color = '';
  if (focused) {
    color = COLORS.secondary;
  } else {
    color = COLORS.iconWhite;
  }
  return <PlayCircleIcon width={40} height={40} fill={color} />;
};

const favoriteIcon = ({focused}) => {
  let color = '';
  if (focused) {
    color = COLORS.secondary;
  } else {
    color = COLORS.iconWhite;
  }
  return <BookMarkIcon width={48} height={48} fill={color} />;
};

const accountIcon = ({focused}) => {
  let color = '';
  if (focused) {
    color = COLORS.secondary;
  } else {
    color = COLORS.iconWhite;
  }
  return <ProfileIcon width={40} height={40} fill={color} />;
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: COLORS.primary,
  },
  bottomTab: {
    bottom: 4,
    left: 4,
    right: 4,
    borderRadius: 32,
    height: 92,
    position: 'absolute',
    backgroundColor: COLORS.gray,
  },
  editButton: {
    paddingRight: 16,
    marginTop: -32,
  },
  editTextStyle: {
    fontWeight: 'bold',
    color: COLORS.lightWhite,
    fontSize: 48,
  },
});
