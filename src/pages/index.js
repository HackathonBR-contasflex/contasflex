import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome5, Entypo } from 'react-native-vector-icons';
import { Animated } from 'react-native';
import { PanGestureHandler, State, ScrollView, NativeViewGestureHandler } from 'react-native-gesture-handler';

import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Menu from '../components/Menu';
import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation, Scroll, TitleContent, Aba, Currency, Bell } from './styles';

export default function Main() {

	let offset = 0
	const translateY = new Animated.Value(0);
	const animatedEvent = Animated.event(
		[
			{
				nativeEvent: {
					translationY: translateY
				}
			}
		],
		{ useNativeDriver: true }
	)

	function onHandlerStateChanged(event) {
		if (event.nativeEvent.oldState === State.ACTIVE) {
			let opened = false
			const { translationY } = event.nativeEvent
			offset += translationY

			if (translationY >= 100) {
				opened = true
			} else {
				translateY.setValue(offset)
				translateY.setOffset(0)
				offset = 0
			}

			Animated.timing(translateY, {
				toValue: opened ? 405 : 0,
				duration: 200,
				useNativeDriver: true
			}).start(() => {
				offset = opened ? 405 : 0
				translateY.setOffset(offset)
				translateY.setValue(0)
			})


		}
	}

	return (
		<Container>
			<Header translateY={translateY} />
			<Content>
				<Menu translateY={translateY} />
				<PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandlerStateChanged}>

					<Scroll horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{
						transform: [{
							translateY: translateY.interpolate({
								inputRange: [-350, 0, 405],
								outputRange: [-50, 0, 405],
								extrapolate: 'clamp'
							}),
						}]
					}}>
						<Card >
							<CardHeader>
								<TitleContent>
									<FontAwesome5 name="comments-dollar" size={28} color="#666" />
									<Aba>Contas</Aba>
								</TitleContent>
								<MaterialIcons name="visibility-off" size={28} color="#666" />
							</CardHeader>
							<CardContent>
								<Title>Nubank</Title>
								<Description>R$ R$ 54.567,93</Description>
							</CardContent>
							<CardContent>
								<Title>Bradesco</Title>
								<Description>R$ 1.611,65</Description>
							</CardContent>
							<CardContent>
								<Title>C6 Bank</Title>
								<Description>R$ 3.000,00</Description>
							</CardContent>
							<CardContent>
								<Title>Picpay</Title>
								<Description>R$ 150,00</Description>
							</CardContent>
							<CardContent>
								<Title>iFood</Title>
								<Description>R$ 170,65</Description>
							</CardContent>
							<CardFooter>
								<Annotation>
									<Title>Total </Title>
									<Currency>R$ 59.850,70</Currency>
								</Annotation>
							</CardFooter>
						</Card>

						<Card >
							<CardHeader>
								<TitleContent>
									<MaterialIcons name="credit-card" size={28} color="#666" />
									<Aba>Cartões</Aba>
								</TitleContent>
								<MaterialIcons name="visibility-off" size={28} color="#666" />
							</CardHeader>
							<CardContent>
								<Title>Nubank</Title>
								<Description>R$ R$ 4.567,93</Description>
							</CardContent>
							<CardContent>
								<Title>Bradesco</Title>
								<Description>R$ 611,65</Description>
							</CardContent>
							<CardContent>
								<Title>C6 Bank</Title>
								<Description>R$ 3.000,00</Description>
							</CardContent>
							<CardContent>
								<Title>Renner</Title>
								<Description>R$ 150,00</Description>
							</CardContent>
							<CardContent>
								<Title>BMG</Title>
								<Description>R$ 0,65</Description>
							</CardContent>
							<CardFooter>
								<Annotation>
									<Title>Total à pagar</Title>
									<Currency>R$ 7.850,70</Currency>
								</Annotation>
							</CardFooter>
						</Card>

						<Card >
							<CardHeader>
								<TitleContent>
									<Entypo name="bell" size={28} color="#666" />
									<Aba>Alertas</Aba>
								</TitleContent>
								<MaterialIcons name="visibility-off" size={28} color="#666" />
							</CardHeader>
							<CardContent>
								<Title>Nubank</Title>
								<Bell>DATA DE VENCIMENTO VALOR ACIMA DE R$ 1.600</Bell>
							</CardContent>
							<CardContent>
								<Title>Bradesco</Title>
								<Bell>DATA DE VENCIMENTO VALOR ACIMA DE R$ 600 COBRANÇA COM ”NETFLIX”</Bell>
							</CardContent>
							<CardContent>
								<Title>C6 Bank</Title>
								<Bell>DATA DE VENCIMENTO VALOR ACIMA DE R$ 100 COBRANÇA COM ”TIM”</Bell>
							</CardContent>
							
							<CardFooter>
								<Annotation>
									<Title>Você possui </Title>
									<Currency>3 Alertas </Currency>
								</Annotation>
							</CardFooter>
						</Card>
					</Scroll>


				</PanGestureHandler>



			</Content>
			<Tabs translateY={translateY} />
		</Container>
	);
}

/*

	 <Card style={{
						transform: [{
							translateY: translateY.interpolate({
								inputRange: [-350, 0, 405],
								outputRange: [-50, 0, 405],
								extrapolate: 'clamp'
							}),
						}]
					}}>
						<CardHeader>
							<Icon name="attach-money" size={28} color="#666" />
							<Icon name="visibility-off" size={28} color="#666" />
						</CardHeader>
						<CardContent>
							<Title>Saldo disponível</Title>
							<Description>R$ 157.611,65</Description>
						</CardContent>
						<CardFooter>
							<Annotation>
								Transferência recebida de Diego Shell Fernandes hoje às 06:00 hrs
							</Annotation>
						</CardFooter>
					</Card>

*/