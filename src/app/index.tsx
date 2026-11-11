
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import MiBoton from '../components/MiBoton';

export default function DatosPersonales() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.avatar}>
        <Ionicons name="person" size={65} color="#145c93" />
      </View>

      <Text style={styles.nombre}>
        Laura Alejandra Gutiérrez Bolaños
      </Text>

      <Text style={styles.titulo}>
        Aprendiz de Análisis y Desarrollo de Software
      </Text>

      {/* Perfil personal */}
      <View style={styles.card}>
        <Text style={styles.tituloSeccion}>Mi perfil</Text>

        <Text style={styles.valor}>
          Soy una persona responsable, dedicada y comprometida con mi
          aprendizaje. Me gusta trabajar en equipo, compartir ideas y
          aprender cosas nuevas. Actualmente estoy formándome como
          tecnóloga en Análisis y Desarrollo de Software en el SENA.
          Me interesa la tecnología y la programación, y siempre busco
          mejorar mis habilidades y adquirir nuevos conocimientos.
        </Text>
      </View>

      {/* Datos personales */}
      <View style={styles.card}>
        <Text style={styles.tituloSeccion}>Datos personales</Text>

        <Text style={styles.etiqueta}>Formación actual</Text>
        <Text style={styles.valor}>
          Tecnólogo en Análisis y Desarrollo de Software - SENA
        </Text>

        <Text style={styles.etiqueta}>Formación anterior</Text>
        <Text style={styles.valor}>
          Técnico en Programación de Software
        </Text>

        <Text style={styles.etiqueta}>Habilidades</Text>
        <Text style={styles.valor}>
          Trabajo en equipo, liderazgo, organización, paciencia y responsabilidad.
        </Text>
      </View>

      {/* Botones de contacto */}
      <View style={styles.botones}>
        <MiBoton
          titulo="Mi correo electrónico"
          mensaje="Contáctame por correo."
          correo="lauralejagutierrezbolanos31@gmail.com"
        />

        <MiBoton
          titulo="Mi número de celular"
          mensaje="Puedes comunicarte conmigo."
          telefono="3105713966"
        />

        <MiBoton
          titulo="Mi GitHub"
          mensaje="Conoce mis proyectos."
          github="https://github.com/lauralejagutierrezbolanos31-dev"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f5ef',
    alignItems: 'center',
    padding: 22,
    paddingTop: 45,
  },
  avatar: {
    width: 115,
    height: 115,
    borderRadius: 60,
    backgroundColor: '#e4edf5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  nombre: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#145c93',
    textAlign: 'center',
  },
  titulo: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 22,
  },
  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderRadius: 16,
    padding: 20,
    elevation: 3,
    marginBottom: 18,
  },
  tituloSeccion: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#145c93',
    marginBottom: 15,
  },
  etiqueta: {
    fontWeight: 'bold',
    color: '#8a7547',
    marginTop: 12,
  },
  valor: {
    color: '#444444',
    fontSize: 14,
    marginTop: 5,
    lineHeight: 21,
  },
  botones: {
    width: '100%',
    marginTop: 5,
    gap: 12,
  },
});
