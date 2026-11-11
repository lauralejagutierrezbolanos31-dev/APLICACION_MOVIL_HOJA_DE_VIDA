
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TarjetaHobbyProps {
  nombre: string;
  descripcion: string;
  icono: keyof typeof Ionicons.glyphMap;
}

export default function TarjetaHobby({
  nombre,
  descripcion,
  icono,
}: TarjetaHobbyProps) {
  const mostrarMensaje = () => {
    let detalle = '';

    switch (nombre) {
      case 'Viajar':
        detalle =
          'Me gusta conocer nuevos lugares, descubrir paisajes, aprender sobre otras culturas y vivir experiencias diferentes. Viajar también me permite conocer más sobre Colombia.';
        break;

      case 'Aprender':
        detalle =
          'Disfruto adquirir nuevos conocimientos, investigar temas de mi interés y aprender cosas que me ayuden a crecer tanto personal como profesionalmente.';
        break;

      case 'Tecnología':
        detalle =
          'Me interesa explorar herramientas digitales, conocer nuevas tecnologías y desarrollar proyectos que me permitan fortalecer mis habilidades en programación.';
        break;

      case 'Compartir':
        detalle =
          'Me gusta compartir tiempo con las personas que aprecio, intercambiar ideas y disfrutar momentos especiales con familiares y amigos.';
        break;

      default:
        detalle = descripcion;
    }

    if (Platform.OS === 'web') {
      window.alert(`${nombre}\n\n${detalle}`);
    } else {
      Alert.alert(nombre, detalle);
    }
  };

  return (
    <Pressable style={styles.card} onPress={mostrarMensaje}>
      <View style={styles.icono}>
        <Ionicons name={icono} size={30} color="#145c93" />
      </View>

      <View style={styles.informacion}>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.descripcion}>{descripcion}</Text>
        <Text style={styles.detalle}>Toca para conocer más</Text>
      </View>

      <Ionicons name="chevron-forward" size={22} color="#145c93" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 15,
    marginBottom: 14,
    elevation: 3,
  },
  icono: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#e4edf5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  informacion: {
    flex: 1,
  },
  nombre: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#145c93',
    marginBottom: 5,
  },
  descripcion: {
    fontSize: 13,
    color: '#555555',
    lineHeight: 19,
  },
  detalle: {
    fontSize: 12,
    color: '#8a7547',
    marginTop: 7,
    fontWeight: 'bold',
  },
});
