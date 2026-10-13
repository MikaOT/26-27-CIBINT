# Plan de investigación · Grupo 1 · Ministerio de Hacienda

> **Plantilla de respuesta del grupo 1 · actividad A02.**
>
> Este archivo es el plan de investigación de tu grupo. **Se trabaja directamente sobre él** y es el documento que se entrega y se evalúa.
>
> Instrucciones de uso:
>
> 1. Mantén los encabezados y su numeración.
> 2. Sustituye cada bloque «**Qué debe contener**» por el contenido del grupo. No dejes ninguno sin sustituir.
> 3. Cita cada afirmación sobre el caso con su identificador: `(H05)`, `(F04)`.
> 4. Borra este recuadro de instrucciones antes de entregar.
>
> Enunciado completo: [A02 · Plan de investigación](../../../../actividades/A02-plan-de-investigacion/README.md)

## Ficha del plan

| Campo | Contenido |
|---|---|
| Grupo | 1 |
| Caso | Supuesta sustracción de datos de contribuyentes atribuida al Ministerio de Hacienda, febrero de 2026 |
| Material de partida | [casos/hacienda](../../../../actividades/A02-plan-de-investigacion/casos/hacienda/README.md): `H01`–`H13` y `F01`–`F06` |
| Portavoz | |
| Miembros del equipo | |

---

## 1. Resumen del plan

> **Qué debe contener:** un párrafo, escrito al final, que permita entender el plan sin leer el resto: qué se querría saber y para qué, con qué fuentes y técnicas, con qué exclusiones principales y durante cuánto tiempo.

## 2. Situación

### 2.1 Afirmaciones sobre el caso

| ID | Qué se afirma | Quién lo afirma | ¿Lo confirma alguien independiente? | Valoración |
|---|---|---|---|---|
| | | | | |

> **Qué debe contener:** todas las afirmaciones relevantes del material de partida. La valoración indica cómo debe tratarse cada una: establecida, afirmada sin confirmar, cálculo o interpretación de un tercero, contradicha por otra fuente, etc.

### 2.2 Lo que puede darse por establecido

**Existencia de una oferta de venta de datos**: _[F01, F02, F03, F04, F06]:_ El 31 de enero de 2026 se hizo visible en foros de la dark web una publicación de un actor bajo el alias **HaciendaSec**, en la que afirma haber sustraído y puesto a la venta una base de datos con información personal, bancaria y fiscal de 47,3 millones de ciudadanos. **_Por qué se considera establecido:_** Es un hecho objetivo y documentado el evento de la publicación y las afirmaciones del actor, reportado por empresas de monitorización (Hackmanac, UpGuard) y múltiples medios. (Nota: Se da por establecida la existencia del anuncio, no la veracidad de las afirmaciones del atacante).

**Inexistencia de intrusión en los sistemas propios del Ministerio**: _[F04, F05]_: Tras verificaciones internas y auditorías técnicas, el Ministerio de Hacienda no ha detectado rastros de ciberataque, accesos no autorizados ni exfiltración de información en sus sistemas oficiales. Por qué se considera establecido: Existe una declaración oficial e inequívoca de la organización afectada [F04], respaldada por el análisis de un organismo público técnico e independiente (Cibersegurida de Galicia) [F05].

### 2.3 Lo que no se sabe

> **Qué debe contener:** las lagunas que una investigación desde fuentes abiertas podría ayudar a reducir y las que no podría reducir, con el motivo.

## 3. Necesidad de inteligencia

| Pregunta | Laguna de la que procede (2.3) | Quién usaría la respuesta | Para qué decisión o protección |
|---|---|---|---|
| | | | |

> **Qué debe contener:** las preguntas que la investigación querría responder, derivadas de lo que no se sabe, y la finalidad legítima de cada una. Añade también qué preguntas **no** se intentarían responder y por qué.

