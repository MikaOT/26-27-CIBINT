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
| H01 | Hipertextual sostiene que la información se puso a la venta en un foro de la web oscura | Hipertextual, a partir de lo publicado por Hackmanac | No. La captura (H15) muestra una oferta de venta, pero no el tipo de foro; Infobae solo lo nombra como ForumBreach (H16) | Afirmada sin confirmar en cuanto al lugar. La existencia del anuncio se valora en H15 |
| H01 | De acuerdo con la información disponible, Hipertextual sostiene que el presunto hackeo se hizo visible el sábado 31 de enero de 2026 | Hipertextual | No. La captura (H15) coincide en la fecha, pero procede de la misma fuente, Hackmanac | Afirmada sin confirmar, respaldada por la captura |
| H02 - H14 | Hackmanac alerta en X y en su web de que HaciendaSec afirma haber accedido a una base de datos del ministerio, y acompaña la alerta con la captura del anuncio | Hackmanac, en la imagen de su publicación (H14) y según Infobae (H02) | No procede: se valora la publicación, visible en la imagen que reproduce F02 | Establecida la publicación de la alerta, que transmite la reclamación del actor sin afirmar que el ataque ocurriera. El titular de F01 atribuye la alerta a Hacienda; el cuerpo, a Hackmanac |
| H02 | HaciendaSec afirma haber accedido de forma fraudulenta a una base de datos del ministerio y estaría ofreciendo a la venta información de unos 47,3 millones de ciudadanos | HaciendaSec, según Hackmanac, según Infobae | No. Todas las fuentes remiten a Hackmanac | Afirmada sin confirmar. El anuncio (H15) no menciona ningún acceso |
| H03 | HaciendaSec afirma que la base incluye DNI y NIF, nombres completos, direcciones, teléfonos, correos electrónicos, datos bancarios (IBAN) e información fiscal | HaciendaSec, según Hackmanac, según Infobae | No. La lista de campos de la captura (H15) es del propio actor | Afirmada sin confirmar. La captura no tiene ningún campo con ese nombre; los más próximos son Ultimo Recaudado y Recaudo Total |
| H04 | Infobae señala que el mensaje se acompañó de una supuesta muestra de los datos como prueba de la intrusión | Infobae | No. La captura (H15) muestra un apartado de muestra censurado, pero procede de la misma fuente, Hackmanac | Afirmada sin confirmar. No se sabe qué contenía la muestra y si era auténtica |
| H04 | Infobae señala que la cuenta desde la que se difundió el mensaje se creó el mes anterior | Infobae | No. La captura (H15) muestra Joined: Jan 2026, pero procede de la misma fuente, Hackmanac | Afirmada sin confirmar, respaldada por la captura |
| H04 | Infobae señala que la cuenta tiene una única publicación, un detalle que los especialistas tienen en cuenta al valorar la credibilidad | Infobae | No. La captura no muestra el número de publicaciones | Afirmada sin confirmar. No se identifica a los especialistas |
| H05 | Fuentes del ministerio aseguran que no existen indicios de que se haya producido una intrusión efectiva en sus sistemas, y que los equipos técnicos continúan trabajando para verificarlo (2 de febrero) | Fuentes del ministerio, según Europa Press (F01) | No. F02 dice lo mismo, también a partir de Europa Press | Afirmada sin confirmar, por la organización afectada. H08 la actualiza tras las comprobaciones de las unidades de ciberseguridad, pero procede de la misma organización, así que no la confirma |
| H06 | El ministerio comentó que estaba desplegando los procedimientos para determinar si sus sistemas habían sido realmente vulnerados | Ministerio de Hacienda, según El Periódico, según Hipertextual | No | Afirmada sin confirmar, por la organización afectada y de segunda mano. Coincide con H05 |
| H06 | Hipertextual indica que Hacienda no había confirmado ni desmentido el presunto hackeo ni se había pronunciado públicamente más allá de lo dicho a El Periódico | Hipertextual | No | Afirmada sin confirmar. Compatible con H05, que no confirma ni desmiente y procede de fuentes del departamento. Se refiere al resultado, no a la revisión, que el ministerio sí reconoce (fila anterior) |
| H07 | Hackmanac alertó también de una presunta brecha distinta en el Ministerio de Ciencia e Innovación, atribuida a otro usuario | Hackmanac, según Infobae | No | Afirmada sin confirmar. Otro organismo, otro actor y otro caso |
| H08 | Fuentes del ministerio afirman que no han encontrado rastro de ningún ciberataque que haya provocado un robo de datos o un acceso no deseado a sus sistemas tras las comprobaciones de las unidades de ciberseguridad de los distintos departamentos y que seguirán monitorizando (3 de febrero) | Fuentes del ministerio, según Europa Press (F04) | No. F05 lo recoge (H09) sin indicar comprobaciones propias | Afirmada sin confirmar, por la organización afectada. Actualiza H05 y se limita a sus sistemas. El titular de la fuente F04 de este hecho dice incluso que Hacienda descarta el ciberataque |
| H09 | El portal recoge que no existen evidencias de que los sistemas de la Agencia Tributaria hayan sido vulnerados | Xunta de Galicia, portal de ciberseguridad | No. El portal no indica comprobaciones propias ni cita documentos | Afirmada sin confirmar. Reproduce a la organización afectada; habla de la Agencia Tributaria donde H08 habla del ministerio. Añade auditorías que F04 no menciona |
| H09 | El portal sostiene que las afirmaciones del actor se hicieron sin aportar pruebas técnicas verificables y se difundieron con rapidez | Xunta de Galicia, portal de ciberseguridad | No | Cálculo o interpretación de un tercero. Compatible con H04: la única muestra que recoge el material aparece censurada. F05 dice además que el actor afirmó haber robado la base de datos completa de contribuyentes; el anuncio (H15) no habla de una base completa ni de contribuyentes |
| H10 | El portal recomienda desconfiar de la información no confirmada, consultar los canales oficiales, verificar antes de compartir y estar atentos a fraudes y desinformación vinculados a supuestos ciberataques | Xunta de Galicia, portal de ciberseguridad | No procede | Recomendación |
| H11 | UpGuard indica que las autoridades investigan si las afirmaciones de HaciendaSec son un engaño o si los datos proceden de otra fuente menos segura | UpGuard | No. F05 plantea una hipótesis parecida (H20), también sin citar fuente | Cálculo o interpretación de un tercero (hipótesis). No concreta qué autoridades |
| H12 | Hipertextual recuerda que en octubre de 2025 un grupo dijo haber robado 60 GB de datos personales tras vulnerar los sistemas de la Agencia Tributaria, y que en diciembre de 2024 la Agencia había sido víctima del presunto robo de más de 560 GB por parte de piratas informáticos | Hipertextual | No | Afirmada sin confirmar. Contexto; no se vincula. F03 no atribuye el episodio de 2024 al grupo de 2025. No es comparable con H17 (GB frente a archivos) |
| H13 | Hipertextual recomienda estar alerta a llamadas, mensajes o correos sospechosos para evitar la suplantación de identidad | Hipertextual | No procede | Recomendación |
| H15 | HaciendaSec anuncia que vende la base de datos actualizada de Hacienda, con información de 47,3 millones de ciudadanos; enumera sus campos, incluye una muestra censurada y ofrece más registros (31 de enero de 2026, 07:16 PM, sin zona horaria) | HaciendaSec, en una captura que Hackmanac publicó en X y que reproducen 65ymas e Hipertextual | No procede: es la única observación del anuncio. F02 y F03 reproducen la misma captura, no dos observaciones | Establecida la publicación de la captura por Hackmanac (H14); lo que afirma el actor, sin confirmar. No menciona ninguna intrusión y habla de ciudadanos, no de contribuyentes |
| H16 | Infobae sitúa el mensaje en el foro ForumBreach | Infobae | No. Ninguna otra fuente nombra el foro | Afirmada sin confirmar |
| H17 | Infobae recuerda que en octubre de 2025 varios foros especializados detectaron la posible filtración de 238.799 archivos atribuida a Qilin, que la Agencia Tributaria negó que se hubieran visto comprometidos datos personales de los contribuyentes, y que fuentes de Hacienda dicen desconocer a esta organización y sus actividades en Europa, así como cualquier relación con la alerta actual | Infobae, citando a foros especializados y a fuentes de Hacienda | No | Afirmada sin confirmar. Contexto; no se vincula: Hacienda dice desconocer la relación, no la niega. No es comparable con H12 |
| H18 | UpGuard afirma que el ministerio, en coordinación con el Centro Criptológico Nacional, inició una investigación forense, y que el CCN sigue la actividad del actor | UpGuard | No. Ninguna otra fuente menciona al CCN | Afirmada sin confirmar, por una fuente con errores de fecha (H19) |
| H19 | UpGuard afirma que las reclamaciones de HaciendaSec se hicieron públicas el 3 de febrero de 2026 | UpGuard | No | Contradicha por otra fuente: F01, F02 y F03, publicadas el 2 de febrero, ya recogen la alerta |
| H20 | El portal señala que los organismos competentes buscan determinar si la información mencionada por el atacante procede de otras fuentes externas, de filtraciones antiguas o de datos falsos reutilizados, una práctica que califica de habitual | Xunta de Galicia, portal de ciberseguridad | No. Coincide con H11, y ninguna de las dos cita fuente | Cálculo o interpretación de un tercero (hipótesis). Lo de práctica habitual es una generalización del portal |
| H21 | Infobae sostiene que el supuesto ciberataque habría puesto en riesgo datos de prácticamente toda la población española | Infobae | No. F06 dice algo parecido | Cálculo o interpretación de un tercero a partir de la cifra del actor (H02). No es una cifra de afectados |

