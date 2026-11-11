
import { Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TarjetaEstudio from '../components/TarjetaEstudio';

export default function Estudios() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.titulo}>Mi formación académica</Text>

      <Text style={styles.subtitulo}>
        Mi proceso de aprendizaje y crecimiento profesional.
      </Text>

      <TarjetaEstudio
        nombre="Tecnólogo en Análisis y Desarrollo de Software"
        institucion="SENA"
        periodo="Actualmente"
        enCurso={true}
      />

      <TarjetaEstudio
        nombre="Técnico en Programación de Software"
        institucion="Formación técnica"
        periodo="Finalizado en 2025"
        enCurso={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f5ef',
    padding: 22,
    paddingTop: 45,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#145c93',
  },
  subtitulo: {
    color: '#777777',
    marginTop: 8,
    marginBottom: 25,
    fontSize: 14,
  },
});
