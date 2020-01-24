import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
	SafeAreaView,
	Text,
	Button
} from 'react-native';

import { addCharacter, removeCharacter } from '../actions';

const mapStateToProps = ( state ) =>
{
	return {
		loadedCharacters : state.characters.loaded
	};
};

const mapActionsToProps = ( dispatch ) =>
{
	return {
		addCharacterAction : () => dispatch( addCharacter() ),
		removeCharacterAction : () => dispatch( removeCharacter() )
	};
};

class CharacterSelectScreen extends Component
{
	render()
	{
		return(
			<SafeAreaView>
				<Text>Select</Text>
				<Text>{ this.props.loadedCharacters.length }</Text>
				<Button title="add character" onPress={ () => this.props.addCharacterAction() } />
				<Button title="remove character" onPress={ () => this.props.removeCharacterAction() } />
			</SafeAreaView>
		);
	};
};

export default connect( mapStateToProps, mapActionsToProps )( CharacterSelectScreen );
