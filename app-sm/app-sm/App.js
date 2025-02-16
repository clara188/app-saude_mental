import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from './CadastroScreen';
import ChatScreen from './ChatScreen';
import TextoScreen from './TextoScreen';
import LoginScreen from './LoginScreen';

const { width, height } = Dimensions.get('window');
const Stack = createStackNavigator();

// Definir o componente HomeScreen fora do App
const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.circle}></View>
            <View style={styles.header}>
                <View style={styles.navigation}>
                    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.navItem}>Cadastro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.navItem}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Texto')}>
                        <Text style={styles.navItem}>Textos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                        <Text style={styles.navItem}>Chat</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.text}>
                    <Text style={styles.title}>
                        BEM VINDO AO NOSSO APP
                    </Text>
                    <Text style={styles.paragraph}>
                        Maria Clara de Andrade Mendes{'\n'}
                        Érick Gerson Araújo de Sousa
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.link}>VEJA MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Cadastro" component={CadastroScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
                <Stack.Screen name="Texto" component={TextoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: width * 0.1,
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
    },
    circle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: height,
        backgroundColor: '#9d12cc',
        borderBottomRightRadius: Math.max(width, height) / 2,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: -15,
        width: width,
        padding: width * 0.20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    navigation: {
        flexDirection: 'row',
    },
    navItem: {
        fontSize: width * 0.05,
        fontWeight: '500',
        color: 'black',
        marginLeft: width * 0.045,
    },
    content: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.25,
    },
    text: {
        maxWidth: width * 0.8,
        marginBottom: width * 0.05,
        alignItems: 'center',
    },
    title: {
        fontSize: width * 0.12,
        fontWeight: '800',
        color: 'black',
        marginBottom: width * 0.025,
        lineHeight: width * 0.15,
        textAlign: 'center',
    },
    paragraph: {
        color: 'black',
        textAlign: 'center',
    },
    link: {
        marginTop: width * 0.125,
        padding: width * 0.025,
        paddingHorizontal: width * 0.0625,
        backgroundColor: '#9d12cc',
        color: 'black',
        fontWeight: '500',
        borderRadius: width * 0.1,
    },
});

export default App;
