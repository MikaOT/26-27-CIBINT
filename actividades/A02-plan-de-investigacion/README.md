# A02 · Plan de investigación

| | |
|---|---|
| **Tema** | 2 · Marco legal, ética y OPSEC del analista |
| **Modalidad** | Grupo de tres personas · un caso por grupo |
| **Producto** | Plan de investigación |
| **Entrega** | Lunes 12 de octubre de 2026, antes de las 12:15 |
| **Régimen de IA** | Nivel C · IA de apoyo, con uso obligatoriamente declarado |

---

## 1. Objeto

Tu grupo va a elaborar, a partir del material de un caso real, el **plan de investigación** que prepararía un equipo de ciberinteligencia antes de investigar un incidente que afecta a una organización ajena. El plan define qué se quiere saber y para qué, con qué legitimación, de qué fuentes y con qué técnicas, con qué límites, con qué riesgos y con qué garantías.

## 2. Contexto profesional

En ciberinteligencia, una investigación sobre un incidente ajeno no empieza buscando, sino con un plan que fija qué se va a hacer y qué no. Ese plan responde a estas preguntas:

| Pieza del plan | Pregunta que responde |
|---|---|
| **Necesidad de inteligencia** | ¿Qué se quiere saber, para quién y para qué? |
| **Legitimación** | ¿Quién investiga, con qué marco y con qué base? ¿Qué no le corresponde? |
| **No interferencia** | ¿Quién más investiga el caso y cómo se evita entorpecer su trabajo? |
| **Plan de obtención** | ¿De qué fuentes y con qué técnicas, y por qué esas? |
| **Reglas de actuación** | ¿Qué se haría solo con condiciones, qué no se haría nunca y cuándo se pararía? |
| **Seguridad de la operación** | ¿Qué expondría la investigación, a quién, y cómo se protegería a las personas afectadas y al equipo? |
| **Trazabilidad y custodia** | ¿Cómo se podría demostrar después lo que se hizo y que nada se alteró? |
| **Manejo y difusión** | ¿Quién recibiría el resultado, por qué canal y con qué restricciones? |

El Protocolo de Berkeley sobre investigaciones digitales de fuentes abiertas establece que la investigación en línea no debe comenzar sin haber evaluado antes las amenazas y los riesgos digitales (párr. 108) y sin haber elaborado un plan de investigación (párr. 115).

## 3. Casos

| Grupo | Caso | Material |
|---|---|---|
| **Grupo 1** | **Ministerio de Hacienda.** En febrero de 2026, una empresa de monitorización alertó de que un actor ofrecía a la venta datos de 47,3 millones de contribuyentes que atribuía al ministerio. El ministerio afirmó después no haber encontrado rastro de ningún ciberataque. | [casos/hacienda](casos/hacienda/README.md) |
| **Grupo 2** | **Naturgy.** En mayo de 2026, Naturgy comunicó un acceso no autorizado a la base de datos de un proveedor externo. En septiembre, varios medios publicaron una oferta de venta de datos de 1,8 millones de clientes, sin confirmación de la empresa. | [casos/naturgy](casos/naturgy/README.md) |

El [README de casos](casos/README.md) explica el formato del material y cómo citarlo.

## 4. Contenido del plan

El plan se redacta en la plantilla de respuesta que el grupo tiene en su carpeta de entrega. Sus apartados forman una cadena: **cada uno parte de lo que concluye el anterior**. Si al avanzar algo deja de sostenerse, se vuelve atrás y se corrige.

**Situación (apartado 2).** Reúne las afirmaciones del material de partida y, para cada una, quién la hace y si alguien independiente la confirma. Distingue lo que dice la organización afectada, lo que dice quien se atribuye el incidente, lo que dicen las empresas que lo difunden, lo que añaden los medios y lo que dicen los organismos públicos. El apartado concluye con lo que puede darse por establecido y con lo que no se sabe. **Lo que no se sabe es la materia prima del resto del plan.**

