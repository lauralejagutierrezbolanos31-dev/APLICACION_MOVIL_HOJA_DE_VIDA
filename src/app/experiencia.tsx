
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function Experiencia() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.titulo}>Mi experiencia</Text>
      <Text style={styles.subtitulo}>
        Mis conocimientos y habilidades para el mundo laboral.
      </Text>

      <View style={styles.card}>
        <View style={styles.icono}>
          <Ionicons name="briefcase-outline" size={32} color="#145c93" />
        </View>

        <Text style={styles.nombre}>Experiencia en formación</Text>

        <Text style={styles.institucion}>
          Proyectos académicos - SENA
        </Text>

        <Text style={styles.descripcion}>
          Durante mi formación he participado en actividades y proyectos
          relacionados con el análisis y desarrollo de software.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.nombre}>Conocimientos técnicos</Text>

        <Text style={styles.habilidad}>• Python</Text>
        <Text style={styles.habilidad}>• JavaScript</Text>
        <Text style={styles.habilidad}>• HTML y CSS</Text>
        <Text style={styles.habilidad}>• React</Text>
        <Text style={styles.habilidad}>• PostgreSQL</Text>
        <Text style={styles.habilidad}>• Git y GitHub</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.nombre}>Habilidades personales</Text>

        <Text style={styles.habilidad}>• Trabajo en equipo</Text>
        <Text style={styles.habilidad}>• Liderazgo</Text>
        <Text style={styles.habilidad}>• Organización</Text>
        <Text style={styles.habilidad}>• Responsabilidad</Text>
        <Text style={styles.habilidad}>• Dedicación y puntualidad</Text>
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
    width: 58,
    height: 58,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#145c93',
    marginBottom: 10,
  },
  institucion: {
    color: '#8a7547',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descripcion: {
    color: '#666666',
    lineHeight: 22,
  },
  habilidad: {
    fontSize: 15,
    color: '#555555',
    marginTop: 9,
  },
});
