# Inventario de suministros para zapatería

Estado: borrador v0.1, basado en el croquis y en los mensajes del usuario.
Lo marcado con **¿?** no está claro y necesita confirmación.

## Objetivo
Saber qué suministros hay, cuántos se van a necesitar y cuándo y cuánto pedir,
para que la producción no se detenga por falta de material.

## Usuario y dispositivo
- Una sola persona, en la tablet Samsung Galaxy Tab S10 Lite (Android 16).
- Los datos se guardan en la tablet. Se exportan a Excel como respaldo.

## Suministros
Según el croquis, estos son los materiales que se piden. Todo se cuenta en pares,
salvo lo indicado.

| Material | Variantes | Unidad de conteo | Notas |
|---|---|---|---|
| Suelas | por número y referencia | pares | |
| Tacones con forro | 3½, 5½, 5½ 5/16, 7½ 5/16 y otros (en el croquis aparecen también 16½ ¿?, T48 ¿?) | pares | Se forran con el forro del tacón |
| Tacones cristal | 5½ 5/16, 7½ 5/16 | pares | Sin forro, solo se les pone tapita |
| Forros | por tipo de tacón | pares | Se usan para forrar suelas y tacones |
| Plantillas | por número | pares | |
| Espuma | — | pares ¿? | Va encima de la suela |
| Punteras | nada (tallas 34–37), X (tallas 38–40) | pares | |
| Bandas | 3 tamaños: tallas 34–35, 36–37, 38–40 | pares | |
| Pegamento amarillo | — | cajas, potes o tarros | Se cuenta por caja, pote o tarro |
| Pegamento blanco | — | ¿? | |
| Caucho (pegante) | — | ¿? | El croquis dice "cuero (pegante)" o "corcho (pegante)" ¿? |
| Lija | — | ¿? | |
| Tamillos | color negro ¿? | ¿? | |
| Tapitas | para tacones cristal | ¿? | |

Los metros de tela y otros materiales medidos en metros **no se controlan** en esta app.

## Movimientos
- **Entrada:** llega material (compra o recepción). Se registra cantidad y fecha.
- **Salida:** se usa en producción. Se registra suministro, cantidad y orden o cliente.
- **Conteo físico:** se cuenta lo que hay en almacén. La app calcula la diferencia y la registra como ajuste.

## Reglas de reserva y pedido
- **Consumo diario:** ~280 pares de forrado al día (dato del croquis). Se calcula por suministro a partir de las salidas reales.
- **Días de reserva:** ¿2 o 3 días? El mensaje dice 2 y el croquis dice mínimo 3 días de plantillas.
- **Días de entrega del proveedor:** ¿?
- **Stock mínimo** = consumo diario × (días de entrega + días de reserva).
- **Alerta:** cuando el stock actual llega al mínimo, la app avisa con una notificación y muestra qué pedir.
- **Cuánto pedir** = consumo diario × días de reserva objetivo − stock actual (si es mayor que cero).

## Pronóstico desde pedidos de clientes
- Se envía la imagen del pedido o vale de cada cliente.
- Se extraen referencia, color, tallas y pares.
- Con la receta por par (abajo) se calcula cuánto material se necesita en los próximos días.

## Receta por par (pendiente)
Por cada referencia: cuántas unidades de cada suministro se gastan por par.
Ejemplo a confirmar: 1 suela, 1 plantilla, 1 forro, 1 tacón, 1 puntera, 1 banda y la cantidad de pegamento.

## Órdenes de producción
Registro de cada orden:
- Número de orden, fecha, cliente, referencia (por ejemplo PS557 NE), color, suela y número de pedido.
- Cantidades por talla (32 a 41) y total.
- Etapas con pares realizados y fecha. Según la orden 14861: cortador, doblador, armador, guarnecedor, emplantillador, solador, forrado planta, decorador, doblado, forrador, montador.
- Estado: pendiente, en proceso o terminada.

## Reportes
- Pares producidos por día, semana y mes.
- Entradas y salidas de material por periodo.
- Gráfica de barras de producción.
- Gráfica de flujo de entradas contra salidas. ¿Un diagrama de flujo de proceso o una gráfica de movimientos? Se confirma.
- Exportar a Excel (.xlsx).

## Alertas
- Notificación en la tablet cuando un suministro llega a su stock mínimo, con qué pedir y cuánto.
- La app no puede hacer llamadas telefónicas; usa notificaciones con sonido.
- Si el teléfono está en silencio o en "No molestar", Android puede bloquear el sonido. ¿Se necesita alarma sonora aunque esté en silencio?

## Fuera de alcance por ahora
- Varios usuarios y sincronización entre dispositivos.
- Lectura automática de fotos de pedidos. Hay que decidir cómo se leerán (ver abajo).
- Control de metros de tela.

## Decisiones pendientes
1. ¿2 o 3 días de reserva?
2. ¿Cuántos días tarda el proveedor en entregar cada suministro?
3. ¿Receta por par de cada referencia?
4. ¿Cómo se leerán las fotos de pedidos? Opciones: (a) las envías al chat y yo extraigo los datos; (b) la app las lee sola con un servicio de IA, que tiene costo y requiere internet.
5. ¿Alarma sonora aunque el teléfono esté en silencio?
6. ¿Qué significa exactamente "cuero (pegante)" o "corcho (pegante)", "tamillos" y "lija" en tu proceso?
