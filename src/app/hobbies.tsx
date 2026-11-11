
import { View, Text, StyleSheet, ScrollView, Alert, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

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
        <Pressable
          key={hobby.nombre}
          style={styles.card}
          onPress={() =>
            Alert.alert(hobby.nombre, hobby.descripcion)
          }
        >
          <View style={styles.icono}>
            <Ionicons name={hobby.icono} size={30} color="#145c93" />
          </View>

          <View style={styles.informacion}>
            <Text style={styles.nombre}>{hobby.nombre}</Text>
            <Text style={styles.descripcion}>{hobby.descripcion}</Text>
            <Text style={styles.detalle}>Toca para conocer más</Text>
          </View>

          <Ionicons name="chevron-forward" size={22} color="#145c93" />
        </Pressable>
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
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },
  icono: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#e4edf5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  informacion: {
    flex: 1,
    marginLeft: 14,
  },
  nombre: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#145c93',
  },
  descripcion: {
    color: '#666666',
    fontSize: 13,
    marginTop: 5,
  },
  detalle: {
    color: '#8a7547',
    fontSize: 12,
    marginTop: 7,
  },
});
