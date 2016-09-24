import globalNavigation from './components/GlobalNav/reducer';
import tabs from './components/Tabs/reducer';
import feed from './components/Feed/reducer';
import { combineReducers } from 'redux-immutable';

const applicationReducers = {
	globalNavigation: globalNavigation,
	tabs,
	feed
};
export default function createReducer() {
	return combineReducers(applicationReducers);
}
