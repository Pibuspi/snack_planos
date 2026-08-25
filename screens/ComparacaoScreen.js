import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';

const ComparacaoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="Comparação" />

      <View style={styles.content}>
        <Text style={styles.title}>iOS x Android</Text>
        <Text style={styles.text}>
          Os dois sistemas protegem bateria, memória e privacidade, mas usam
          estratégias diferentes para o trabalho fora da tela.
        </Text>

        <View style={styles.rowHeader}>
          <Text style={styles.headerText}>Situação</Text>
          <Text style={styles.headerText}>iOS</Text>
          <Text style={styles.headerText}>Android</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Visível</Text>
          <Text style={styles.cell}>Interface ativa e responsiva.</Text>
          <Text style={styles.cell}>Activity ativa e responsiva.</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Fora da tela</Text>
          <Text style={styles.cell}>Tende à suspensão rápida.</Text>
          <Text style={styles.cell}>Pode ficar em cache ou ser interrompido.</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Retorno</Text>
          <Text style={styles.cell}>Deve restaurar o estado salvo.</Text>
          <Text style={styles.cell}>Deve recriar ou restaurar o estado.</Text>
        </View>

        <Text style={styles.note}>
          As regras podem variar conforme a versão do sistema, as permissões e
          o tipo de tarefa executada.
        </Text>
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
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 15,
  },
  rowHeader: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#6200ee',
    borderRadius: 8,
    marginBottom: 8,
  },
  headerText: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    padding: 12,
    marginBottom: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  label: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  cell: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
    paddingLeft: 4,
  },
  note: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
    marginTop: 15,
  },
});

export default ComparacaoScreen;
