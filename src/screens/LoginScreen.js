import { useState } from "react";
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity } from "react-native";

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const usuarioCorreto = 'usuario';
  const senhaCorreta = 'senha';

  const verificarCampos = () => {
    if (usuario !== usuarioCorreto || senha !== senhaCorreta) {
      Alert.alert('Usuário ou senha incorretos.');
      setUsuario('');
      setSenha('');
    } else {
      Alert.alert('Login feito, Bem vindo!');
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN SCREEN</Text>
      <TextInput
        style={styles.input}
        placeholder='usuario:'
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder='senha:'
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.botao} onPress={verificarCampos}>
        <Text style={styles.botaoTexto}>LOGAR</Text>
      </TouchableOpacity>
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
    marginBottom: 40,
  },
  input: {
    width: '75%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#f0f8ff',
  },
  botao: {
    backgroundColor: 'lightcyan',
    padding: 10,
    paddingHorizontal: 60,
    borderRadius: 10,
    margin: 50,
    marginBottom: 30,
  },
  botaoTexto: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'System', 
  },
});
