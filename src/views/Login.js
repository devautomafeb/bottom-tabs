import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ThemeAlpha } from '../theme/Themes';

import Loading from '../views/Loading';

const TitleLogin = () => {
    return (
        <View>
            <Text style={styles.title}>Login é aqui</Text>
            <Text style={styles.subtitle}>Seu novo curso parte daqui</Text>
        </View>
    )
}

export default function Login() {

    const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
    return (
        <View  style ={styles.container}>
            {fontsLoaded ? <TitleLogin /> : <Loading />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ThemeAlpha.Colors.colorB,
        alignItems: 'center',
        justifyContent: 'center',
      },
    title: {
        fontSize: 20,
        fontFamily: ThemeAlpha.Fonts.BOLD,
        color: ThemeAlpha.Colors.colorA
    },
    subtitle: {
        fontSize: 16,
        fontFamily: ThemeAlpha.Fonts.REGULAR
    }
});