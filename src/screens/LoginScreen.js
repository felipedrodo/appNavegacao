import React from "react";
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            
            
            <View style={styles.buttonContainer}>
                <Button
                    title="Entrar"
                    onPress={() => navigation.navigate('Home')}
                    />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#90EE90',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#90D5FF',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
});