
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function Estudios() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.titulo}>Mi formación académica</Text>
      <Text style={styles.subtitulo}>
        Mi proceso de aprendizaje y crecimiento profesional.
      </Text>

      <View style={styles.card}>
        <View style={styles.icono}>
          <Ionicons name="school-outline" size={30} color="#145c93" />
        </View>

        <Text style={styles.nombre}>Tecnólogo en Análisis y Desarrollo de Software</Text>
        <Text style={styles.institucion}>SENA</Text>
        <Text style={styles.estado}>En curso</Text>
        <Text style={styles.descripcion}>
          Formación enfocada en el análisis, diseño y desarrollo de soluciones
          de software.
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.icono}>
          <Ionicons name="book-outline" size={30} color="#145c93" />
        </View>

        <Text style={styles.nombre}>Técnico en Programación de Software</Text>
        <Text style={styles.institucion}>Formación técnica</Text>
        <Text style={styles.estadoFinalizado}>Finalizado en 2025</Text>
        <Text style={styles.descripcion}>
          Formación en fundamentos de programación y desarrollo de software.
        </Text>
      </View>
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
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 18,
    elevation: 3,
  },
  icono: {
    backgroundColor: '#e4edf5',
    width: 55,
    height: 55,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  nombre: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333333',
  },
  institucion: {
    fontSize: 15,
    color: '#145c93',
    marginTop: 8,
    fontWeight: '600',
  },
  estado: {
    color: '#ffffff',
    backgroundColor: '#145c93',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
    marginTop: 12,
    overflow: 'hidden',
  },
  estadoFinalizado: {
    color: '#8a7547',
    marginTop: 12,
    fontWeight: 'bold',
  },
  descripcion: {
    color: '#666666',
    lineHeight: 21,
    marginTop: 12,
  },
});
