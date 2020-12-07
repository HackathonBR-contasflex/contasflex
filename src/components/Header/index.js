import React, { useState, useEffect } from 'react';
import {Container, Top, Logo, Title} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../../assets/logo.png';

export default function Header({translateY}) {
	
	const [eixoY, setEixoY] = useState(false);
	

	useEffect(
		() => {
			setEixoY(translateY.interpolate({
				inputRange: [0, 50],
				outputRange: [false, true],
				extrapolate: 'clamp'
			}));

		},[
			translateY
		]
	);


	return (
		<Container>
			<Top>
				<Logo source={logo} />
				<Title>Everton Ferreira</Title>
			</Top>
			<Icon name={(eixoY) ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={20} color="#FFF" />
		</Container>

	)
}