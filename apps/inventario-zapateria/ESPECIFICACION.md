# Inventario de suministros para zapatería

Estado: borrador v0.4. Lo marcado con **¿?** no está confirmado.

## Objetivo
Saber qué suministros hay, cuánto se va a gastar y cuándo y cuánto pedir,
para que la producción no se detenga por falta de material.

## Usuario y dispositivo
- Una sola persona, en la tablet Samsung Galaxy Tab S10 Lite (Android 16).
- Los datos se guardan en la tablet. Se exportan a Excel como respaldo.

## Producción
- Consumo de referencia: 300 pares por día de lunes a viernes (ejemplo del usuario) ¿?
- Sábado: la producción termina a mediodía, unos 55% de un día normal ¿? (el usuario dijo "poco más de la mitad").
- Domingos y festivos: no hay producción ni entregas.

## Proveedor
- Contacto para pedidos: se guarda solo en la app de la tablet, no en este repositorio (es público).
- Entregas: lunes y jueves, por la tarde (casi siempre).
- Pedidos: sábado antes de mediodía (para la entrega del lunes) y miércoles (para la entrega del jueves). El proveedor trabaja hasta mediodía el sábado.
- Viernes: no hay entregas (pico y placa).
- Sábado y domingo: no hay entregas normales.
- Emergencia: un transportista externo puede traer material el viernes o el sábado por la mañana. Cuesta más. Se usa si una entrega falla y el colchón se está agotando.

## Ciclo semanal
| Día | Llega | Producción que cubre | Se pide |
|---|---|---|---|
| Lunes | Entrega 1 (tarde) | Lunes, martes y miércoles (900 pares) | — |
| Miércoles | — | — | Pedido para el jueves (765 pares) |
| Jueves | Entrega 2 (tarde) | Jueves, viernes y sábado medio día (765 pares) | — |
| Sábado (antes de mediodía) | — | — | Pedido para el lunes (900 pares) |
| Domingo | — | Sin trabajo | — |

Con 300 pares al día y sábado al 55%: el sábado son 165 pares. Entrega del jueves = 300 + 300 + 165 = 765.

## Colchón de seguridad
- **Colchón: 3 días de producción, adicionales a las entregas (900 pares con 300 pares/día).** ¿Confirmar que es adicional y no incluido?
- El colchón no se usa en el día normal. Se usa solo si una entrega no llega a tiempo.
- Cuando se usa, la siguiente entrega debe reponer lo gastado y volver a llenar el colchón.
- Stock esperado: entre 900 pares (mínimo, solo colchón) y 1.800 pares (justo después de la entrega del lunes).
- La mañana de la entrega (la llegada es por la tarde) la producción se cubre con el colchón.
- Construcción: el colchón puede llenarse por etapas (1 día, 2 días, 3 días) según el presupuesto ¿?

## Política de reserva
- Cada entrega repone lo que se gastó desde la entrega anterior, más el colchón si se usó.
- **Alarma de entrega:** si a una hora límite no llegó la entrega, la app avisa para usar el colchón y decidir si se hace envío de emergencia. Hora límite ¿?
- **Cuánto pedir** = consumo del periodo que cubre la entrega + reposición del colchón (si se usó) − stock actual.

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
- Se extraen referencia, color, tallas y pares. Cada línea trae su propia curva de tallas.
- Con la base por par y la curva de tallas se calcula el material necesario (por ejemplo, punteras nada o X según la talla).

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
- **Aviso de pedido:** sábado temprano (pedido para el lunes) y miércoles temprano (pedido para el jueves), con la lista y las cantidades.
- **Alarma de stock bajo:** cuando un material baja del colchón.
- **Alarma de entrega no llegada:** a la hora límite, si la entrega no llegó.
- Notificaciones con sonido, aunque el teléfono esté en silencio. Android o Samsung pueden limitarlo; se verifica en pruebas.
- La app no hace llamadas telefónicas; solo notificaciones.

## Privacidad
- El repositorio de GitHub es público. Datos de contacto, nombres de clientes y volúmenes de producción no se guardan aquí. ¿Pasar el repositorio a privado?

## Fuera de alcance por ahora
- Varios usuarios y sincronización entre dispositivos.
- Lectura automática de fotos de pedidos. Por ahora se envían al chat y se cargan manualmente.
- Control de metros de tela.
- Envío automático de pedidos (requiere servicio de mensajes con costo).

## Decisiones pendientes
1. ¿El colchón de 3 días es adicional a las entregas (900 pares extra)?
2. ¿Presupuesto para construir el colchón de una vez o por etapas?
3. ¿Hora límite para considerar que una entrega no llegó?
4. ¿Sábado al 55% de un día normal, o un porcentaje distinto?
5. ¿Repositorio privado?
6. ¿Precio por unidad en los pedidos y recepciones?
7. Materiales de los demás procesos.
8. Conteo inicial de los materiales.
