import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';

// Cada canción tiene un título y un archivo de audio.
const canciones = [
  { titulo: 'Canción 1', archivo: require('./assets/audio/cancion-1.wav') },
  { titulo: 'Canción 2', archivo: require('./assets/audio/cancion-2.wav') },
  { titulo: 'Canción 3', archivo: require('./assets/audio/cancion-3.wav') },
];

// Convierte segundos (65) en texto legible ("1:05").
function formatearTiempo(segundos: number) {
  const minutos = Math.floor(segundos / 60);
  const resto = Math.floor(segundos % 60).toString().padStart(2, '0');
  return `${minutos}:${resto}`;
}

export default function App() {
  const [indice, setIndice] = useState(0);
  const player = useAudioPlayer(canciones[0].archivo);
  const estado = useAudioPlayerStatus(player);

  function reproducirOPausar() {
    if (estado.playing) {
      player.pause();
    } else {
      player.play();
    }
  }

  function elegirCancion(nuevoIndice: number) {
    setIndice(nuevoIndice);
    player.replace(canciones[nuevoIndice].archivo);
    player.play();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{canciones[indice].titulo}</Text>
      <Text style={styles.tiempo}>
        {formatearTiempo(estado.currentTime)} / {formatearTiempo(estado.duration)}
      </Text>

      <Pressable style={styles.boton} onPress={reproducirOPausar}>
        <Text style={styles.textoBoton}>{estado.playing ? 'Pausa' : 'Reproducir'}</Text>
      </Pressable>

      <View style={styles.lista}>
        {canciones.map((cancion, i) => (
          <Pressable
            key={cancion.titulo}
            style={[styles.item, i === indice && styles.itemActivo]}
            onPress={() => elegirCancion(i)}>
            <Text>{cancion.titulo}</Text>
          </Pressable>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  tiempo: { fontSize: 16, color: '#555', marginBottom: 24 },
  boton: {
    backgroundColor: '#1db954',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 30,
  },
  textoBoton: { color: '#fff', fontSize: 18, fontWeight: '600' },
  lista: { marginTop: 32, width: '100%' },
  item: { padding: 14, borderRadius: 8, backgroundColor: '#f2f2f2', marginBottom: 8 },
  itemActivo: { backgroundColor: '#d4f5e0' },
});
