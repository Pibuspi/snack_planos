import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';

const SegundoPlanoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="2º plano" />

      <View style={styles.content}>
        <Text style={styles.title}>Aplicativo em segundo plano</Text>
        <Text style={styles.text}>
          É o estado em que o aplicativo deixa de estar visível. O sistema pode
          suspender, limitar ou encerrar processos para administrar recursos.
        </Text>

        <View style={styles.card}>
          <Text style={styles.subtitle}>iOS</Text>
          <Text style={styles.text}>
            Normalmente, o app é suspenso pouco depois de sair da tela. Tarefas
            específicas podem continuar por tempo limitado ou por mecanismos
            próprios do sistema, quando autorizados.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Android</Text>
          <Text style={styles.text}>
            O app pode permanecer em cache e ter seu processo interrompido
            quando necessário. Serviços e tarefas em segundo plano dependem do
            ciclo de vida, das versões do sistema e das permissões utilizadas.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Atenção</Text>
          <Text style={styles.text}>
            Segundo plano não significa execução ilimitada. Um aplicativo deve
            salvar seu estado e retomar o trabalho quando voltar a ficar ativo.
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

export default SegundoPlanoScreen;
