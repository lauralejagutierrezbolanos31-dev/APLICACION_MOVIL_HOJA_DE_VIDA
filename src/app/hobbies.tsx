
import { Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TarjetaHobby from '../components/TarjetaHobby';

const hobbies = [
  {
    nombre: 'Viajar',
    descripcion: 'Conocer nuevos lugares y culturas.',
    icono: 'airplane-outline' as const,
  },
  {
    nombre: 'Aprender',
    descripcion: 'Adquirir nuevos conocimientos y habilidades.',
    icono: 'book-outline' as const,
  },
  {
    nombre: 'Tecnología',
    descripcion: 'Explorar herramientas y novedades tecnológicas.',
    icono: 'laptop-outline' as const,
  },
  {
    nombre: 'Compartir',
    descripcion: 'Disfrutar tiempo con familiares y amigos.',
    icono: 'people-outline' as const,
  },
];

export default function Hobbies() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.titulo}>Mis hobbies</Text>

      <Text style={styles.subtitulo}>
        Actividades que disfruto en mi tiempo libre.
      </Text>

      {hobbies.map((hobby) => (
        <TarjetaHobby
          key={hobby.nombre}
          nombre={hobby.nombre}
          descripcion={hobby.descripcion}
          icono={hobby.icono}
        />
      ))}
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
});
