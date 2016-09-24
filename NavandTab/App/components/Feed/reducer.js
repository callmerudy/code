import { cardStackReducer } from 'react-native-navigation-redux-helpers';

const initialState = {
	key: 'feed',
	index: 0,
	routes: [
		{
			key: 'feeds',
			title: 'Items'
		},
	],
};

module.exports = cardStackReducer(initialState);