> **Qué debe contener:** todas las afirmaciones relevantes del material de partida. La valoración indica cómo debe tratarse cada una: establecida, afirmada sin confirmar, cálculo o interpretación de un tercero, contradicha por otra fuente, etc.

### 2.2 Lo que puede darse por establecido

**Existencia de una oferta de venta de datos**: _[F01, F02, F03, F04, F06]:_ El 31 de enero de 2026 se hizo visible en foros de la dark web una publicación de un actor bajo el alias **HaciendaSec**, en la que afirma haber sustraído y puesto a la venta una base de datos con información personal, bancaria y fiscal de 47,3 millones de ciudadanos. **_Por qué se considera establecido:_** Es un hecho objetivo y documentado el evento de la publicación y las afirmaciones del actor, reportado por empresas de monitorización (Hackmanac, UpGuard) y múltiples medios. (Nota: Se da por establecida la existencia del anuncio, no la veracidad de las afirmaciones del atacante).

**Inexistencia de intrusión en los sistemas propios del Ministerio**: _[F04, F05]_: Tras verificaciones internas y auditorías técnicas, el Ministerio de Hacienda no ha detectado rastros de ciberataque, accesos no autorizados ni exfiltración de información en sus sistemas oficiales. Por qué se considera establecido: Existe una declaración oficial e inequívoca de la organización afectada [F04], respaldada por el análisis de un organismo público técnico e independiente (Cibersegurida de Galicia) [F05].

