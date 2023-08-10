import { StyleSheet } from 'react-native';

import sharedStyles from '../../../../views/Styles';

const styles = StyleSheet.create({
	audioContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		height: 56,
		borderWidth: 1,
		borderRadius: 4,
		marginBottom: 6
	},
	playPauseButton: {
		alignItems: 'center',
		marginLeft: 16,
		height: 32,
		width: 32,
		borderRadius: 4,
		justifyContent: 'center'
	},
	sliderContainer: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
		height: '100%'
	},
	slider: {
		marginRight: 12,
		height: '100%',
		justifyContent: 'center',
		flex: 1
	},
	line: {
		height: 4,
		borderRadius: 2,
		zIndex: 1,
		position: 'absolute',
		width: '100%'
	},
	duration: {
		width: 40,
		marginHorizontal: 12,
		fontSize: 14,
		...sharedStyles.textRegular
	},
	thumbSlider: {
		height: 12,
		width: 12,
		borderRadius: 6,
		zIndex: 3
	}
});

export default styles;
