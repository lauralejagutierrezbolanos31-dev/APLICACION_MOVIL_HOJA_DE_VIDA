
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
  telefono?: string;
  github?: string;
}

export default function MiBoton({
  titulo,
  mensaje,
  correo,
  telefono,
  github,
}: MiBotonProps) {
  const mostrarMensaje = async () => {
    let detalle = mensaje;

    if (correo) {
      detalle = `Mi correo electrónico:\n${correo}`;
    } else if (telefono) {
      detalle = `Mi número de celular:\n${telefono}`;
    } else if (github) {
      detalle = `Mi perfil de GitHub:\n${github}`;
    }

    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n\n${detalle}`);
    } else {
      const dato = correo || telefono || github;

      Alert.alert(titulo, detalle, [
        ...(dato
          ? [
              {
                text: 'Copiar',
                onPress: () => Clipboard.setStringAsync(dato),
              },
            ]
          : []),
        { text: 'Cerrar' },
      ]);
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
