# Plan de investigación · Grupo 1 · Ministerio de Hacienda

## Ficha del plan

| Campo | Contenido |
|---|---|
| Grupo | 1 |
| Caso | Supuesta sustracción de datos de contribuyentes atribuida al Ministerio de Hacienda, febrero de 2026 |
| Material de partida | [casos/hacienda](../../../../actividades/A02-plan-de-investigacion/casos/hacienda/README.md): `H01`–`H13` y `F01`–`F06` |
| Portavoz | Eirik Rosete |
| Miembros del equipo | Cayetano Castillo, Saul de Cos y Eirik Rosete |

---

## 1. Resumen del plan

El plan busca saber si la muestra que acompaña al anuncio de HaciendaSec es auténtica, si los datos ya se habían filtrado antes, si alguna fuente relaciona el anuncio con incidentes previos y qué dicen los organismos sobre una posible intrusión. El objetivo es académico, y el resultado ayudaría a que los organismos competentes valoren el incidente. Se usarían el material de partida, la publicación original de Hackmanac, los comunicados oficiales, los análisis de medios, organismos y empresas de seguridad, y las descripciones de filtraciones anteriores, siempre sin iniciar sesión y limitando la búsqueda a términos del incidente. No se entrará al foro, ni se verá o comprará la muestra, ni se contactará con el actor, ni se usarán identidades falsas, ni se identificará a HaciendaSec, ni se relacionará el caso con otros incidentes, ni se buscarán vulnerabilidades en los sistemas de Hacienda. El plan se mantendrá hasta que termine la evaluación de la práctica en el semestre actual.

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

Cada fuente o técnica se ha analizado con las tres preguntas del Tema 2: si es lícita, si es legítima y proporcionada, y si es segura. La licitud se explica en su columna; la legitimidad y proporcionalidad, en la de menor intrusión; y la seguridad, en lo que se expondría y a quién.

| ID | Fuente o técnica | Pregunta a la que responde (3) | Por qué es lícita | Por qué es la menos intrusiva disponible | Qué expondría y a quién |
|---|---|---|---|---|---|
| OB1 | Lectura del material de partida (F01–F06) | 1 y 2 | Es el material que nos han facilitado | No hace falta consultar nada más | Nada |
| OB2 | Publicación original de Hackmanac en X y en su web (H14), consultada sin iniciar sesión | 1 | Es contenido público y no se infrige algún sobrepaso de medida de seguridad | Sustituye a entrar directamente al foro del anuncio (H15, H16) | Una visita a X y a la web de Hackmanac, que no son el adversario. La imagen y las respuestas podrían mostrar datos de terceros |
| OB3 | Comunicados oficiales del Ministerio de Hacienda, la Agencia Tributaria y el CCN-CERT | 1, 2 y 4 (en parte) | Son publicaciones oficiales y públicas | Es la fuente directa de la organización afectada, sin intermediarios | Mínima: una visita a webs oficiales |
| OB4 | Búsqueda limitada, en un buscador web y con términos del incidente, de análisis publicados después del 5 de febrero sobre la autenticidad o el origen de los datos, y sobre si alguna fuente relaciona el anuncio con incidentes anteriores | 1, 2 y 3 (en parte) | Solo se abrirían resultados públicos, según lo indicado en 6.1 | Es la alternativa a entrar en el foro o seguir al actor | Los resultados podrían llevar al foro, a copias de la muestra o a datos de contribuyentes. El buscador guardaría las consultas |
| OB5 | Descripción publicada de las filtraciones previas (H12, H17), solo de los tipos de datos que se dijo que contenían | 2 | Solo se consultarían descripciones, nunca los datos (art. 197.2 CP) | Es la opción para evitar comparar con los datos filtrados | Las páginas pueden enlazar a esas filtraciones. Se compararían campos, no actores; no se relacionaría a HaciendaSec con esos incidentes |

Las preguntas 3 y 4 del apartado 3 solo se cubren en parte:

