# Módulo 1: Reproductor de música

Construirás una app con un botón de reproducir/pausa y una lista para elegir canciones. Después la vas a mejorar con ejercicios.

## Lo que aprenderás

- **Componentes:** los bloques de la pantalla (`View`, `Text`, `Pressable`).
- **Estado con `useState`:** datos que cambian. Cuando cambian, la pantalla se vuelve a dibujar.
- **Hooks de librerías:** `useAudioPlayer` y `useAudioPlayerStatus`, de `expo-audio`.
- **Eventos:** `onPress` ejecuta una función cuando tocas algo.
- **Estilos:** `StyleSheet.create` separa el diseño del código, como CSS.

## Antes de empezar

1. Instala **Node.js LTS** en tu computadora.
2. Instala **Expo Go** desde Google Play en tu tablet.
3. Abre una terminal en la carpeta `proyecto/` y ejecuta:
   ```
   npm install
   npx expo start
   ```
4. En la tablet, abre Expo Go y escanea el código QR que aparece en la terminal.

## Cómo leer `proyecto/App.tsx`

- **`canciones`:** una lista de objetos. Cada uno tiene un título y un archivo de audio. No cambia mientras se usa la app.
- **`useState`:** `indice` guarda cuál canción está activa. `setIndice` la cambia y la pantalla se actualiza.
- **`useAudioPlayer`:** crea el reproductor con la primera canción.
- **`useAudioPlayerStatus`:** entrega el estado actual (`playing`, `currentTime`, `duration`). Se actualiza solo mientras suena la música.
- **`reproducirOPausar` y `elegirCancion`:** funciones que se ejecutan al tocar un botón.
- **`formatearTiempo`:** convierte segundos en texto, por ejemplo `65` en `1:05`.
- **`styles`:** los estilos visuales de cada parte.

## Ejercicios

Hazlos en orden. Cada uno suma algo nuevo.

1. **Siguiente y anterior.** Agrega dos botones. Usa `indice` con `%` (módulo) y `canciones.length` para que, al pasar de la última canción, vuelva a la primera. Después llama a `elegirCancion` con el nuevo índice.
   - Pista: `(indice + 1) % canciones.length`.

2. **Pasar a la siguiente al terminar.** Cuando una canción termina, el estado trae `didJustFinish: true`. Usa `useEffect` para detectarlo y pasar a la siguiente.
   - Pista: `useEffect` se ejecuta cuando cambia un valor que le indiques en su lista de dependencias.

3. **Barra de progreso.** Dibuja una barra gris de fondo y encima una verde cuyo ancho sea proporcional a `estado.currentTime / estado.duration`.
   - Pista: puedes usar `width: \`${porcentaje}%\``. Cuidado con dividir entre cero cuando `duration` es `0`.

4. **Control de volumen.** Agrega botones "+" y "-" que cambien `player.volume` entre `0` y `1`.
   - Pista: `Math.min(1, ...)` y `Math.max(0, ...)` mantienen el valor dentro del rango.

5. **Tu propia música.** Copia un MP3 tuyo a `proyecto/assets/audio/` y agrégalo a `canciones` con `require`. Si no aparece, reinicia con `npx expo start -c`.

## Terminado cuando

- La app funciona en tu tablet con Expo Go.
- Puedes explicar qué hace cada parte del código, sin mirar.

Cuando termines, pega tu código o cuéntame qué falló. Lo revisamos juntos antes de pasar al módulo 2.
