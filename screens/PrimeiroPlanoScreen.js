import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';

const PrimeiroPlanoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="1º plano" />

      <View style={styles.content}>
        <Text style={styles.title}>Aplicativo em primeiro plano</Text>
        <Text style={styles.text}>
          É o estado em que o aplicativo está aberto, visível e recebendo a
          atenção do usuário.
        </Text>

        <View style={styles.card}>
          <Text style={styles.subtitle}>iOS</Text>
          <Text style={styles.text}>
            A tela ativa pode atualizar sua interface e responder às ações do
            usuário. O app deve manter o trabalho necessário e evitar tarefas
            longas que prejudiquem a experiência.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Android</Text>
          <Text style={styles.text}>
            A Activity visível pode atualizar a interface e reagir às ações do
            usuário. O ciclo de vida informa quando a tela ganhou ou perdeu o
            foco.
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
    fontSize: 20,
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
    marginBottom: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
});

export default PrimeiroPlanoScreen;
