
import { View, Text, StyleSheet } from 'react-native';

interface TarjetaExperienciaProps {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
}

export default function TarjetaExperiencia({
  cargo,
  empresa,
  periodo,
  descripcion,
}: TarjetaExperienciaProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.cargo}>{cargo}</Text>

      <Text style={styles.empresa}>{empresa}</Text>

      <Text style={styles.periodo}>{periodo}</Text>

      <Text style={styles.descripcion}>{descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 18,
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: '#145c93',
  },
  cargo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#145c93',
  },
  empresa: {
    fontSize: 15,
    color: '#8a7547',
    fontWeight: '600',
    marginTop: 8,
  },
  periodo: {
    color: '#777777',
    fontSize: 13,
    marginTop: 8,
  },
  descripcion: {
    color: '#555555',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 12,
  },
});

