import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions/types';

const INITIAL_STATE = {
	loaded : []
};

const reducer = ( state = INITIAL_STATE, action ) =>
{
	let { type } = action;

	switch( type )
	{
		case ADD_CHARACTER :
		{
			return {
				...state,
				loaded : [ ...state.loaded, { id : state.loaded.length } ]
			}
		}

		case REMOVE_CHARACTER :
		{
			return {
				...state,
				loaded : state.loaded.filter( character => character != state.loaded[ state.loaded.length - 1 ] )
			}
		}

		default :
			return state;
	}
}

const persistConfig = {
	key : 'characters',
	storage : AsyncStorage
}

const persistedReducer = persistReducer( persistConfig, reducer );

export default persistedReducer;