- Pregunta 3: OB4 recogería si alguna fuente publicada relaciona el anuncio con los incidentes de 2025 (H12, H17), sin que el grupo establezca esa relación. No se prevé ninguna técnica para saber quién es HaciendaSec: identificar a una persona no corresponde al grupo, y reunir lo publicado por el alias no sería proporcionado (Tema 2). Corresponde a las Fuerzas y Cuerpos de Seguridad del Estado.
- Pregunta 4: OB3 recogería lo que el ministerio o el CCN-CERT publicasen sobre una posible vulnerabilidad o intrusión. No se prevé ninguna técnica para buscar vulnerabilidades: probarlas sería ilícito, porque comprobar no es investigar (Tema 2). Consultar motores que indexan infraestructura sería lícito, pero no estaría justificado para un grupo que no tiene encargo de la organización afectada. Eso es tarea del ministerio y del CCN-CERT.

Estas exclusiones se recogen en el 6.2.

### 5.2 Evaluaciones de licitud

Se elige OB4 porque es la que más dudas plantea: podría devolver datos de contribuyentes o copias de la muestra. Se elige OB2 porque plantea un riesgo distinto: X podría pedir iniciar sesión y la captura muestra contenido del actor.

| Campo de la plantilla | OB4 · búsqueda limitada | OB2 · publicación de Hackmanac |
|---|---|---|
| Pregunta (3) | 1, 2 y 3 (en parte) | 1 |
| Quién investiga y fecha | El grupo, en una práctica de la asignatura (05/10/2026) | Igual |
| Datos de personas identificables | No se buscan, pero pueden salir datos de contribuyentes | No se buscan, pero pueden salir cuentas de usuarios y la muestra |
| Categorías especiales o datos penales (art. 9 y 10 RGPD) | No. Si se detectaran, se detendría y se consultaría | Igual |
| Base de licitud | Interés legítimo académico (apartado 4) | Igual |
| Por qué es necesario | Solo se puede responder a esas preguntas con lo que otros ya publicaron | Esa es la fuente principal de la alerta |
| Qué se descarta | Datos de contribuyentes y publicaciones del alias que no tienen relación con el incidente | Cuentas, comentarios y cualquier dato de la muestra |
| Informar a los afectados | No: no se tratarían sus datos | Igual |
| Conservación | Hasta la revisión de la calificación | Igual |
| Supera medidas de seguridad | No; se descartarían los resultados que pidan registro | No; si X pide sesión, se para |
| Credenciales, contacto o suplantación | No | No; no se respondería ni se escribiría a Hackmanac |
| Investigar a una persona por encargo | No: los términos son del incidente | No |
| Condiciones de uso | Uso normal de un buscador | Sin cuenta ni identidad virtual, (zona gris según el Tema 2 )|
| Forma menos intrusiva | OB1 y OB3, que irían antes | La imagen que reproduce F02 (OB1) |
| Quién podría resultar perjudicado | Contribuyentes, si salieran sus datos | Contribuyentes y usuarios que respondan |
| Explicable a un tercero imparcial | Sí, con las condiciones del 6.1 | Sí |
| Rastro en sistemas del objetivo | No, si el foro y los sitios del actor no se abren | No: X y Hackmanac no son el adversario |
| Medios de trabajo y envío a terceros | Medios separados, solo los términos de búsqueda | Medios separados, nada |
| Quién conoce el resultado | El grupo y el docente, TLP:AMBER | Igual |
| Decisión | Adecuada con condiciones | Adecuada con condiciones |
| Condiciones | Las del 6.1 | Las del 6.1 |
| Consultas | El docente, por el canal privado | Igual |
| Validación | Cumple las comprobaciones 1 a 4. La bitácora se genera al ejecutar (ver apartado 9) | Igual |

## 6. Reglas de actuación

### 6.1 Lo que se haría solo con condiciones

