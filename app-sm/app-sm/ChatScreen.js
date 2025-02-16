// ChatScreen
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, ScrollView } from 'react-native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Olá, nós somos uma plataforma de atendimento psicológico e estamos aqui para ajudar você! Você gostaria de conversar com um especialista através do chat?', sent: false },
    { id: 2, text: 'Olá, sim eu gostaria de conversar com um especialista.', sent: true },
    { id: 3, text: 'Certo, iremos encaminhar um psicólogo para conversar com você.', sent: false },
    { id: 4, text: 'Ok.', sent: true }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: inputText, sent: true }]);
      setInputText('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.chatContainer}>
        {messages.map(message => (
          <View key={message.id} style={[styles.message, message.sent && styles.sent]}>
            <Text>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem..."
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSend}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffbdfd',
    padding: 20,
  },
  chatContainer: {
    flex: 1,
    marginBottom: 10,
  },
  message: {
    backgroundColor: '#e4f1cb',
    padding: 20,
    borderRadius: 8,
    marginVertical: 5,
    maxWidth: '70%',
  },
  sent: {
    alignSelf: 'flex-end',
    backgroundColor: '#bde0ff',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
});

export default ChatScreen;
