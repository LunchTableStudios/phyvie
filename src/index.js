import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import AppRoutes from './routing';

import { store, persistor } from './store';

class App extends Component
{
	render()
	{
		return(
			<Provider store={ store }>
				<PersistGate loading={ null } persistor={ persistor }>
					<AppRoutes />
				</PersistGate>
			</Provider>
		);
	}
};

export default App;
