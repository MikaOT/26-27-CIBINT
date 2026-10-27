# PF · Tema, alcance y casos propuestos

[Proyecto final](README.md) · Siguiente: [Proceso y entregas](02-proceso-y-entregas.md)

## Modalidades de proyecto

El tema debe ser un caso real de ciberseguridad con información suficiente para formular una pregunta de inteligencia y responderla mediante fuentes autorizadas. Puede ser un incidente documentado, una campaña que afecta a un sector, una revisión de exposición de una organización o una investigación sobre el propio estudiante. La selección se justificará por la decisión que permite estudiar y por la disponibilidad de fuentes pertinentes.

| Modalidad | Alcance adecuado | Resultado esperado |
|---|---|---|
| Incidente documentado | Una organización o servicio, un incidente y un periodo definido | Valorar lo que se conoce, el impacto documentado y las prioridades defensivas |
| Campaña de amenazas | Un sector o grupo de organizaciones, un territorio y un periodo | Explicar comportamientos observados y necesidades de protección, sin inventar relaciones entre incidentes |
| Exposición pública | Una organización o servicio delimitado, mediante publicaciones e índices existentes | Contrastar relaciones y proponer comprobaciones al responsable, sin probar fallos |
| Comparación de casos | Como máximo dos casos comparables y una pregunta común | Explicar diferencias relevantes para una decisión; requiere justificar que el alcance sigue siendo manejable |
| Investigación sobre uno mismo | Tu identidad digital, perfiles, publicaciones o activos propios, con periodo y fuentes definidos | Valorar tu exposición y proponer medidas personales; modalidad privada autorizada |
| Caso personal o profesional autorizado | Una situación cercana y delimitada, con autorización de quien corresponda y aprobación previa del alcance | Responder una decisión concreta sin publicar información reservada ni ampliar las acciones autorizadas |

Se priorizan casos de España o Europa, aunque puedes proponer otro si justificas su interés y la disponibilidad de fuentes. No se admite utilizar los casos ficticios de los temas como proyecto individual real.

## Delimitación de la investigación

La propuesta debe delimitar el objeto, las preguntas, el periodo y las acciones de investigación mediante los siguientes criterios:

| Límite | Contenido requerido |
|---|---|
| Objeto | Organización, servicio, campaña, incidente o identidad digital propia; excluye lo que solo comparte proveedor o nombre |
| Decisión | Qué necesita decidir el destinatario y por qué le serviría el informe |
| Preguntas | Entre tres y cinco preguntas principales, relacionadas con esa decisión |
| Periodo de los hechos | Fecha inicial y final de los hechos que vas a analizar |
| Corte de información | Hasta qué fecha y hora incorporarás información al informe |
| Territorio | País, región o sector que estudias, si afecta a la interpretación |
| Fuentes | Tipos de fuentes permitidas y referencias iniciales |
| Acciones | Qué consultas documentales realizarás y qué quedará excluido |
| Datos | Qué necesitas registrar, qué descartarás y cómo evitarás datos personales innecesarios |
| Entrega y autorización | Repositorio público o modalidad personal privada; quién autoriza, qué datos permite y qué canal se ha acordado |
| Resultado | Qué puede responderse con ese alcance y qué necesitaría una investigación interna ajena a la práctica |

El periodo de los hechos y el corte de información son distintos. Puedes estudiar un incidente de 2023 utilizando un informe publicado en 2024, siempre que indiques las dos fechas y no presentes el conocimiento posterior como si hubiera estado disponible durante el incidente.

Ejemplo de delimitación: «Valorar las consecuencias documentadas de la interrupción de un servicio sanitario durante el primer mes del incidente, a partir de comunicados e informes publicados, para proponer prioridades de continuidad a una entidad del mismo sector». Quedan fuera los datos de pacientes, las comprobaciones de sistemas actuales y la identificación de personas responsables.

## Acciones permitidas y excluidas

La práctica es documental y de observación mediante fuentes abiertas e índices existentes. Se aplican las [normas de la asignatura](../NORMAS.md). En este proyecto se concretan así:

