import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../components/home/screens';
import CharacterScreen from '../components/characters/screens';

const AppRoutes = createStackNavigator( 
	{
		Home : {
			screen : HomeScreen
		},
		Characters : {
			screen : CharacterScreen
		}
	},
	{
		headerMode : 'none'
	}
);

export default createAppContainer( AppRoutes );