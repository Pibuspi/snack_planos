import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="iOS e Android" />

      <View style={styles.content}>
        <Text style={styles.title}>Primeiro e segundo plano</Text>
        <Text style={styles.text}>
          Entenda o que acontece quando um aplicativo está aberto na tela e
          quando continua fora de foco.
        </Text>

        <View style={styles.card}>
          <Text style={styles.subtitle}>O que você vai encontrar</Text>
          <Text style={styles.text}>
            A navegação inferior apresenta o conceito de primeiro plano, o
            conceito de segundo plano e uma comparação direta entre iOS e
            Android.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Ideia principal</Text>
          <Text style={styles.text}>
            O sistema operacional decide quanta atividade pode continuar fora
            da tela para preservar bateria, memória e segurança.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  subtitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 15,
  },
  card: {
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
});

export default HomeScreen;