### 2.3 Lo que no se sabe

| ID | Laguna | Se puede reducir mediante fuentes abiertas? | Motivo | 
| - | - | - | - |
| 01 | No se sabe si los datos que se han puesto a la venta, ni la muestra son reales o no, y, si en caso de serlo, son reales únicamnete los de la muestra | En parte | Si se puede comprobar si la muestra es real o no, pero no se pueden comprobar el resto de datos sin comprarlos |
| 02 | No se conoce ningun dato del hacker 'HaciendaSec', además, su cuenta no tiene ninguna publicación y ha sido creada hace menos de un mes, por lo que carece también de credibilidad | Si | Se conoce el nombre del atacante, por lo que se puede hacer una investigacion basada en fuentes publicas |
| 03 | Si los datos de Hacienda se han visto realmente vulnerados o no | No | No se puede saber sin tener acceso al propio sistema interno de Hacienda |

## 3. Necesidad de inteligencia

| Pregunta | Laguna de la que procede (2.3) | Quién usaría la respuesta | Para qué decisión o protección |
|---|---|---|---|
| La información publicada como muestra, ¿es cierta? | 01 | Ministerio de Hacienda y AEPD | Para confirmar la posibilidad de que el atacante tenga acceso a los datos |
| Si la información de muestra es cierta, ¿era información ya filtrada previamente o completamente nueva? | 01 | Ministerio de Hacienda y AEPD | Para saber si es necesario tomar medidas al respecto o es únicamente un intento de estafa con datos falsos |
| ¿Quién es HaciendaSec?, ¿Puede ser el responsable de/estar relacionado con los robos de datos en la Agencia Tributaria en 2025? | 02 | Grupo de delitos telemáticos (GDT) | Para tomar las acciones legales necesarias contra el atacante |
| ¿Existen vulnerabilidades en la infraestructura de Hacienda que puedan dar legitimidad a las filtraciones? | 03 | Equipo de ciberseguridad de Hacienda | Para solventarlo y evitar futuras filtraciones |

