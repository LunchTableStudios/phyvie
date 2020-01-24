import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import characterReducer from '../components/characters/reducers';

const rootPersistConfig = {
	key : 'root',
	storage : AsyncStorage
}

const rootReducer = combineReducers( {
	characters : characterReducer
} );

export default persistReducer( rootPersistConfig, rootReducer );