| Acciones permitidas dentro del alcance aprobado | Acciones excluidas |
|---|---|
| Leer comunicados, memorias, resoluciones públicas e informes técnicos | Acceder a documentos internos o a material obtenido de una filtración |
| Consultar noticias y comprobar su origen y fecha | Presentar una noticia o una afirmación de un atacante como confirmación independiente |
| Revisar publicaciones oficiales, menciones profesionales necesarias y tu propia huella en la modalidad autorizada | Extender la investigación a familiares, empleados, clientes, víctimas u otras personas sin formar parte del alcance autorizado |
| Consultar datos de registro, registros de transparencia de certificados (CT), DNS histórico e índices ya existentes | Resolver o explorar infraestructura de la entidad por métodos no incluidos expresamente en el alcance |
| Analizar fichas existentes de Shodan, Censys o urlscan.io si están aprobadas | Pedir escaneos nuevos, enviar URL para análisis o activar módulos de reconocimiento |
| Organizar datos ya obtenidos mediante tablas, grafos o scripts locales | Ejecutar herramientas con módulos o transformaciones no revisados |
| Consultar informes públicos sobre filtraciones o actividad en la dark web | Entrar en foros delictivos, crear cuentas de acceso, contactar con vendedores o descargar datos robados |
| Comparar indicadores y técnicas publicados por fuentes fiables | Abrir indicadores maliciosos, descargar malware, probar contraseñas o explotar fallos |
| Proponer medidas y comprobaciones al destinatario del informe | Ejecutarlas sobre la organización estudiada o contactar con ella o con su personal |

Los registros de transparencia de certificados (CT, del inglés *Certificate Transparency*) permiten consultar nombres incluidos en certificados digitales publicados. Una entrada no demuestra que el servicio esté activo ni que se pueda acceder a él desde Internet.

En la modalidad ordinaria no se recopilan datos personales reales para probar correlaciones. En una investigación sobre ti mismo o un caso personal autorizado, conserva solo los datos propios o expresamente autorizados que respondan a las preguntas y entrégalos por el canal privado acordado. No incluyas a terceros por aparecer en una fotografía, comentario o documento. Una captura o una URL también puede contener identificadores, sesiones o información privada. Nunca conserves contraseñas, tokens o claves como evidencia.

En una investigación sobre ti mismo puedes revisar la configuración y las exportaciones legítimas de tus propias cuentas, cuando figuren en el plan aprobado. El acceso normal a una cuenta propia no autoriza a probar contraseñas expuestas, eludir controles, acceder a cuentas ajenas o explorar los sistemas de la plataforma. En un caso profesional, acredita la autorización sin publicar firmas, documentos de identidad ni conversaciones completas. Ni esa autorización ni la aprobación académica permiten ampliar por tu cuenta las acciones del proyecto.

Consultar un índice de terceros no equivale a visitar un servicio del objetivo. Abrir una página pública realiza una conexión: limítala a las páginas documentales previstas en el plan. Las consultas DNS directas y las visitas a servicios técnicos de la entidad quedan fuera del alcance ordinario de este proyecto. El trabajo no requiere hacerlas.

Si una pregunta solo puede responderse mediante una acción excluida, esa limitación debe quedar documentada. La aprobación académica no sustituye una autorización del titular de un sistema ni permite convertir la práctica en una auditoría técnica.

## Procedimiento de aprobación del tema

1. Haz una revisión inicial de viabilidad: localiza al menos tres referencias, incluida una fuente primaria, y comprueba que existe material suficiente. En casos públicos utiliza referencias publicables; en una investigación propia pueden ser observaciones de tus cuentas o archivos propios, identificadas y conservadas de forma privada. Esta revisión no autoriza una exploración técnica del objetivo.
2. Completa la [propuesta de tema](plantillas/propuesta-tema.md), con una extensión máxima de **900 palabras**, sin contar referencias.
3. Entrégala mediante pull request en `entregas/apellidoNombre/PF/TEMA/` el **28 de octubre de 2026, antes de las 23:59**. Si es un caso personal, consulta primero de forma privada y utiliza el canal acordado para la propuesta y el resto de hitos; no publiques detalles para pedir autorización. La entrega requiere el documento de propuesta completo; la comunicación verbal del título no constituye una entrega.
4. Se indicará si el tema está aprobado, necesita cambios o debe sustituirse. El silencio no equivale a aprobación.
5. Incorpora las condiciones recibidas al informe y a la bitácora antes de comenzar la recogida sistemática.

Mientras se revisa la propuesta puedes trabajar la estructura, estudiar el método y revisar documentación general. Si cambia el objeto, el periodo, las fuentes o las acciones, solicita la revisión del alcance antes de aplicarlo. Registra la versión aprobada y las modificaciones.

No se exige que el tema sea exclusivo. Si coincide con el de un compañero, deberán aprobarse preguntas diferenciadas. Cada estudiante tendrá sus propios registros, análisis y documento.

## Opciones de investigación sobre uno mismo

La investigación sobre uno mismo puede estudiar la exposición de datos, perfiles o activos propios sin partir de un incidente previo. El estudiante será el destinatario del informe y deberá definir la decisión personal que necesita tomar, las evidencias necesarias y las medidas que corresponde priorizar. Estas propuestas requieren aprobación previa y entrega privada desde la propuesta.