## 4. Legitimación y no interferencia
**Quién investiga y desde qué posición**
Nosotros, como estudiantes de la asignatura de Ciberinteligencia, estamos realizando una práctica para la asignatura sobre este caso. Por ende, al no ser la policía, el CNI o una empresa privada contratada por Hacienda, no tenemos permiso para acceder a datos personales. Nuestra posición es únicamente para aprendizaje, basándonos en un caso real e información pública que sí podemos tratar.

**Marco normativo aplicable**
Nuestra investigación se basa en recopilar información de fuentes abiertas (OSINT) desde España. Por esto debemos acatar las leyes generales y, a su vez, seguir la normativa de protección de datos (RGPD europeo y LOPDGDD española). También queremos recalcar que para la realización de esta investigación se tendrá en cuenta el Protocolo de Berkeley mencionado en clase, para cumplir con la metodología propuesta y las enseñanzas aprendidas.

**Responsable de los datos y base de licitud**
Para esta investigación, el responsable de tratamiento de datos somos los propios estudiantes. Debemos ser conscientes de qué datos disponemos y hasta dónde podemos llegar; también es importante aclarar que la propia universidad nos aporta ciertos datos como base en las instrucciones de la actividad, como el archivo Hechos.csv y el archivo Fuentes.csv.

Además, en el marco legal, nosotros proponemos un seguimiento de interés legítimo. Esto quiere decir que, en caso de encontrar datos de terceros sin disponer de su consentimiento, queremos aclarar que nuestro interés es académico y no queremos exponer a terceros. Por esto nos limitaremos a tratar únicamente la información que esté a nuestra disposición y no afecte a la integridad de otros.

**Qué NO nos corresponde y a quién sí**
En primer lugar, nosotros somos estudiantes y no tenemos autoridad legal ni operativa. Como estudiantes nos hacemos una pregunta clave para realizar la actividad: ¿cómo actuaría un equipo de investigación autorizado? Con esta pregunta podemos derivarla en otras que se haría dicho equipo y podemos responder cómo las trataríamos.

¿Podemos acceder a los servidores de Hacienda para hacer un análisis forense? No, eso le corresponde al Ministerio y al CCN-CERT.

¿Podemos detener a HaciendaSec? No, eso le corresponde a las Fuerzas y Cuerpos de Seguridad del Estado (FCSE).

¿Podemos auditar si Hacienda protegía bien los datos o sancionarles? No, eso le toca a la Agencia Española de Protección de Datos (AEPD).

¿Podemos comprarle la base de datos a HaciendaSec para ver si es real? No (estaríamos financiando un delito).

**Otras investigaciones y no interferencia**
Usando las fuentes, sabemos seguro que hay investigaciones en curso por parte del Ministerio de Hacienda (auditoría interna) y el CCN-CERT (mencionado en F06). Además, es lógico deducir que la Policía/Guardia Civil investigará la venta en la dark web, y la AEPD el posible fallo de seguridad.

¿Cómo evitamos entorpecerlas? Aquí agregamos el concepto de investigación pasiva. Queremos dejar claro que nuestro grupo NO interactuará con el atacante (nada de crear un usuario falso para chatear con HaciendaSec en el foro), NO escanearemos de forma activa los puertos o servidores del Ministerio, y NO alertaremos a las víctimas. Solo observaremos información que ya es pública.

## 5. Plan de obtención

### 5.1 Fuentes y técnicas previstas

| ID | Fuente o técnica | Pregunta a la que responde (3) | Por qué es lícita | Por qué es la menos intrusiva disponible | Qué expondría y a quién |
|---|---|---|---|---|---|
| OB1 | | | | | |

### 5.2 Evaluaciones de licitud

