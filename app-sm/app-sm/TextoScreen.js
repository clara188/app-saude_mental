// TextoScreen
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';

const TextoScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.divider} />
        <View style={styles.content}>
          <Image 
            source={{ uri: 'https://blog.samisaude.com.br/wp-content/uploads/2020/07/cuide_saude_mental-696x418.jpg' }}
            style={styles.image}
          />
          <View style={styles.titleContainer}>
  <Text style={styles.title}>Saúde Mental: A Importância do Equilíbrio Emocional</Text>
</View>
<View style={styles.textContainer}>
  <Text style={styles.text}>
    A saúde mental é um dos pilares fundamentais para o bem-estar e qualidade de vida. 
    Ter saúde mental não significa apenas a ausência de transtornos, mas também a capacidade de gerir emoções, 
    manter relacionamentos saudáveis e enfrentar dificuldades de forma equilibrada.
  </Text>
  <Text style={styles.text}>
    No mundo moderno, desafios como ansiedade, depressão e síndrome de burnout são cada vez mais comuns. 
    Redes sociais, alta produtividade e pressões sociais podem contribuir para o desequilíbrio emocional. 
    Por isso, é essencial adotar práticas de autocuidado e buscar apoio quando necessário.
  </Text>
  <Text style={styles.text}>
    Algumas estratégias eficazes incluem a prática do autoconhecimento, a manutenção de uma rotina equilibrada, 
    o estabelecimento de limites saudáveis e o fortalecimento de relações de apoio. 
    Além disso, técnicas de relaxamento como meditação e atividades criativas podem contribuir para o bem-estar emocional.
  </Text>
  <Text style={styles.text}>
    A sociedade tem um papel crucial na promoção da saúde mental, combatendo estigmas e incentivando o diálogo aberto 
    sobre o tema. Empresas, escolas e governos devem investir em programas de apoio psicológico e na valorização 
    do bem-estar emocional.
  </Text>
  <Text style={styles.text}>
    Se você ou alguém que conhece enfrenta dificuldades emocionais, saiba que buscar ajuda é um passo essencial. 
    Cuidar da saúde mental é um ato de amor-próprio e contribui para uma vida mais equilibrada e significativa.
  </Text>
</View>
</View>
</ScrollView>
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  content: {
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
    textAlign: 'justify',
  },
});

export default TextoScreen;
