import { View, Platform, NavigationExperimental,
	TouchableHighlight, Image, Text } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import Feeds from '../Feeds';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';

const {
  popRoute,
  pushRoute
} = actions;

const {
	Header: NavigationHeader,
	CardStack: NavigationCardStack
} = NavigationExperimental;
const NavigationHeaderBackButton = require('NavigationHeaderBackButton');

class Feed extends Component {
	render() {
		return (
			<NavigationCardStack
				onNavigate={ () => {} }
				direction={'horizontal'}
				navigationState={this.props.navigation}
				renderScene={this._renderScene.bind(this)}
				renderOverlay={this._renderHeader.bind(this)}
				style={styles.main}
			/>
		);
	}

	_renderHeader(props) {
		const showHeader = props.scene.route.title &&
			(Platform.OS === 'ios' || props.scene.route.key === 'details');

		if (showHeader) {
			return (
				<NavigationHeader
				{...props}
				style={styles.navHeader}
				renderTitleComponent={this._renderTitleComponent.bind(this)}
				renderLeftComponent={this._renderLeftComponent.bind(this)}
				renderRightComponent={this._renderRightComponent.bind(this)}
				/>
			);
		}

		return null;
	}

	_renderTitleComponent(props) {
		return (
			<NavigationHeader.Title>
				{props.scene.route.title}
			</NavigationHeader.Title>
		);
	}

	_renderLeftComponent(props) {
		const { dispatch, navigation } = this.props;

		if (props.scene.route.showBackButton) {
			return (
				<NavigationHeaderBackButton onPress={() => dispatch(popRoute(navigation.key))} />
			);
		}
		return null;
	}

	_renderRightComponent(props) {
		if (props.scene.route.key === 'list') {
			return (
				<TouchableHighlight
					style={styles.buttonContainer}
					onPress={this._onAddItem.bind(this)}>
					<Image
						style={styles.button}
						source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
				</TouchableHighlight>
			);
		}
		return null;
	}

	_renderScene(props) {
		if (props.scene.route.key === 'feeds') {
			const marginTop = Platform.OS === 'ios' ? NavigationHeader.HEIGHT : 0;
			return (
				<View style={{ marginTop }}>
					<Feeds onSelectItem={this._onSelectItem.bind(this)} />
				</View>
			);
		}
	}
	_onAddItem() {
		return null
	}
	_onSelectItem() {
		return null
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
	return {
		navigation: state.get('feed')
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