| Actuación | Condición que debería cumplirse | Quién comprobaría que se cumple |
|---|---|---|
| OB2 · publicación de Hackmanac | Sin sesión iniciada. Si X lo pide, se usa la imagen de F02 y no se amplía | Otro miembro del grupo |
| OB4 · búsqueda limitada | Solo se abren medios, organismos y empresas de seguridad. No se abren foros, copias de la muestra ni sitios del actor | Otro miembro del grupo |
| OB5 · filtraciones anteriores | Solo se revisa la descripción; no se abre ningún enlace a los datos | Otro miembro del grupo |
| Guardar capturas | Sin datos personales, o recortadas antes de guardarlas | El portavoz |

### 6.2 Lo que no se haría

| Exclusión propia de este caso | Por qué |
|---|---|
| Entrar en ForumBreach (H16) para ver el anuncio o la muestra | Haría que el grupo se mostrase ante el actor y puede implicar manejar datos filtrados (art. 197.2 CP) |
| Intentar ver la muestra sin censura o buscar copias | Significa apropiarse de datos de contribuyentes (art. 197.2 CP) |
| Responder al anuncio, que ofrece más registros (H15), o comprar la base de datos | Sería contactar con el actor y financiar un delito |
| Usar una identidad ficticia en X o en el foro | El Tema 2 la sitúa en zona gris |
| Buscar el DNI propio o de familiares en servicios de comprobación de filtraciones | Esto implica manejar datos filtrados y genera un conflicto de intereses |
| Identificar a HaciendaSec o reunir lo que publica | No corresponde al grupo (pregunta 3) |
| Relacionar el caso con Qilin, con los incidentes de 2024 y 2025 o con GordonFreeman (H07, H12, H17) | No hay fundamento para vincularlos |
| Buscar vulnerabilidades en los sistemas de Hacienda, ya sea de forma activa o pasiva | Sería ilícito o desproporcionado (pregunta 4) |

### 6.3 Condiciones de parada

| Si ocurriera… | El equipo… | Y consultaría a… |
|---|---|---|
| Aparece un dato personal sin censurar | Para, no lo copia y anota solo la URL | El docente, por el canal privado |
| Un resultado lleva al foro o a una descarga | No lo abre y lo descarta | El docente |
| Un miembro identifica datos suyos o de su entorno | Se retira de esa tarea | El portavoz y el docente |
| Una fuente menciona a una persona real como HaciendaSec | No sigue esa línea ni la registra | El docente |
| Alguien externo contacta con el grupo por el caso | No responde | El docente |

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
| Fuentes permitidas | Material de partida (F01–F06), publicación de Hackmanac en X y en su web, comunicados oficiales del Ministerio de Hacienda, la Agencia Tributaria y el CCN-CERT, análisis publicados por medios, organismos y empresas de seguridad, y descripciones publicadas de las filtraciones anteriores (OB1–OB5) |
| Técnicas permitidas | Lectura del material, consulta sin iniciar sesión, búsqueda limitada en un buscador web con términos del incidente y lectura de descripciones, nunca de los datos (OB1–OB5, con las condiciones del 6.1) |
| Exclusiones específicas |Se excluye cualquier interacción con el actor 'HaciendaSec', la compra o descarga de datos personales, el escaneo activo de infraestructuras del Ministerio, y el contacto directo con posibles afectados. También entrar en ForumBreach, intentar ver la muestra sin censurar, usar identidades ficticias, buscar datos propios en servicios de comprobación de filtraciones, identificar a HaciendaSec, vincular el caso con otros incidentes y buscar vulnerabilidades de forma activa o pasiva (6.2) |
| Canal de entrega del resultado |Entrega del informe técnico mediante correo electrónico cifrado (PGP) o plataformas de reporte seguro a los organismos competentes, bajo protocolo TLP:AMBER |
| Vigencia |Hasta la finalización de la evaluación de la práctica académica en el semestre en curso. |


---

## Fuentes

