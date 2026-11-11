
import {
  Pressable,
  Text,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';

interface MiBotonProps {
  titulo: string;
  mensaje: string;
  correo?: string;
}

export default function MiBoton({
  titulo,
  mensaje,
  correo,
}: MiBotonProps) {
  const mostrarMensaje = async () => {
    if (correo) {
      if (Platform.OS === 'web') {
        window.alert(`Puedes contactarme en:\n\n${correo}`);
      } else {
        Alert.alert('Mi correo electrónico', correo, [
          {
            text: 'Copiar correo',
            onPress: () => Clipboard.setStringAsync(correo),
          },
          { text: 'Cerrar' },
        ]);
      }
    } else if (Platform.OS === 'web') {
      window.alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  return (
    <Pressable style={styles.boton} onPress={mostrarMensaje}>
      <Text style={styles.texto}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#145c93',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  texto: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
