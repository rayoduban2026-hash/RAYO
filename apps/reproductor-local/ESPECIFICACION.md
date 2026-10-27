# Reproductor de música local

Estado: borrador v0.1. Lo marcado como **Por defecto** es mi propuesta; puedes cambiarlo.

## Qué hace
Reproduce la música guardada en tu tablet o celular y organiza tus canciones en listas.

## Fase 1: lo básico
1. **Acceso a la música del dispositivo.** La app pide permiso para leer audio al abrirse.
2. **Lista de canciones.** Muestra el nombre de cada archivo y su duración. **Por defecto:** sin artista ni álbum; eso necesita metadatos (fase 2).
3. **Controles.** Reproducir, pausar, siguiente, anterior y barra de progreso.
4. **Aleatorio y repetir.** Repetir una canción o todas.
5. **Buscar** canciones por nombre.
6. **Listas de reproducción.** Crear, renombrar y borrar; agregar y quitar canciones. Se guardan en el dispositivo.
7. **Segundo plano.** La música sigue al apagar la pantalla, con controles en la notificación. **Por defecto:** sí.

## Fase 2
8. **Widget en la pantalla de inicio.** Muestra la canción actual y botones de control. **Por defecto:** después de la fase 1, porque usa código nativo.
9. **Metadatos.** Artista, álbum y carátula.

## Pantallas
- **Canciones:** lista con buscador. Tocar una canción la reproduce.
- **Reproductor:** nombre, barra de progreso, controles, aleatorio y repetir.
- **Listas:** todas tus listas y un botón para crear una.
- **Detalle de lista:** canciones de la lista, con opciones para quitar o agregar.
- **Mini reproductor:** barra inferior con la canción actual, visible en todas las pantallas.

## Diseño (por defecto)
- Tema oscuro.
- Color de acento: morado (`#7C5CFF`).
- Idioma: español.
- Tipografía: la del sistema.

## Lo que necesito de ti
1. **Tus diseños:** capturas o bocetos de lo que te guste, enviados como imagen en el chat.
2. **Estilo:** claro u oscuro, y colores que te gusten.
3. **Respuestas:**
   - ¿El widget es prioridad o puede esperar a la fase 2?
   - ¿Quieres que siga sonando con la pantalla apagada?
   - ¿Necesitas artista y carátula desde el inicio?

## Limitaciones
- Cada prueba requiere compilar un APK en la nube, lo que tarda unos minutos.
- Sin metadatos, las canciones se muestran por nombre de archivo.
- El widget solo se puede probar instalando el APK.
