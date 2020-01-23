import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import characterSelectReducer from '../components/characterSelect/reducers';

const rootPersistConfig = {
	key : 'root',
	storage : AsyncStorage
}

const rootReducer = combineReducers( {
	characterSelectReducer : characterSelectReducer
} );

export default persistReducer( rootPersistConfig, rootReducer );