### Preguntas que no se intentarán responder
| Pregunta | Por qué |
| - | - |
| ¿Son reales todos los datos que posee el atacante? | Para contestar esta pregunta, seria necesario comprar lo que vende el atacante, que no es una fuente abierta |
| ¿Por dónde ha accedido el hacker a la bd de Hacienda? | Para saberlo sería necesario acceder a las redes internas de Hacienda, lo que no está permitido sin su autorización |
| ¿Que hay en los logs de hacienda con respecto a accesos? | No hay acceso público a estos datos | 

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

**Cayetano Castillo Ruiz:**

**¿Qué he hecho?:**
Me he encargado de analizar las fuentes dadas para el caso de Hacienda para extraer los hechos que dimos por establecidos en el apartado (2.2), tambien he definido el marco de legitimación y no inteferencia (4). Finalmente, desarrolle toda la fase operativa y de seguridad (apartados 7,8,9 y 10) ademas de unificar todo el trabajo realizado en el apartado (11) para dejar registrado el alcance de la investigación.

**¿Qué decisión del grupo defiendo?:**
Defiendo la necesidad de aplicar medidas de OPSEC casi paranoicas (uso de sockpuppets y máquinas virtuales aisladas) debido a los riesgos de investigar foros de la dark web. Tambien he discutido la clasificación de la información, argumentando que nuestro plan podía ser TLP:CLEAR, pero cualquier hallazgo debía tratarse obligatoriamente como TLP:AMBER para no alertar al atacante.

**¿Qué apartado me ha resultado más difícil?:**
Lo mas complejo fue el apartado (2.2), ya que tenía que filtrar la información de forma rigurosa dada en las fuentes de la actividad. También me supuso un reto cuadrar la tabla del alcance final (11) juntando toda la información registrada por los compañeros, para que no hubiera ninguna contradicción.
## Uso de inteligencia artificial

La declaración está en [registro-ia.md](registro-ia.md).

## Comprobación antes de entregar

- [ ] Todos los bloques «Qué debe contener» están sustituidos.
- [ ] Ninguna afirmación no confirmada se presenta como establecida.
- [ ] No se ha realizado ninguna búsqueda ni obtención de información fuera del material de partida.
- [ ] El repositorio no recibe archivos de noticias, capturas con datos personales ni material no publicable.
- [ ] `registro-ia.md` está completo, con los prompts, o declara que no se ha usado IA.
- [ ] El *pull request* solo modifica archivos de la carpeta del grupo.