**Necesidad de inteligencia (apartado 3).** De lo que no se sabe, elige las preguntas que tendría sentido investigar desde fuentes abiertas y explica quién usaría cada respuesta y para qué decisión o protección. Indica también qué preguntas no se intentarían responder y por qué.

**Legitimación y no interferencia (apartado 4).** Quien investiga es tu grupo: estudiantes en una práctica universitaria. Desde esa posición, razona:

- qué marco se aplica;
- quién sería responsable de los datos personales que se tratasen y con qué base;
- qué no corresponde al grupo, y a quién correspondería;
- qué otras investigaciones existen o pueden existir sobre el caso, y cómo se evitaría entorpecerlas.

**Plan de obtención (apartado 5).** Cada fuente o técnica prevista debe:

- responder a una pregunta del apartado 3;
- ser lícita;
- ser la menos intrusiva disponible;
- llevar identificado qué expondría y a quién.

Para las dos más delicadas, completa la [plantilla de evaluación de licitud](https://github.com/hector-ae21/CIBINT/blob/main/plantillas/plantilla-evaluacion-licitud.md).

**Reglas de actuación (apartado 6).** Lo que solo se haría con condiciones, lo que no se haría nunca **en este caso concreto** y las situaciones en las que el equipo se detendría. Las exclusiones deben ser las propias del caso, identificadas y razonadas por el grupo. No sirve copiar las normas generales.

**Tratamiento de datos personales (apartado 7).** Qué datos de qué personas podrían aparecer aunque no se buscasen, cómo se minimizarían, dónde se guardarían, quién accedería a ellos y cuándo se borrarían.

**Seguridad de la operación (apartado 8).** El proceso de OPSEC aplicado a la investigación, con amenazas concretas del caso. La identidad con la que se investigaría y por qué. Los riesgos para las personas afectadas y para el equipo, incluido el psicológico. Y cualquier conflicto de intereses: por ejemplo, que un miembro del grupo o su entorno pudiera estar entre los afectados.

**Trazabilidad y custodia (apartado 9).** Cómo se registraría el trabajo, cómo se conservarían las evidencias y cómo se demostraría que no han cambiado.

**Manejo y difusión (apartado 10).** Qué productos saldrían de la investigación, para quién, por qué canal y con qué etiqueta TLP. Ten en cuenta que este repositorio es público: decide qué podría publicarse en él y qué no. Si procediera compartir algo con algún organismo, indica cuál y en qué condiciones.

**Alcance de la investigación (apartado 11).** Todo lo anterior, resumido en una tabla: objetivo, finalidad, fuentes permitidas, técnicas permitidas, exclusiones específicas, canal de entrega del resultado y vigencia. Debe corresponder exactamente al resto del plan.

**Resumen del plan (apartado 1).** Se escribe al final y va al principio: un párrafo que permita entender el plan sin leer el resto.

## 5. Organización del equipo

El grupo decide cómo se organiza y cómo reparte el trabajo. La entrega debe recoger:

- cómo se ha organizado el trabajo y quién se ha encargado de qué;
- la **aportación individual** de cada miembro, escrita por la propia persona;
- quién es el **portavoz**, que es la única persona que entrega.

Cada grupo trabaja únicamente con su propio equipo. Cualquiera de los tres miembros debe poder explicar y defender el plan completo; puede pedirse una defensa oral.

## 6. Inteligencia artificial · nivel C

**Nivel C · IA de apoyo.** El uso es obligatoriamente declarado.

| Se permite usar IA para… | No se permite usar IA para… |
|---|---|
| Explorar el caso y entender su contexto | Redactar los apartados del plan |
| Buscar ideas: posibles preguntas, fuentes, riesgos o exclusiones que el grupo después valora y decide | Decidir qué técnicas son lícitas, qué se excluye o qué riesgos se asumen |
| Aclarar conceptos del tema, como la base de licitud, el TLP o la huella SHA-256 | Valorar las afirmaciones del caso o decidir qué se da por establecido |
| Revisar la ortografía de un texto ya escrito por el grupo | Elaborar el resumen del plan o la tabla de alcance |

El análisis, el diseño de la investigación y todas las decisiones del plan son **del grupo**. Una idea que proceda de la IA puede usarse si el grupo la ha comprobado, la ha hecho suya y puede defenderla sin ayuda.

**Cómo se declara.** En la carpeta del grupo está `registro-ia.md`, con un modelo ya preparado:

1. Cada vez que alguien del grupo use IA, copia el bloque «Uso» del modelo y rellénalo: quién, herramienta, para qué, en qué apartado, el **prompt tal cual** y qué hizo el grupo con la respuesta.
2. Como evidencia, guarda una captura o exportación de la conversación en la carpeta `ia/` con el número del uso (`uso-01.png`, `uso-02.pdf`…), o pega en el bloque el enlace para compartir la conversación.
3. Si el grupo no ha usado IA, borra el modelo y escribe: «No hemos utilizado inteligencia artificial».

**Reglas:**

- la IA no es una fuente: ningún hecho, fecha o norma puede apoyarse en lo que diga un asistente;
- no se introducen en una IA datos personales de nadie ni material no publicable;
- las capturas no muestran datos personales.

> Sin `registro-ia.md`, o con un registro sin los prompts, la entrega está **incompleta y no se califica**.

## 7. Límites

Se aplican íntegramente las [normas de la asignatura](../../NORMAS.md) y, además:

- **el plan no se ejecuta:** no se realiza ninguna búsqueda, consulta ni obtención de información sobre el caso, sobre las organizaciones implicadas ni sobre ninguna persona;
- el único material que se utiliza es el de la carpeta del caso, junto con la lectura de las fuentes que enlaza `fuentes.csv`.

Durante el trabajo puedes consultar el [Tema 2](https://github.com/hector-ae21/CIBINT/tree/main/contenidos/02-marco-legal-etica-y-opsec), tus apuntes y la normativa.

**Ante cualquier duda:** escribe por el [canal privado de la asignatura](../../SECURITY.md).

## 8. Entrega

Cada grupo tiene su carpeta preparada, con la plantilla de respuesta y el registro de IA:

| Grupo | Carpeta | Contenido |
|---|---|---|
| Grupo 1 · Hacienda | [`entregas/grupos/A02/grupo1/`](../../entregas/grupos/A02/grupo1/README.md) | `README.md` (plan de investigación), `registro-ia.md` y carpeta `ia/` |
| Grupo 2 · Naturgy | [`entregas/grupos/A02/grupo2/`](../../entregas/grupos/A02/grupo2/README.md) | `README.md` (plan de investigación), `registro-ia.md` y carpeta `ia/` |

**Pasos:**

1. El portavoz actualiza su *fork* desde el repositorio del curso y crea una rama para la actividad, por ejemplo `a02-grupo1`.
2. El grupo trabaja **solo** dentro de su carpeta: completa `README.md` y `registro-ia.md` y, si usa capturas como evidencia de IA, las guarda en `ia/`.
3. El portavoz abre **un único** *pull request* con el título `[A02] Grupo N · Apellido1, Apellido2, Apellido3`.
4. Los otros dos miembros dejan un comentario en el *pull request* indicando que han revisado el plan completo y que están conformes con él.

> **Archivos no autorizados.** El *pull request* solo puede modificar archivos de la carpeta del grupo. **Si modifica, añade o elimina cualquier archivo fuera de `entregas/grupos/A02/grupoN/`, incluidos los de la carpeta del otro grupo, los de la actividad o cualquier otro del repositorio, la actividad no se evalúa para el grupo.**

## 9. Evaluación

La nota es común al grupo. Si en la revisión, en el historial o en una defensa oral se comprueba que un miembro no puede explicar el plan o no ha participado, su nota individual puede ajustarse.

### Rúbrica

| Criterio | Peso | Excelente | Notable | Suficiente | Insuficiente |
|---|---:|---|---|---|---|
| **C1 · Situación**<br>Apartado 2 | 1,5 | **1,35 – 1,5** · Atribuye cada afirmación y distingue con precisión qué dice la organización afectada, quien se atribuye el incidente, las empresas que lo difunden, los medios y los organismos públicos. Determina con criterio qué puede darse por establecido. No vincula hechos, actores ni incidentes sin base. La lista de lo que no se sabe es precisa y se aprovecha después. | **0,9 – 1,3** · Atribución correcta con algún matiz perdido, o una lista de lagunas poco aprovechada en el resto del plan. | **0,6 – 0,8** · Mezcla en algún punto lo confirmado con lo afirmado o no distingue el papel de cada fuente. | **0,0 – 0,5** · Da por buenas afirmaciones no confirmadas o reconstruye el caso sin atribuir. |
| **C2 · Necesidad y legitimación**<br>Apartados 3 y 4 | 1,25 | **1,1 – 1,25** · Las preguntas salen de las lagunas y tienen un destinatario y una finalidad legítimos y útiles. Razona con acierto el marco aplicable a un grupo de estudiantes, quién sería responsable del tratamiento y con qué base. Identifica lo que no le corresponde y concreta cómo evitaría entorpecer las investigaciones existentes. | **0,8 – 1,0** · Finalidad y legitimación razonables, con algún aspecto sin desarrollar o una no interferencia genérica. | **0,5 – 0,7** · Preguntas genéricas, o legitimación razonada como si el grupo fuera la organización afectada. | **0,0 – 0,4** · Sin finalidad defendible, o con preguntas que solo podrían responder las autoridades o la organización afectada. |
| **C3 · Plan de obtención y datos personales**<br>Apartados 5 y 7 | 2,0 | **1,8 – 2,0** · Cada fuente o técnica responde a una pregunta, es lícita, es la menos intrusiva y tiene evaluada su exposición. Las dos evaluaciones de licitud están completas y bien elegidas. Prevé los datos personales que aparecerían aunque no se buscasen, los minimiza y fija su borrado. | **1,3 – 1,7** · Plan de obtención correcto con alguna técnica mal justificada, o un tratamiento de datos personales incompleto. | **0,8 – 1,2** · Técnicas sin relación con las preguntas o evaluaciones de licitud superficiales. | **0,0 – 0,7** · Incluye alguna técnica ilícita o ignora datos personales que inevitablemente aparecerían. |
| **C4 · Reglas de actuación**<br>Apartado 6 | 1,5 | **1,35 – 1,5** · Las exclusiones anticipan y razonan las tentaciones reales del caso, más allá de lo que fijan las normas. Las condiciones son verificables. Las condiciones de parada son concretas e indican a quién se consultaría. | **0,9 – 1,3** · Reglas correctas con alguna tentación importante del caso sin prever. | **0,6 – 0,8** · Exclusiones genéricas o copiadas de las normas. | **0,0 – 0,5** · Reglas ausentes, contradictorias o que permiten lo que deberían excluir. |
| **C5 · Seguridad de la operación**<br>Apartado 8 | 1,5 | **1,35 – 1,5** · OPSEC aplicado a la investigación con amenazas reales del caso. Identidad justificada. Valora los riesgos para las personas afectadas y para el equipo, incluido el psicológico. Identifica y gestiona los conflictos de intereses. | **0,9 – 1,3** · Análisis correcto con algún riesgo relevante sin valorar. | **0,6 – 0,8** · Riesgos genéricos, válidos para cualquier caso. | **0,0 – 0,5** · Sin análisis o con medidas que crearían riesgos nuevos. |
| **C6 · Trazabilidad, difusión y alcance**<br>Apartados 9, 10 y 11 | 1,25 | **1,1 – 1,25** · Plan de registro y custodia sólido y realista. Distingue con acierto lo publicable en un repositorio público de lo que no y etiqueta con coherencia. La tabla de alcance corresponde exactamente al plan. | **0,8 – 1,0** · Correcto con algún desajuste entre el alcance y el resto del plan, o una etiqueta discutible. | **0,5 – 0,7** · Difusión sin criterio claro, o alcance que no corresponde al plan. | **0,0 – 0,4** · Prevé publicar lo que no debe o no define el alcance. |
| **C7 · Coherencia profesional**<br>Todo el documento | 0,5 | **0,5** · Sin contradicciones entre apartados. El resumen se entiende sin leer el resto y refleja exactamente el plan. Presentable en un entorno profesional. | **0,3 – 0,4** · Alguna contradicción menor. | **0,2** · Varias incoherencias o un resumen que no corresponde al contenido. | **0,0 – 0,1** · Apartados que se contradicen en lo esencial. |
| **C8 · Equipo e IA**<br>Equipo · Registro de IA | 0,5 | **0,5** · Organización y aportaciones individuales claras, comentarios de revisión en el *pull request* y registro de IA completo y coherente con el nivel C. | **0,3 – 0,4** · Todo presente con alguna laguna. | **0,2** · Organización o registro poco detallados. | **0,0 – 0,1** · Sin organización explicada o con un registro de IA que no corresponde a la entrega. |
| | **10** | | | | |

### Penalizaciones e incumplimientos

Las penalizaciones se restan de la suma de la rúbrica. La nota no baja de 0 ni sube de 10.

**Incumplimientos que impiden la evaluación**

| Incumplimiento | Efecto |
|---|---|
| El *pull request* modifica, añade o elimina archivos fuera de `entregas/grupos/A02/grupoN/` | **La actividad no se evalúa para el grupo** |
| Falta `registro-ia.md` o no incluye los prompts | Entrega incompleta: **no se califica** |
| Realizar cualquier búsqueda, consulta u obtención de información sobre el caso, o cualquier otra acción contraria a las normas de la asignatura o a los límites de este enunciado | Actividad no evaluable y aplicación de las [normas](../../NORMAS.md) |
| Subir archivos de noticias, capturas con datos personales o cualquier material no publicable | Actividad no evaluable y aviso por el canal privado |
| Trabajo compartido con el otro grupo o contenido coincidente entre grupos | Se aplica la normativa académica sobre autoría |

**Incumplimiento de indicaciones · −2,5 puntos cada una**

| Indicación incumplida |
|---|
| El *pull request* lo abre más de un miembro o no lleva el título indicado |
| Faltan la organización del trabajo, alguna aportación individual o los comentarios de revisión en el *pull request* |
| No se respeta la plantilla de respuesta: encabezados, numeración o bloques «Qué debe contener» sin sustituir |
| Las afirmaciones sobre el caso no se citan con su identificador, o el identificador no dice lo que se le atribuye |
| Se introducen datos o hechos que no están en el material de partida |
| El registro de IA está incompleto, le falta la evidencia de algún uso o no corresponde a la entrega |
| Se usa la IA para algo que el nivel C no permite, como redactar apartados o tomar decisiones del plan |
| Se introducen en una IA datos personales o material no publicable |
| Se usa una respuesta de IA como fuente de un hecho, una fecha o una norma |
| Cualquier otra indicación de este enunciado que no se cumpla |

**Errores de análisis**

| Error | Penalización |
|---|---|
| Incluir una técnica ilícita en el plan de obtención | −2,5 por técnica |
| Plantear como finalidad identificar o perfilar a una persona | −2,5 |
| Presentar como establecida una afirmación no confirmada, o vincular hechos, actores o incidentes sin base | −0,5 por caso, hasta −1,5 |
| Atribuir responsabilidad, culpa o negligencia a personas u organizaciones más allá de las fuentes | −1,0 |
| Contradicción entre apartados del plan | −0,5 por caso, hasta −1,5 |
