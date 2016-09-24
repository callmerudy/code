import { tabReducer } from 'react-native-navigation-redux-helpers';

const tabs = {
  routes: [
    { key: 'post', /**icon: simpleIcon,*/ title: 'Post' },
		{ key: 'feed', /**icon: simpleIcon,*/  title: 'Feed' },
    { key: 'profile',/**icon: simpleIcon,*/  title: 'Profile' }
  ],
  key: 'Tabs',
  index: 1 // index number to initialScreen
};

module.exports = tabReducer(tabs);