| Opción | Pregunta posible | Fuentes y límites del caso |
|---|---|---|
| Huella digital e identidad profesional | ¿Qué información sobre mí puede relacionarse entre buscadores, perfiles y publicaciones, y qué debería reducir? | Resultados sobre tu identidad, perfiles propios y publicaciones que te mencionen; separa homónimos y excluye datos de terceros |
| Redes sociales y riesgo de suplantación | ¿Qué elementos de mis perfiles permiten imitar mi presencia o preparar un engaño? | Cuentas propias, enlaces oficiales, imágenes y opciones de visibilidad; no crees perfiles falsos ni pruebes engaños con otras personas |
| Exposición de una web o dominio propio | ¿Qué relaciones entre mis dominios, certificados y alojamiento son públicas y qué riesgos requieren revisión? | Registro, DNS histórico, CT e índices existentes de activos cuya titularidad puedas acreditar; sin escaneos ni pruebas de explotación |
| Repositorios y documentos que he publicado | ¿Qué información innecesaria revelan mis archivos, historial público y metadatos? | Repositorios propios, CV, documentos e imágenes propios; registra la categoría de un secreto si aparece, nunca su valor; detén su difusión y consulta |
| Aviso de brecha recibido en una cuenta propia | ¿Qué está confirmado en el aviso y qué medidas debería tomar para proteger mis cuentas? | Comunicación legítima recibida y documentación pública del proveedor; sin descargar filtraciones, probar credenciales ni investigar a otros afectados |
| Evolución de mi exposición durante el proyecto | ¿Qué cambia tras ajustar la visibilidad de mis perfiles o retirar información innecesaria? | Comparación de capturas propias y fechas, con medidas sobre tus cuentas aprobadas en el plan; distingue un cambio observado de la desaparición garantizada de todas las copias |

