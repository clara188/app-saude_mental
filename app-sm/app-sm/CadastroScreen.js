import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';

const CadastroScreen = () => {
    const { height, width } = useWindowDimensions();
    const isPortrait = height > width;

    useEffect(() => {
        console.log('Componente CadastroScreen renderizado');
    }, []);

    return (
        <View style={styles.container}>
            <View style={[styles.form, isPortrait ? styles.formPortrait : styles.formLandscape]}>
                <View style={styles.formHeader}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Cadastre-se</Text>
                    </View>
                </View>

                <View style={styles.inputGroup}>
                    <View style={styles.inputBox}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu nome completo"
                        />
                    </View>

                    <View style={styles.inputBox}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            placeholder="Digite sua senha"
                        />
                    </View>

                    <View style={styles.inputBox}>
                        <Text style={styles.label}>Celular</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="phone-pad"
                            placeholder="(xx) xxxx-xxxx"
                        />
                    </View>

                    <View style={styles.inputBox}>
                        <Text style={styles.label}>Confirme sua Senha</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            placeholder="Digite sua senha novamente"
                        />
                    </View>

                    <View style={styles.inputBox}>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="email-address"
                            placeholder="Digite seu e-mail"
                        />
                    </View>
                </View>

                <View style={styles.continueButton}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Continuar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b25cf8f1',
        padding: 0,
    },
    form: {
        backgroundColor: '#fff',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 50,
            height: 50,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
        borderRadius: 20,
    },
    formPortrait: {
        width: '80%',
        height: '80%',
    },
    formLandscape: {
        width: '50%',
        height: '100%',
    },
    formHeader: {
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    title: {
        flex: 1,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: '#842acef1',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
});

export default CadastroScreen;