import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import { ThemeAlpha } from '../theme/Themes';

export default function MyTasks() {
    return (
        <View style={styles.container}>
            <Text>My tasks come here!</Text>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ThemeAlpha.Colors.colorE,
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