El informe debe contrastar las relaciones entre las fuentes, explicar riesgos y limitaciones y justificar recomendaciones. Los ocho temas se aplican según las evidencias disponibles: puede justificarse la falta de datos para relacionar el caso con una vulnerabilidad identificada por CVE o con una técnica de MITRE ATT&CK. Los [ejemplos de aplicación por caso](#aplicación-de-los-contenidos-a-los-casos-propuestos) y la [orientación sobre CVE y MITRE ATT&CK](#aplicación-de-cve-y-mitre-attck-en-investigaciones-personales) desarrollan estas posibilidades. No se incorporarán incidentes supuestos como si fueran hechos comprobados.

## Otras modalidades y objetos de estudio

| Opción | Delimitación posible |
|---|---|
| Un incidente de una pequeña entidad con la que colaboras | Una función o fase de recuperación, con autorización documentada y evidencias seleccionadas; si es un caso personal con información reservada, entrega privada autorizada |
| Suplantación de una marca o entidad mediante canales públicos | Una marca, un periodo y publicaciones documentadas; verificar canales y mensajes sin contactar con operadores ni identificar personas privadas |
| Dependencia de un proveedor en dos incidentes públicos | Como máximo dos casos y una decisión común sobre continuidad; no deducir una causa compartida solo por coincidir el proveedor |
| Exposición documental de una asociación o pequeño negocio | Un conjunto limitado de documentos y publicaciones abiertamente publicables; valorar qué revelan sin probar accesos ni recopilar datos de socios o clientes |

Si el caso requiere información no publicable, descríbelo primero por el canal privado y aclara la autorización disponible. Se valorará si encaja en la modalidad personal autorizada o debe reformularse para el repositorio público.

## Casos documentados de España y Europa

Las referencias siguientes se han consultado el **19 de octubre de 2026**. Son puntos de partida, no expedientes completos ni autorizaciones para actuar sobre las entidades. Revisa las actualizaciones que correspondan al corte de tu trabajo.

### 1. ADIF y Renfe: incidente comunicado en septiembre de 2026

Renfe publicó el 25 de septiembre de 2026 un comunicado sobre un incidente que, según los indicios disponibles entonces, relacionaba con sistemas externos de ADIF. El comunicado distinguía la investigación de un posible acceso a información limitada de usuarios de otros efectos que no se habían acreditado en ese momento. [Fuente primaria: comunicado de Renfe](https://grupo.renfe.com/es/es/sala-de-prensa/noticias/2026/09/renfe-investiga-un-incidente-de-ciberseguridad-vinculado-a-sistemas-externos-de-adif).

**Pregunta posible:** ¿qué puede sostenerse sobre el alcance comunicado y qué comprobaciones deberían priorizarse al evaluar dependencias entre organizaciones?

**Delimitación:** separar las entidades, las fechas y la procedencia de cada afirmación; comparar comunicados y fuentes posteriores. No dar por demostrado un vector de entrada, un actor, un volumen de datos o una relación causal que las evidencias no sostengan. No acceder a sistemas ferroviarios, datos de viajeros ni supuestas muestras robadas.

### 2. Hospital Clínic de Barcelona: continuidad de la actividad en 2023

El hospital publicó el 6 de marzo de 2023 información sobre el ciberataque y su efecto en la actividad asistencial y en la recuperación de sistemas. [Fuente primaria: comunicación del Clínic](https://www.clinicbarcelona.org/noticias/ciberataque-en-el-clinic).

**Pregunta posible:** ¿qué dependencias y prioridades de recuperación documentadas deberían tenerse en cuenta al preparar la continuidad de una entidad sanitaria similar?

**Delimitación:** estudiar servicios, tiempos y decisiones publicados. No buscar historias clínicas, nombres de pacientes, documentos sustraídos ni datos de trabajadores. El análisis puede cerrarse en una etapa concreta de la recuperación.

### 3. Air Europa: comunicación a clientes y protección ante fraude

INCIBE publicó un aviso sobre el incidente comunicado por Air Europa en 2023 y lo actualizó posteriormente. El aviso permite estudiar la información disponible y las recomendaciones difundidas a los clientes en sus respectivas fechas. [Fuente institucional: aviso de INCIBE](https://www.incibe.es/ciudadania/avisos/air-europa-informa-de-un-ciberataque-y-comunica-sus-clientes-cancelar-su-tarjeta).

**Pregunta posible:** ¿qué información necesitaba un equipo de atención al cliente para orientar medidas de protección sin ampliar las afirmaciones más allá de lo confirmado?

**Delimitación:** fijar una versión y un periodo del aviso, distinguir hechos y recomendaciones, y comprobar comunicados de la entidad. No buscar números de tarjeta ni bases de clientes.

### 4. HSE de Irlanda: lecciones de una revisión posterior al incidente

El servicio de salud irlandés dispone de una revisión independiente del ataque Conti de 2021. [Fuente primaria de partida: revisión publicada por HSE](https://about.hse.ie/publications/conti-cyber-attack-on-the-hse-independent-post-incident-review/).

**Pregunta posible:** ¿qué tres prioridades de preparación y respuesta se justifican para un servicio comparable a partir de las evidencias del informe?

**Delimitación:** elegir una fase o un conjunto concreto de dependencias. Distinguir lo que dice la revisión de lo que deduces para el destinatario académico. No convertir un informe de 2021 en una descripción de la situación actual del HSE.

### 5. British Library: recuperación de servicios tras el ataque de 2023

La British Library publicó el 8 de marzo de 2024 una revisión del incidente de octubre de 2023, con su relato de causas, efectos, recuperación y lecciones. [Fuente primaria: presentación de la revisión y enlace al informe](https://www.bl.uk/stories/blogs/posts/learning-lessons-from-the-cyber-attack).

**Pregunta posible:** ¿qué prioridades de recuperación y gestión de dependencias se justifican para una institución cultural con servicios digitales?

**Delimitación:** seleccionar un servicio o una fase de recuperación. Explicar qué información procede de la propia institución y qué contraste independiente está disponible. No reutilizar documentación filtrada ni reproducir datos personales.

## Aplicación de los contenidos a los casos propuestos

Los ejemplos siguientes indican tareas, resultados y limitaciones para orientar la propuesta y los avances. Cada proyecto debe adaptarlos a sus preguntas y fuentes. No se exige ejecutar todas las tareas ni utilizar todas las herramientas; debe justificarse la aplicación de cada tema o la limitación que impida desarrollarlo.

| Caso | Orientación |
|---|---|
| Huella digital y redes sociales propias | [Relación entre identidad, perfiles y exposición](#1-huella-digital-y-redes-sociales-propias) |
| Web o dominio propio | [Inventario, exposición y vulnerabilidades documentadas](#2-web-o-dominio-propio) |
| Repositorios y documentos propios | [Información publicada, metadatos y dependencias](#3-repositorios-y-documentos-propios) |
| Incidentes documentados | [Aplicación a casos sanitarios y a dependencias entre organizaciones](#4-incidentes-documentados-de-organizaciones) |
| CVE y MITRE ATT&CK en un proyecto personal | [Criterios, ejemplos y forma de presentar los resultados](#aplicación-de-cve-y-mitre-attck-en-investigaciones-personales) |

### 1. Huella digital y redes sociales propias

**Decisión de referencia:** determinar qué información de los perfiles y publicaciones propios conviene revisar para reducir una exposición innecesaria. El destinatario es el propio estudiante. El resultado debe explicar qué relaciones se han comprobado entre sus publicaciones y qué riesgos se consideran posibles, con entrega privada.

| Tema | Aplicación al caso | Resultado que se puede incorporar al informe |
|---|---|---|
| 1. Fundamentos y ciclo de inteligencia | Definir qué parte de la identidad se estudia, qué decisión personal debe tomarse y cómo se revisarán las preguntas al obtener resultados | Requerimiento con tres a cinco preguntas, periodo, corte y cambios del plan |
| 2. Marco legal, ética y OPSEC | Delimitar los datos propios necesarios, excluir a terceros y acordar la conservación y entrega privada; evitar subir capturas personales a servicios externos | Alcance aprobado, condiciones de parada y criterio para recortar u ocultar datos |
| 3. OSINT, personas, organizaciones y SOCMINT | Comparar perfiles propios, identificadores, enlaces y publicaciones; distinguir homónimos, fechas de publicación y republicaciones | Tabla de relaciones verificadas entre cuentas y publicaciones, con fuente, fecha y limitación |
| 4. Infraestructura y exposición | Revisar los dominios propios enlazados desde los perfiles, si existen; distinguirlos de los dominios de la plataforma que aloja la cuenta | Inventario limitado a activos propios; si solo hay perfiles en plataformas ajenas, explicar que no se estudia la infraestructura de esas plataformas |
| 5. Fuentes cerradas y dark web | Valorar avisos legítimos de brecha recibidos en cuentas propias y sus límites de comprobación, si son pertinentes; utilizar documentación pública sobre ese tipo de exposición | Separación entre lo que comunica el proveedor, lo comprobado en el caso y lo que no puede verificarse sin obtener información excluida |
| 6. Threat Intelligence y MITRE ATT&CK | Analizar cómo la información pública podría facilitar reconocimiento previo mediante redes sociales; separar ese escenario de un ataque observado | Relación preventiva con T1593.001, cuando encaje en el contexto; justificación de que no hay CVE aplicable si no se estudia una vulnerabilidad de software |
| 7. Análisis e informes | Valorar la solidez de las relaciones entre perfiles, comparar explicaciones alternativas y priorizar qué información revisar | Conclusiones con confianza justificada y recomendaciones relacionadas con cada hallazgo |
| 8. Herramientas y automatización | Organizar fuentes y publicaciones en CSV; utilizar cálculos o scripts locales para detectar duplicados y ordenar fechas | Registro revisable y explicación de qué automatización se utilizó, qué resultado produjo y cómo se comprobó |

La presencia del mismo nombre en dos perfiles no acredita que pertenezcan a la misma persona. Una relación debe apoyarse en elementos suficientes, como enlaces entre cuentas propias o referencias verificadas. Del mismo modo, que una publicación pueda utilizarse para preparar un engaño no demuestra que alguien la haya utilizado con ese fin.

### 2. Web o dominio propio

**Decisión de referencia:** determinar qué aspectos de una web propia requieren revisión por su exposición documentada. El alcance puede incluir un dominio, sus publicaciones y un inventario autorizado de componentes, sin escaneos ni pruebas de explotación.

| Tema | Aplicación al caso | Resultado que se puede incorporar al informe |
|---|---|---|
| 1. Fundamentos y ciclo de inteligencia | Delimitar el dominio, el servicio y las preguntas sobre exposición, mantenimiento y dependencias | Encargo y plan que relacionen cada consulta con una decisión de revisión |
| 2. Marco legal, ética y OPSEC | Acreditar la titularidad o autorización, fijar fuentes y excluir otros clientes del alojamiento compartido; evitar recoger datos de visitantes | Alcance aprobado y relación de información que no debe incorporarse al informe |
| 3. OSINT, personas, organizaciones y SOCMINT | Verificar qué perfiles y publicaciones propios enlazan la web y qué relación existe entre la identidad pública y el dominio | Mapa de canales y enlaces comprobados, sin ampliar la investigación a personas relacionadas |
| 4. Infraestructura y exposición | Consultar registro del dominio, DNS histórico, registros de transparencia de certificados (CT) e índices existentes aprobados | Inventario con fuente y fecha que distinga dominio, proveedor, dirección compartida y servicio observado |
| 5. Fuentes cerradas y dark web | Valorar avisos legítimos del alojamiento o del proveedor; indicar qué información de una supuesta filtración no puede comprobarse | Evaluación de procedencia y límites; no se accede a mercados ni se descargan muestras |
| 6. Threat Intelligence y MITRE ATT&CK | Comparar producto, versión y condiciones documentadas con avisos oficiales de CVE; valorar T1190 solo como escenario preventivo o como comportamiento respaldado por evidencia de incidente | Ficha de correspondencia con una CVE, si procede, y distinción entre exposición, condiciones pendientes y explotación documentada |
| 7. Análisis e informes | Priorizar revisiones según la función de la web, la calidad de la evidencia y las dependencias; evitar concluir que toda la IP pertenece al estudiante | Recomendaciones justificadas y datos pendientes que podrían cambiar la prioridad |
| 8. Herramientas y automatización | Normalizar el inventario y comparar localmente nombres o versiones ya obtenidos por fuentes autorizadas | Tabla reproducible de componentes y relaciones, sin activar consultas o módulos de reconocimiento nuevos |

Una versión indicada en una cabecera o en un índice histórico es una pista que debe contrastarse. Un inventario propio puede aportar más detalle, pero también debe indicar su fecha, el estado del despliegue y las correcciones aplicadas. La mera presencia de un gestor de contenidos no permite asignarle cualquier CVE de ese producto.

### 3. Repositorios y documentos propios

**Decisión de referencia:** determinar qué información innecesaria revelan los repositorios, el historial público y los documentos publicados por el propio estudiante. Puede estudiarse un conjunto reducido de proyectos, un CV o una colección de archivos propios, con límites expresos.

| Tema | Aplicación al caso | Resultado que se puede incorporar al informe |
|---|---|---|
| 1. Fundamentos y ciclo de inteligencia | Delimitar archivos, repositorios, periodo y decisión sobre publicación o revisión | Preguntas sobre qué información se revela, con qué certeza y qué conviene revisar |
| 2. Marco legal, ética y OPSEC | Excluir aportaciones y datos personales de terceros; detener la difusión si aparece un secreto, sin copiar su valor ni probarlo | Criterios de selección de archivos, tratamiento de datos y registro mínimo de la incidencia, si ocurre |
| 3. OSINT, personas, organizaciones y SOCMINT | Comparar los enlaces entre el perfil propio, el CV, las publicaciones y los repositorios | Relaciones documentadas entre canales propios, sin identificar a otras personas a partir de colaboraciones o comentarios |
| 4. Infraestructura y exposición | Extraer de los archivos autorizados referencias a dominios, servicios y tecnologías; separar una referencia documental de un servicio realmente desplegado | Inventario de referencias con su origen y limitación; GitHub o un proveedor de alojamiento no se convierten en activos propios por aparecer en el proyecto |
| 5. Fuentes cerradas y dark web | Revisar avisos legítimos de exposición recibidos para las cuentas o proyectos propios; valorar qué no se puede comprobar | Registro del aviso y de su alcance, sin buscar el valor de un secreto en filtraciones o buscadores |
| 6. Threat Intelligence y MITRE ATT&CK | Valorar T1593.003 como escenario de reconocimiento mediante repositorios públicos; estudiar CVE de dependencias solo si su versión y relación con la pregunta están documentadas | Separación entre información que podría ser utilizada por un tercero, componentes declarados y componentes realmente utilizados |
| 7. Análisis e informes | Comparar la versión actual con el historial disponible y distinguir eliminación visible de retirada completa de todas las copias | Valoración del alcance de la exposición y plan de revisión con sus límites |
| 8. Herramientas y automatización | Utilizar scripts locales para inventariar archivos propios, extraer metadatos necesarios o comparar listados | Procedimiento documentado con entradas y salidas revisadas, sin enviar archivos a analizadores externos |

Un archivo de dependencias puede indicar una biblioteca, pero no demuestra por sí solo que esa versión esté instalada, publicada o expuesta a un vector concreto. Si aparece una contraseña o clave, su contenido no se conserva como prueba ni se utiliza para verificar accesos. Se documentará solo lo imprescindible y se seguirá el procedimiento de consulta privada.

### 4. Incidentes documentados de organizaciones

Las siguientes aplicaciones corresponden a los casos públicos propuestos anteriormente. Orientan las preguntas y los registros; no añaden hechos a los incidentes ni autorizan consultas nuevas sobre sus sistemas.

| Tema | Hospital Clínic o HSE: continuidad de servicios | ADIF y Renfe: alcance comunicado y dependencias |
|---|---|---|
| 1. Fundamentos y ciclo de inteligencia | Definir una decisión de continuidad para una entidad sanitaria comparable y una fase concreta de recuperación | Definir qué decisión requiere conocer la relación entre entidades, servicios e información comunicada |
| 2. Marco legal, ética y OPSEC | Excluir datos de pacientes y trabajadores; trabajar con documentos publicables | Excluir datos de viajeros, credenciales y supuestas muestras; no acceder a sistemas de las entidades |
| 3. OSINT, personas, organizaciones y SOCMINT | Verificar canales oficiales, fechas de comunicados y dependencia entre noticias | Distinguir comunicados de cada entidad, versiones posteriores y publicaciones que repiten un mismo origen |
| 4. Infraestructura y exposición | Relacionar funciones y proveedores solo cuando estén documentados, sin trasladar el análisis a los servicios actuales | Diferenciar organización, proveedor y servicio; una dependencia mencionada no demuestra un vector de ataque |
| 5. Fuentes cerradas y dark web | Evaluar afirmaciones públicas sobre sustracción o publicación de datos sin obtener el contenido | Registrar qué se afirma sobre un posible acceso o filtración y qué respaldo público existe |
| 6. Threat Intelligence y MITRE ATT&CK | Extraer comportamientos de las revisiones técnicas y contrastarlos con ATT&CK; incluir CVE solo cuando la evidencia del incidente las relacione | No deducir una CVE o una técnica a partir de un titular; mantener como pendiente el mecanismo no documentado |
| 7. Análisis e informes | Separar disponibilidad recuperada, tareas pendientes e impacto documentado; comparar alternativas sobre prioridades | Construir una cronología de afirmaciones y evidencias, con confianza y recomendaciones ajustadas al alcance conocido |
| 8. Herramientas y automatización | Ordenar hitos y duraciones con un script local o una hoja de cálculo; comprobar los datos de partida | Organizar comunicados, fechas, relaciones y republicaciones para detectar dependencias y contradicciones |

En un aviso de brecha recibido en una cuenta propia puede aplicarse el mismo método a menor escala: el comunicado del proveedor es una fuente, su alcance debe valorarse y las recomendaciones deben responder a lo confirmado. Recibir el aviso no demuestra por sí solo cómo se produjo el acceso ni que la cuenta haya sido utilizada después.

### Aplicación de CVE y MITRE ATT&CK en investigaciones personales

**CVE** procede de *Common Vulnerabilities and Exposures*. Un identificador CVE permite referirse a una vulnerabilidad publicada; para relacionarla con el caso deben documentarse el producto, las versiones afectadas y las condiciones relevantes. La [documentación del programa CVE](https://www.cve.org/ResourcesSupport/Glossary?activeTerm=glossaryRecord) explica estos registros.

**MITRE ATT&CK** describe comportamientos utilizados en ataques. Una técnica indica una forma de actuar; no identifica por sí sola una vulnerabilidad, una persona o un grupo. No existe una correspondencia obligatoria entre una CVE y una técnica. En un proyecto preventivo, el marco puede orientar el análisis de lo que permitiría una exposición, siempre que se indique expresamente que se trata de un escenario posible y no de una actividad observada.

#### Contraste documental de una CVE

1. Identificar el producto y la versión mediante una fuente pertinente y fechada: inventario propio autorizado, documentación de despliegue o informe técnico del incidente.
2. Consultar el aviso original del fabricante o del equipo responsable y registrar la CVE, las versiones afectadas, las condiciones y las correcciones documentadas.
3. Comparar esas condiciones con la información disponible. Si faltan datos sobre la configuración, las correcciones o el despliegue, conservar esa limitación.
4. Redactar el resultado distinguiendo coincidencia de versión, posible afectación y evidencia de explotación. No son estados equivalentes y no se comprueban ejecutando ataques.
5. Proponer la revisión o actualización que justifique el caso. No se deben recomendar versiones históricas como solución actual por ser las primeras que corrigieron el fallo.

**Ejemplo documental:** si un inventario autorizado de una web propia registra Drupal 7.57, puede contrastarse con el aviso de [CVE-2018-7600, SA-CORE-2018-002](https://www.drupal.org/sa-core-2018-002), que incluye versiones de la rama 7 anteriores a 7.58. La conclusión inicial sería que la versión declarada coincide con el intervalo del aviso y requiere revisión. Antes de afirmar afectación deben examinarse las correcciones y condiciones documentadas; antes de afirmar explotación haría falta evidencia del incidente. El propio equipo de Drupal [advierte que una cadena de versión no basta para determinar vulnerabilidad](https://groups.drupal.org/node/520149), pues puede haber correcciones que no la modifiquen.

En una investigación centrada en perfiles y publicaciones, puede no existir un componente de software que deba analizarse. En ese caso, la presencia de un correo público, un nombre de usuario o una configuración de visibilidad no se convierte en una CVE. Tampoco se añaden CVE del navegador o de la plataforma únicamente para completar el Tema 6 si no responden a la pregunta del proyecto.

#### Relación con técnicas de MITRE ATT&CK

La relación debe basarse en la descripción oficial y en el contexto del caso. Un riesgo personal o un posible fraude no exige asignar un código de ATT&CK si la conducta no encaja en el marco. En particular, la revisión que realiza el estudiante sobre sus propios datos no debe presentarse como actividad de un atacante.

| Situación del proyecto | Referencia técnica posible | Forma de aplicarla y límite |
|---|---|---|
| Publicaciones propias muestran información que podría facilitar la preparación de un ataque | [T1593.001 · Social Media: búsqueda en redes sociales](https://attack.mitre.org/techniques/T1593/001/) | Analizar un escenario preventivo de reconocimiento; las capturas acreditan qué estaba publicado, no que un tercero lo consultara con fines maliciosos |
| Un repositorio público propio revela referencias técnicas o información innecesaria | [T1593.003 · Code Repositories: búsqueda en repositorios públicos](https://attack.mitre.org/techniques/T1593/003/) | Explicar qué reconocimiento podría facilitar; no concluir que se han usado los datos o comprometido una cuenta |
| Una web propia presenta una posible vulnerabilidad documentada en una aplicación accesible desde Internet | [T1190 · Exploit Public-Facing Application: explotación de una aplicación expuesta](https://attack.mitre.org/techniques/T1190/) | Describir el escenario de riesgo; solo tratarlo como comportamiento observado si una evidencia fiable del incidente respalda ese mecanismo |
| Se conserva un mensaje recibido con indicios documentados de suplantación y un enlace orientado a obtener acceso | [T1566.002 · Spearphishing Link: envío de enlaces de phishing dirigidos](https://attack.mitre.org/techniques/T1566/002/) | Valorar si el contexto y la finalidad encajan en la técnica; analizar el mensaje ya recibido, sin abrir el enlace ni crear una prueba contra otra persona |
| Un aviso o registro fiable documenta uso no autorizado de una cuenta propia válida | [T1078 · Valid Accounts: uso de cuentas válidas](https://attack.mitre.org/techniques/T1078/) | Justificar la relación con lo que documenta la fuente; una ubicación inesperada o un acceso desconocido no identifican al operador ni prueban por sí solos el compromiso |
| Solo existe un aviso de brecha sin explicación del mecanismo | Sin técnica ni CVE confirmadas | Explicar qué se conoce, qué falta y qué medidas pueden justificarse; no reconstruir una cadena de ataque sin evidencias |

Los ejemplos de la tabla orientan la selección; no son una lista de técnicas que deban aparecer en todos los trabajos. La presencia de una técnica en la página de un grupo tampoco demuestra que ese grupo haya intervenido en el caso.

#### Presentación de resultados y escenarios preventivos

En el apartado de amenazas y en el anexo de aplicación de temas debe distinguirse entre **hecho observado**, **posible afectación pendiente de contraste** y **escenario preventivo**. Para cada relación con una CVE o una técnica se indicarán la evidencia propia o fuente, la referencia oficial, el razonamiento, la limitación y la recomendación que se deriva.

Ejemplo de redacción para una investigación personal: «El perfil propio publica una función profesional y un enlace a otro canal verificado. Esta información podría facilitar reconocimiento previo mediante redes sociales, en un escenario relacionado con T1593.001. No se dispone de evidencia de que un tercero la haya utilizado para preparar un ataque». En el informe real deben añadirse la referencia de la captura, la fecha y la información estrictamente necesaria, por el canal privado acordado.

La aplicación del Tema 6 se justifica por la calidad de ese análisis, no por el número de códigos incluidos. Si no hay una CVE pertinente o no puede identificarse una técnica observada, deberá explicarse el motivo y cómo limita la conclusión. Las referencias de CVE y ATT&CK de este apartado se consultaron el **19 de octubre de 2026**.

## Revisión de la viabilidad del tema

La propuesta debe presentarse dentro del plazo, con una pregunta concreta y referencias iniciales. La revisión de viabilidad debe comprobar que las fuentes aportan información suficiente y valorar su independencia. Si no permiten responder a la pregunta, será necesario reducir el alcance o reformular la decisión antes de continuar.

[Volver al proyecto](README.md) · [Preparar la propuesta](plantillas/propuesta-tema.md) · [Continuar con el calendario](02-proceso-y-entregas.md)
