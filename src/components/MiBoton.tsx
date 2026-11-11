
import { Pressable, Text, StyleSheet, Alert } from 'react-native';

interface MiBotonProps {
  titulo: string;
  mensaje: string;
}

export default function MiBoton({ titulo, mensaje }: MiBotonProps) {
  return (
    <Pressable
      style={styles.boton}
      onPress={() => Alert.alert(titulo, mensaje)}
    >
      <Text style={styles.texto}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#145c93',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  texto: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
