# Inventario de suministros para zapatería

Estado: borrador v0.2. Se actualiza conforme se confirman los datos.
Lo marcado con **¿?** no está confirmado.

## Objetivo
Saber qué suministros hay, cuánto se va a gastar y cuándo y cuánto pedir,
para que la producción no se detenga por falta de material.

## Usuario y dispositivo
- Una sola persona, en la tablet Samsung Galaxy Tab S10 Lite (Android 16).
- Los datos se guardan en la tablet. Se exportan a Excel como respaldo.

## Proveedor y entregas
- Entregas: de lunes a jueves ¿?
- Viernes: no hay entregas (pico y placa).
- Sábado: no hay entregas (el proveedor trabaja solo hasta mediodía).
- Domingo y festivos: ¿?
- Un pedido hecho un día llega al día siguiente por la tarde, cuando el día siguiente es entrega.
  Si el pedido se hace un día sin entrega siguiente, llega en el próximo día de entrega.
- Contacto para pedidos (WhatsApp o correo): ¿?

## Política de reserva
- **Reserva objetivo: 3 días contando hoy** (hoy, mañana y pasado mañana). Puede ajustarse con el tiempo.
- **Ciclo de pedido:** cada pedido cubre los siguientes 2 días. Al terminar ese tiempo se hace el siguiente.
- **Motivo:** a veces el carro no sale y no llega el material. La reserva evita que la producción se detenga.
- **Stock mínimo** = consumo diario × días que faltan hasta la siguiente entrega + reserva ¿? (confirmar si la reserva se cuenta desde hoy o desde la llegada).
- **Alerta:** cuando el stock proyectado baja del mínimo, se envía una notificación con qué pedir y cuánto.
- **Cuánto pedir** = lo necesario para volver a la reserva objetivo al llegar la entrega.

## Consumo por par
Base confirmada:
- 1 par de suelas, 1 par de tacones y 1 par de forros por cada par producido.

Pendiente: pegamentos, tornillos, lija, caucho y demás materiales. Se calcula con conteo antes y después de un lote:
**consumo por par = (conteo inicial − conteo final) ÷ pares producidos del lote.**
Así no hace falta medir cada proceso.

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
- **Entrada:** llega material (compra o recepción). Se registra cantidad y fecha.
- **Salida:** se usa en producción. Se registra suministro, cantidad y orden o cliente.
- **Conteo físico:** se cuenta lo que hay en almacén. La app calcula la diferencia y la registra como ajuste.

## Pedidos de clientes (pronóstico)
- Se envía la foto del pedido o vale de cada cliente.
- Se extraen referencia, color, tallas y pares.
- Con la base por par se calcula el material necesario en los próximos días.

## Envío de pedidos al proveedor
- La app arma el pedido (texto, con materiales y cantidades).
- **Fase 1 (gratis):** la app abre WhatsApp o correo con el pedido listo. Tú revisas y pulsas enviar.
- **Fase 2 (con costo):** envío automático. Requiere servicio de mensajes con costo y trámite de cuenta comercial.
- **Recomendación:** aprobación del usuario antes de cada envío.

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
- Gráfica de movimientos (entradas contra salidas). ¿Diagrama de flujo de proceso o gráfica de movimientos? ¿?
- Exportar a Excel (.xlsx).

## Alertas
- Notificación con sonido, aunque el teléfono esté en silencio. Android o Samsung pueden limitarlo; se verifica en pruebas.
- La app no hace llamadas telefónicas; solo notificaciones.

## Privacidad
- El repositorio de GitHub es público. Los datos de producción y proveedores deberían estar en un repositorio privado. ¿?

## Fuera de alcance por ahora
- Varios usuarios y sincronización entre dispositivos.
- Lectura automática de fotos de pedidos. Por ahora las envías al chat y se cargan manualmente.
- Control de metros de tela.

## Decisiones pendientes
1. ¿Hay entregas domingos o festivos?
2. ¿La reserva de 3 días se cuenta desde hoy o desde la llegada del pedido?
3. ¿Contacto del proveedor: WhatsApp o correo?
4. ¿El repositorio se vuelve privado?
5. Lista de materiales de los demás procesos.
6. Definir cuáles materiales se cuentan primero (suelas, tacones, pegamentos).
