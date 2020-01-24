import React, { Component } from 'react';

import {
	SafeAreaView,
	Text,
	Button
} from 'react-native';

export default class HomeScreen extends Component
{
	render()
	{
		return(
			<SafeAreaView>
				<Text>Home Screen</Text>
				<Button title="characters" onPress={ () => this.props.navigation.navigate( "Characters" ) } />
			</SafeAreaView>
		)
	}
};