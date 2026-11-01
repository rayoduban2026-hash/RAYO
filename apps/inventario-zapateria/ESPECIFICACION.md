# Inventario de suministros para zapatería

Estado: borrador v0.3. Lo marcado con **¿?** no está confirmado.

## Objetivo
Saber qué suministros hay, cuánto se va a gastar y cuándo y cuánto pedir,
para que la producción no se detenga por falta de material.

## Usuario y dispositivo
- Una sola persona, en la tablet Samsung Galaxy Tab S10 Lite (Android 16).
- Los datos se guardan en la tablet. Se exportan a Excel como respaldo.

## Producción
- Consumo de referencia: 300 pares por día (ejemplo del usuario; el croquis decía unos 280) ¿?
- Días de producción: lunes a sábado ¿? (¿sábado completo?)
- Domingos y festivos: no hay producción ni entregas.

## Proveedor
- Contacto para pedidos: se guarda solo en la app de la tablet, no en este repositorio (es público).
- Entregas: lunes y jueves. Llegan por la tarde ¿? (confirmar hora).
- Pedidos: sábado (para el lunes) y miércoles (para el jueves). El sábado el proveedor trabaja hasta mediodía ¿? (¿el pedido debe llegar antes de esa hora?).
- Viernes: no hay entregas (pico y placa).
- Sábado y domingo: no hay entregas normales.
- Emergencia: un transportista externo puede traer material el viernes o el sábado por la mañana. Cuesta más. Se usa solo si el colchón está en riesgo.

## Ciclo semanal
| Día | Llega | Producción cubierta | Se pide |
|---|---|---|---|
| Lunes | Entrega 1 | Lunes, martes y miércoles (3 días) | — |
| Miércoles | — | — | Pedido para el jueves |
| Jueves | Entrega 2 | Jueves, viernes y sábado (3 días) | — |
| Sábado | — | — | Pedido para el lunes |
| Domingo | — | Sin trabajo | — |

## Política de reserva (propuesta)
- Cada entrega cubre 3 días de producción, contando el día de llegada.
- **Colchón de seguridad propuesto: 1 día de producción (300 pares por cada par de referencia).** Se usa cuando una entrega se retrasa o llega tarde. ¿Colchón de 1 día o ninguno?
- **Stock mínimo** = consumo de 1 día (el colchón), por material.
- **Cuánto pedir** = consumo diario × días a cubrir + colchón − stock actual.
- Con un colchón de 1 día, un retraso no detiene la producción; con el envío de emergencia se resuelve.

## Consumo por par
Base confirmada:
- 1 par de suelas, 1 par de tacones y 1 par de forros por cada par producido.

Pendiente: pegamentos, tornillos, lija, caucho y demás materiales. Se calcula con conteo antes y después de un lote:
**consumo por par = (conteo inicial − conteo final) ÷ pares producidos del lote.**

## Suministros
Todo se cuenta en pares, salvo lo indicado. Los metros de tela no se controlan.

| Material | Variantes | Unidad de conteo | Uso |
|---|---|---|---|
| Suelas | por número y referencia | pares | Base del calzado |
| Tacones con forro | 3½, 5½, 5½ 5/16, 7½ 5/16 y otros ¿? | pares | Se forran con el forro del tacón |
| Tacones cristal | 5½ 5/16, 7½ 5/16 | pares | Sin forro, solo tapita |
| Forros | por tipo de tacón | pares | Forran suelas y tacones |
| Plantillas | por número | pares | |
| Espuma | — | pares ¿? | Va encima de la suela |
| Punteras | nada (tallas 34–37), X (tallas 38–40) | pares | |
| Bandas | 3 tamaños: tallas 34–35, 36–37, 38–40 | pares | |
| Tornillos | — | ¿? | Unen la suela con el tacón |
| Lija | — | ¿? | Quita el excedente de material de la suela |
| Pegamento amarillo | — | cajas, potes o tarros | Une forro y tacón, y espuma con suela |
| Pegamento blanco | — | cajas, potes o tarros ¿? | |
| Caucho | — | ¿? | El croquis dice "cuero (pegante)" o "corcho (pegante)" ¿? |
| Tamillos | color negro ¿? | ¿? | |
| Tapitas | para tacones cristal | ¿? | |

Los materiales de procesos aún no mencionados se agregarán cuando el usuario los indique.

## Conteo inicial
- Se puede hacer de 2 a 3 materiales al día.
- Un material sin conteo queda **"pendiente de conteo"** y no genera alertas hasta tener una cifra.

## Movimientos
- **Entrada (recepción):** llega material de un pedido. Se registra por línea (ver Recepciones).
- **Salida:** se usa en producción. Se registra suministro, cantidad y orden o cliente.
- **Conteo físico:** se cuenta lo que hay en almacén. La app calcula la diferencia y la registra como ajuste.

## Pedido al proveedor (imagen)
- La app genera una imagen con: número de pedido consecutivo, fecha del día, proveedor, fecha prevista de entrega, lista (material, variante, cantidad y unidad) y totales por unidad.
- La imagen se guarda en la app (historial de pedidos) y se envía con el botón de compartir, por ejemplo a WhatsApp.
- El usuario revisa y confirma antes de enviar.

## Recepciones (registro de llegadas)
- Cada pedido tiene líneas con la cantidad pedida.
- Cada llegada se registra por línea, con fecha y cantidad recibida. Un pedido puede llegar en varias partes.
- Estado de cada línea: pendiente, parcial o completa. La app muestra lo que falta.
- Si pasa la fecha prevista y falta material, la app avisa.
- Campos opcionales: número de remisión o factura, y precio por unidad, para comparar con lo cobrado ¿?

## Pedidos de clientes (pronóstico)
- Se envía la foto del pedido o vale de cada cliente.
- Se extraen referencia, color, tallas y pares.
- Con la base por par se calcula el material necesario en los próximos días.

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
- Gráfica de movimientos (entradas contra salidas) ¿? (no es un diagrama de flujo de proceso; confirmar).
- Exportar a Excel (.xlsx).

## Alertas
- **Aviso de pedido:** sábado (pedido para el lunes) y miércoles (pedido para el jueves), con la lista y las cantidades.
- **Alarma de stock bajo:** cuando un material cae bajo el colchón.
- **Alarma de retraso:** pedido sin llegada completa en la fecha prevista.
- Notificaciones con sonido, aunque el teléfono esté en silencio. Android o Samsung pueden limitarlo; se verifica en pruebas.
- La app no hace llamadas telefónicas; solo notificaciones.

## Privacidad
- El repositorio de GitHub es público. Datos de contacto y volúmenes de producción no se guardan aquí. ¿Pasar el repositorio a privado?

## Fuera de alcance por ahora
- Varios usuarios y sincronización entre dispositivos.
- Lectura automática de fotos de pedidos. Por ahora se envían al chat y se cargan manualmente.
- Control de metros de tela.
- Envío automático de pedidos (requiere servicio de mensajes con costo).

## Decisiones pendientes
1. Colchón: ¿1 día (300 pares) o ninguno?
2. ¿A qué hora llegan las entregas? Si llegan por la tarde, la producción de la mañana del día de llegada no tiene material de esa entrega.
3. ¿El pedido del sábado debe llegar antes de mediodía?
4. ¿Se trabaja sábado completo?
5. ¿Repositorio privado?
6. ¿Precio por unidad en los pedidos y recepciones?
7. Materiales de los demás procesos.
8. Fotos de pedidos de clientes.
