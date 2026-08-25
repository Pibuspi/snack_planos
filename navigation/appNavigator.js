import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import PrimeiroPlanoScreen from '../screens/PrimeiroPlanoScreen';
import SegundoPlanoScreen from '../screens/SegundoPlanoScreen';
import ComparacaoScreen from '../screens/ComparacaoScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === '1º plano') {
            iconName = focused ? 'play-circle' : 'play-circle-outline';
          } else if (route.name === '2º plano') {
            iconName = focused ? 'pause-circle' : 'pause-circle-outline';
          } else if (route.name === 'Comparação') {
            iconName = focused ? 'swap-horizontal' : 'swap-horizontal-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="1º plano" component={PrimeiroPlanoScreen} />
      <Tab.Screen name="2º plano" component={SegundoPlanoScreen} />
      <Tab.Screen name="Comparação" component={ComparacaoScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
