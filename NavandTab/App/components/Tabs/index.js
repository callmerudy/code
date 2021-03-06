import { View, Text, TabBarIOS } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import Feed from '../Feed';
import Post from '../Post';
import Profile from '../Profile';
import { connect } from 'react-redux';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';

const { jumpTo } = navigationActions;

class Tabs extends Component {
	_renderTabContent(tab) {

		if (tab.key === 'post') {
			return (
				<Post />
			);
		}

		if (tab.key === 'feed') {
			return (
				<Feed />
			);
		}

		if (tab.key === 'profile') {
			return (
				<Profile />
			);
		}

		return <Text>Hello there</Text>;
	}

	render() {
		const { dispatch, navigation } = this.props;
		const children = navigation.routes.map( (tab, i) => {
			return (
				<TabBarIOS.Item key={tab.key}
						icon={tab.icon}
						selectedIcon={tab.selectedIcon}
						title={tab.title} onPress={ () => dispatch(jumpTo(i, navigation.key)) }
						selected={this.props.navigation.index === i}>
						{ this._renderTabContent(tab) }
				</TabBarIOS.Item>
			);
		});
		return (
			<TabBarIOS tintColor="black">
				{children}
			</TabBarIOS>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
	return {
		navigation: state.get('tabs')
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
