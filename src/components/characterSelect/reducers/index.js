import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions/types';

const INITIAL_STATE = {
	characters : []
}

const reducer = ( state = INITIAL_STATE, action ) =>
{
	let { type, payload } = action;

	switch( type )
	{
		case ADD_CHARACTER :
			break;

		case REMOVE_CHARACTER :
			break;
	}

	return state;
}

const persistConfig = {
	key : 'characters',
	storage : AsyncStorage
}

const persistedReducer = persistReducer( persistConfig, reducer );

export default persistedReducer;