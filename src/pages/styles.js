import {Animated} from 'react-native'
import styled from 'styled-components/native'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

export const Container = styled.View`
	flex: 1;
	background: #080B2C;
	padding-top: ${getStatusBarHeight()}px;
	justify-content: center;
`

export const Scroll = styled(Animated.ScrollView)`
	flex: 1;
	border-radius: 4px;
	position: absolute;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
`;

export const Content = styled.View`
	flex: 1;
	z-index: 5;
	max-height: 65%;
`

export const Card = styled(Animated.View)`
	flex:1;
	width: 380px;
	background: #FFF;
	margin: 0 20px;
	border-radius: 20px;
`

export const CardHeader = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 30px;
`

export const CardContent = styled.View`
	flex: 1;
	padding: 0 20px;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
`

export const Title = styled.Text`
	font-size: 18px;
	color: #999;
`

export const Description = styled.Text`
	font-size: 18px;
	color: #333;
	max-width: 200px;
`

export const CardFooter = styled.View`
	padding: 30px;
	background: #ACEBFF;
	border-radius: 20px;
`

export const Annotation = styled.View`
	font-size: 13px;
	justify-content: space-between;
	color: #333;
`

export const TitleContent = styled.View`
flex-direction: row;
align-items: center;
`

export const Aba = styled.Text`
	font-size: 26px;
	padding: 0 15px;
	color: #999;
`

export const Currency = styled.Text`
	font-size: 26px;
	color: #000;
`

export const Bell = styled.Text`
	font-size: 15px;
	color: #333;
	text-align: justify;
	max-width: 200px;`