> **Qué debe contener:** la [plantilla de evaluación de licitud](https://github.com/hector-ae21/CIBINT/blob/main/plantillas/plantilla-evaluacion-licitud.md) completa para las dos fuentes o técnicas del plan que el grupo considere más delicadas, con la justificación de por qué son esas dos.

## 6. Reglas de actuación

### 6.1 Lo que se haría solo con condiciones

| Actuación | Condición que debería cumplirse | Quién comprobaría que se cumple |
|---|---|---|
| | | |

### 6.2 Lo que no se haría

| Exclusión propia de este caso | Por qué |
|---|---|
| | |

> **Qué debe contener:** las tentaciones concretas que este caso ofrece a quien lo investiga, descartadas de forma expresa y razonada. Copiar las normas de la asignatura no cumple este apartado.

### 6.3 Condiciones de parada

| Si ocurriera… | El equipo… | Y consultaría a… |
|---|---|---|
| | | |

## 7. Tratamiento de datos personales

| Datos que podrían aparecer aunque no se buscasen | De quién | Cómo se minimizarían | Dónde se guardarían y quién accedería | Cuándo y cómo se borrarían |
|---|---|---|---|---|
|En un foro de la dark web, el usuario HaciendaSec publicó supuesta información delicada de Hacienda. Seguramente incluya datos personales de contribuyentes, tales como nombres completos, DNI/NIF, direcciones, teléfonos, correos electrónicos, cuentas bancarias (IBAN) e información fiscal (salarios, deudas).|Los afectados serían los contribuyentes (ciudadanos y empresas) en España, dada la jurisdicción de la entidad. |Como profesional, visualizaría la información en línea, realizaría ofuscación o pixelado inmediato de los datos personales y conservaría únicamente el hash del archivo.|Se guardarían en un contenedor local cifrado. Solo accederían los encargados del proyecto de investigación; de ser necesario, se restringiría el acceso a una única persona para evitar el uso indebido de la información.|Se destruirían mediante sobreescritura segura al finalizar el periodo de investigación y la entrega del trabajo, evaluando previamente si es estrictamente necesario conservar una copia cifrada por si se reabre el caso.|

## 8. Seguridad de la operación

### 8.1 OPSEC de la investigación

| Paso | En este caso |
|---|---|
| Información crítica |Nuestra dirección IP real, nuestra identidad y el propio hecho de que estamos llevando a cabo una investigación.|
| Amenazas |Los administradores del foro clandestino, el actor HaciendaSec o el malware presente en los sitios web visitados. |
| Vulnerabilidades |Errores humanos (ej. inicios de sesión accidentales con cuentas personales) o el uso de un navegador desactualizado.|
| Riesgo |Sufrir una intrusión (hackeo) y exponer nuestra información personal a los atacantes, dando lugar a posibles extorsiones o represalias. |
| Contramedidas |Usar una máquina virtual desechable, enrutamiento de tráfico por la red Tor sobre una VPN y deshabilitar JavaScript en el navegador Tor.|

### 8.2 Identidad de investigación

El analista utilizará una identidad ficticia (sockpuppet). Debe ser una cuenta creada expresamente para esta investigación, sin ninguna vinculación personal y de perfil bajo (estrictamente de solo lectura, sin escribir, preguntar ni comprar). Queda totalmente descartado el uso de nombres reales.

### 8.3 Riesgos para las personas y conflictos de intereses

**Psicologico:**La dark web contiene material ilegal, violento o perturbador. Existe un riesgo real de exposición accidental a este tipo de contenidos durante la navegación.

**Conflicto de Intereses:** Dado que la filtración afecta a 47,3 millones de contribuyentes en España, hay una altísima probabilidad de que el DNI propio o el de familiares directos esté en la muestra. La contramedida profesional sería la siguiente: si un analista identifica datos propios o de allegados, paralizará la visualización inmediatamente y notificará al portavoz del equipo para ser relevado de esa tarea, evitando así sesgos y conflictos emocionales.

## 9. Trazabilidad y custodia

Ante un posible proceso judicial, es fundamental poder demostrar la procedencia exacta de la información obtenida (capturas de pantalla, archivos, documentos) mediante el uso de garantías criptográficas.

**¿Que registramos?:** Se documenta un registro cronológico (timeline). Se anota la fecha, la hora (en formato UTC para evitar discrepancias por zonas horarias) y la URL exacta de cada paso. Las capturas de pantalla y los archivos originales se guardan de forma segura en un disco duro cifrado.

**No alteracion:** A cada evidencia digital recolectada (capturas, textos, archivos descargados) se le calcula inmediatamente su huella criptográfica (hash SHA-256). Si alguien altera un solo píxel de la imagen en el futuro, el hash cambiará por completo. El registro de la investigación debe incluir siempre el nombre exacto de cada archivo y su hash correspondiente para asegurar la cadena de custodia.

## 10. Manejo y difusión

| Producto | Destinatario | Canal | Etiqueta TLP | ¿Podría publicarse en este repositorio? ¿Por qué? |
|---|---|---|---|---|
|Plan de investigación estratégico. |Equipo docente de la asignatura. |Pull request en el repositorio de GitHub de la universidad. |TLP:CLEAR. |Sí. Al ser TLP:CLEAR, la información no reviste riesgo. No contiene datos personales, ni vulnerabilidades expuestas, ni evidencias del caso, únicamente la metodología de trabajo a seguir. |
|Informe de resultados y evidencias (ej. confirmación de la veracidad de la muestra o hallazgo del origen de la filtración). |Ministerio de Hacienda y organismos competentes (CCN-CERT). |Comunicación cifrada (PGP) o plataformas seguras de reporte de incidentes. |TLP:AMBER (o TLP:RED para detalles muy sensibles). |No. Contendría datos sensibles, tácticas del atacante o posibles vulnerabilidades reales que pondrían en riesgo a la organización y a los ciudadanos si se hacen públicas. |

Si la investigación confirmara una filtración de datos de ciudadanos (H03) o el compromiso de infraestructuras vinculadas a la Administración, el equipo realizaría un reporte o divulgación responsable.

## 11. Alcance de la investigación

| Campo | Definición |
|---|---|
| Objetivo |Verificar la existencia, origen y veracidad de la supuesta filtración de datos de 47,3 millones de ciudadanos atribuida a Hacienda, evaluando la credibilidad del actor 'HaciendaSec' mediante fuentes abiertas. |
| Finalidad |Realizar una práctica académica universitaria (interés legítimo) y generar un reporte técnico sobre el incidente para que los organismos competentes puedan tomar medidas de protección. |
| Fuentes permitidas | |
| Técnicas permitidas | |
| Exclusiones específicas |Se excluye cualquier interacción con el actor 'HaciendaSec', la compra o descarga masiva de datos personales, el escaneo activo de infraestructuras del Ministerio, y el contacto directo con posibles afectados |
| Canal de entrega del resultado |Entrega del informe técnico mediante correo electrónico cifrado (PGP) o plataformas de reporte seguro a los organismos competentes, bajo protocolo TLP:AMBER |
| Vigencia |Hasta la finalización de la evaluación de la práctica académica en el semestre en curso. |


---

## Fuentes

| ID | Organización | Título | Fecha de consulta |
|---|---|---|---|
| | | | AAAA-MM-DD |

> **Qué debe contener:** las fuentes del material de partida que el grupo ha leído y citado.

## Equipo

### Organización del trabajo

> **Qué debe contener:** cómo se ha organizado el grupo y quién se ha encargado de qué.

### Aportación individual

> **Qué debe contener:** un apartado por miembro, escrito por la propia persona y con su nombre: qué ha hecho, qué decisión del grupo defendió o discutió y qué le resultó más difícil.

## Uso de inteligencia artificial

La declaración está en [registro-ia.md](registro-ia.md).

## Comprobación antes de entregar

- [ ] Todos los bloques «Qué debe contener» están sustituidos.
- [ ] Ninguna afirmación no confirmada se presenta como establecida.
- [ ] No se ha realizado ninguna búsqueda ni obtención de información fuera del material de partida.
- [ ] El repositorio no recibe archivos de noticias, capturas con datos personales ni material no publicable.
- [ ] `registro-ia.md` está completo, con los prompts, o declara que no se ha usado IA.
- [ ] El *pull request* solo modifica archivos de la carpeta del grupo.