| ID | Organización | Título | Fecha de consulta |
|---|---|---|---|
| F01 | Infobae | Hacienda alerta de un posible ciberataque a sus bases de datos: está en riesgo información personal de 47,3 millones de ciudadanos | 05/10/2026 |
| F02 | 65ymas | Hacienda investiga si un ciberataque ha sustraído datos de 47 millones de contribuyentes | 05/10/2026 |
| F03 | Hipertextual | Nuevo hackeo a Hacienda: qué se sabe y cómo proteger tus datos | 05/10/2026 |
| F04 | idealista/news | Hacienda descarta haber sufrido un ciberataque con robo de datos tal y como señaló Hackmanac | 05/10/2026 |
| F05 | Xunta de Galicia · Ciberseguridade Galicia | El Ministerio de Hacienda descarta una brecha de datos tras las verificaciones internas realizadas | 05/10/2026 |
| F06 | UpGuard | HaciendaSec Claims Data Breach on Spain’s Ministry of Finance | 05/10/2026 |

La fecha es la de la primera consulta. Las fuentes se volvieron a consultar durante todo el trabajo.

## Equipo

### Organización del trabajo

El trabajo se repartió por apartados y cada miembro subió los suyos al repositorio:

- Cayetano Castillo: 2.2, 4, 7, 8, 9, 10 y 11.
- Saul de Cos: 2.3 y 3.
- Eirik Rosete: 1, 2.1, 5, 6, Fuentes y las fuentes y técnicas permitidas del 11.

### Aportación individual

**Cayetano Castillo Ruiz:**

**¿Qué he hecho?:**
Me he encargado de analizar las fuentes dadas para el caso de Hacienda para extraer los hechos que dimos por establecidos en el apartado (2.2), tambien he definido el marco de legitimación y no inteferencia (4). Finalmente, desarrolle toda la fase operativa y de seguridad (apartados 7,8,9 y 10) ademas de unificar todo el trabajo realizado en el apartado (11) para dejar registrado el alcance de la investigación.

**¿Qué decisión del grupo defiendo?:**
Defiendo la necesidad de aplicar medidas de OPSEC casi paranoicas (uso de sockpuppets y máquinas virtuales aisladas) debido a los riesgos de investigar foros de la dark web. Tambien he discutido la clasificación de la información, argumentando que nuestro plan podía ser TLP:CLEAR, pero cualquier hallazgo debía tratarse obligatoriamente como TLP:AMBER para no alertar al atacante.

**¿Qué apartado me ha resultado más difícil?:**
Lo mas complejo fue el apartado (2.2), ya que tenía que filtrar la información de forma rigurosa dada en las fuentes de la actividad. También me supuso un reto cuadrar la tabla del alcance final (11) juntando toda la información registrada por los compañeros, para que no hubiera ninguna contradicción.

#### Eirik Rosete

**¿Qué he hecho?:**
Realización del apartado 2.1 con 26 afirmaciones (dividiendo las proporcionadas en hechos.csv y H14–H21, obtenidas de las fuentes), del apartado 5 para el plan de obtención con dos evaluaciones de licitud y del apartado 6, las reglas de actuación; parte del apartado 11 con los apartados 5 y 6 y el resumen del apartado 1.

**¿Qué decisiones del grupo defiendo?:**

    - En el apartado 2.1, la mayoría de hechos afirmados tienen  “afirmada sin confirmar”, porque todos los medios dependen de la publicación y página web de Hackmanac;
    - No investigar quién es HaciendaSec ni vulnerabilidades en Hacienda, porque no nos corresponde dicha tarea, como se explica en los apartados 5 y 6.

**¿Qué apartado me ha resultado más difícil?:** 

Atribuir sin añadir certeza y mantener el mismo tono del medio que lo comunica. Por ejemplo, conservar “estaría ofreciendo” o verificar que la captura no confirme nada, ya que proviene de la misma fuente.

## Uso de inteligencia artificial

La declaración está en [registro-ia.md](registro-ia.md).

## Comprobación antes de entregar

- [x] Todos los bloques «Qué debe contener» están sustituidos.
- [x] Ninguna afirmación no confirmada se presenta como establecida.
- [x] No se ha realizado ninguna búsqueda ni obtención de información fuera del material de partida.
- [x] El repositorio no recibe archivos de noticias, capturas con datos personales ni material no publicable.
- [x] `registro-ia.md` está completo, con los prompts, o declara que no se ha usado IA.
- [x] El *pull request* solo modifica archivos de la carpeta del grupo.
