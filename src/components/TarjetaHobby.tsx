
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
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
  return (
    <Pressable
      style={styles.tarjeta}
      onPress={() => Alert.alert(nombre, descripcion)}
    >
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
  tarjeta: {
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
