
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TarjetaExperiencia from '../components/TarjetaExperiencia';

export default function Experiencia() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.titulo}>Mi experiencia</Text>

      <Text style={styles.subtitulo}>
        Mis conocimientos y habilidades para el mundo laboral.
      </Text>

      <TarjetaExperiencia
        cargo="Experiencia en formación"
        empresa="Proyectos académicos - SENA"
        periodo="Durante mi formación"
        descripcion="Durante mi formación he participado en actividades y proyectos relacionados con el análisis y desarrollo de software."
      />

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
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#145c93',
    marginBottom: 10,
  },
  habilidad: {
    fontSize: 15,
    color: '#555555',
    marginTop: 9,
  },
});
