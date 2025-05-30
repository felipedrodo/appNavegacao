import React from "react";
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                    />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                    />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go Back"
                    onPress={() => navigation.goBack()}
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
        backgroundColor: '#add8e6',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#f0f8ff',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
});