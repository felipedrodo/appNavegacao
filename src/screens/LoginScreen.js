import React, {useState} from "react";
import { Button, Dimensions, StyleSheet, Text, View, TextInput, Alert } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [usuario = 'usuario', setUsuario] = useState('');
    const [senha = 'senha', setSenha] = useState('');

    const verificarCampos = () => {
     if (usuario == usuario && senha != senha) {
          Alert.alert('Senha incorreta.');
          setSenha('');
        } else if (usuario != usuario && senha == senha) {
            Alert.alert('Usuário incorreto.');
            setUsuario('');
            setSenha('');
        } else if (usuario != usuario && senha != senha) {
          Alert.alert('Usuário e senha incorretos.');
          setUsuario('');
          setSenha('');
        } else {
         Alert.alert('Bem vindo ao site!');
          navigation.navigate('Home');
        }
      };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>LOGIN SCREEN</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite o seu usuário:'
                keyboardType='default'
                value={usuario}
                onChangeText={setUsuario}
            />
            <TextInput
                style={styles.input}
                placeholder='Digite a sua senha:'
                keyboardType='senha'
                value={senha}
                onChangeText={setSenha}
            />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Entrar"
                        onPress={verificarCampos()}
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