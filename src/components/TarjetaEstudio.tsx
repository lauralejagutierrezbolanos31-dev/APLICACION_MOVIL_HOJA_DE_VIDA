
import { View, Text, StyleSheet } from 'react-native';

interface TarjetaEstudioProps {
  nombre: string;
  institucion: string;
  periodo: string;
  enCurso: boolean;
}

export default function TarjetaEstudio({
  nombre,
  institucion,
  periodo,
  enCurso,
}: TarjetaEstudioProps) {
  return (
    <View style={[styles.tarjeta, enCurso && styles.tarjetaEnCurso]}>
      <Text style={styles.nombre}>{nombre}</Text>

      <Text style={styles.institucion}>{institucion}</Text>

      <Text style={styles.periodo}>{periodo}</Text>

      <Text style={[styles.estado, enCurso && styles.estadoEnCurso]}>
        {enCurso ? 'En Curso' : 'Finalizado'}
      </Text>
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
    borderLeftColor: '#8a7547',
  },
  tarjetaEnCurso: {
    backgroundColor: '#e4edf5',
    borderLeftColor: '#145c93',
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
  },
  periodo: {
    color: '#666666',
    marginTop: 8,
  },
  estado: {
    color: '#ffffff',
    backgroundColor: '#8a7547',
    fontWeight: 'bold',
    marginTop: 12,
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    overflow: 'hidden',
    fontSize: 12,
  },
  estadoEnCurso: {
    backgroundColor: '#7846a8',
    color: '#ffffff',
  },
});
