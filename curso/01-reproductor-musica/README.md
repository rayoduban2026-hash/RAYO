# Módulo 1: Reproductor de música

Construirás una app con un botón de reproducir/pausa y una lista para elegir canciones. Después la vas a mejorar con ejercicios.

## Lo que aprenderás

- **Componentes:** los bloques de la pantalla (`View`, `Text`, `Pressable`).
- **Estado con `useState`:** datos que cambian. Cuando cambian, la pantalla se vuelve a dibujar.
- **Hooks de librerías:** `useAudioPlayer` y `useAudioPlayerStatus`, de `expo-audio`.
- **Eventos:** `onPress` ejecuta una función cuando tocas algo.
- **Estilos:** `StyleSheet.create` separa el diseño del código, como CSS.

## Antes de empezar (sin computadora)

GitHub compila el APK por ti. Solo necesitas configurar una vez tu cuenta:

1. Crea una cuenta gratuita en **expo.dev** desde el navegador de tu celular.
2. En tu cuenta de Expo, crea un **token de acceso** (sección *Access tokens*). Cópialo.
3. En GitHub, abre el repositorio **RAYO** → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.
   - Nombre: `EXPO_TOKEN`
   - Valor: el token que copiaste.
   - **No pegues el token en el chat.**
4. Avísame cuando lo hayas hecho. Entonces subo los cambios y GitHub compila el APK solo. Lo puedes seguir en la pestaña **Actions**, en el flujo "Compilar APK".
5. Cuando termine, el enlace de descarga aparece en el registro del job y en expo.dev. Ábrelo en la tablet, descarga el APK e instálalo. Si Android lo bloquea, permite **instalar apps desconocidas** para tu navegador o tu gestor de archivos.

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

5. **Tu propia música.** Copia un MP3 tuyo a `proyecto/assets/audio/` y agrégalo a `canciones` con `require`.

## Terminado cuando

- La app se instala y funciona en tu tablet.
- Puedes explicar qué hace cada parte del código, sin mirar.

Cuando termines, cuéntame qué falló o pega tu código, y lo revisamos antes del módulo 2.
