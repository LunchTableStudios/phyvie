import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../components/home/screens';
import CharacterSelectScreen from '../components/characterSelect/screens';

const AppRoutes = createStackNavigator( 
	{
		Home : {
			screen : HomeScreen
		},
		CharacterSelect : {
			screen : CharacterSelectScreen
		}
	},
	{
		headerMode : 'none'
	}
);

export default createAppContainer( AppRoutes );