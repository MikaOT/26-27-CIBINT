# PF · Proceso, calendario y entregables

[Proyecto final](README.md) · Anterior: [Tema y alcance](01-tema-y-alcance.md) · Siguiente: [Informe](03-informe.md)

## Calendario de trabajo

El proceso comprende una propuesta de tema, **tres entregas parciales**, una entrega final del informe y una presentación en clase. Los plazos terminan a las **23:59, hora peninsular española (`Europe/Madrid`)**, salvo la defensa, que tiene lugar en el horario de clase. En la modalidad pública, el pull request debe estar abierto con los archivos del hito antes de esa hora; su revisión o integración puede ser posterior. En los casos personales autorizados, la entrega privada debe estar realizada dentro del mismo plazo.

| Hito | Fecha de 2026 | Contenido requerido |
|---|---|---|
| `PF-TEMA` · Propuesta individual | **Miércoles 28 de octubre** | Caso, destinatario, decisión, preguntas, alcance, exclusiones y fuentes iniciales |
| `PF-P1` · Primer avance | **Lunes 9 de noviembre** | Encargo aprobado, plan, evaluación legal y de OPSEC, fuentes iniciales y primeros hallazgos |
| `PF-P2` · Segundo avance | **Miércoles 25 de noviembre** | Obtención documentada, cronología, contraste de fuentes y análisis provisional |
| `PF-P3` · Tercer avance | **Miércoles 9 de diciembre** | Borrador completo del informe, análisis de amenazas, conclusiones, recomendaciones y anexos |
| `PF-FINAL` · Informe definitivo | **Lunes 14 de diciembre** | Informe en Markdown, recursos locales, registros y revisión final |
| `PF-PRESENTACION` · Archivos de exposición | **Domingo 20 de diciembre** | Diapositivas en PDF y formato editable |
| Presentación y defensa individual | **Lunes 21 de diciembre, en clase** | Exposición del informe entregado y respuesta a preguntas |

La entrega de diapositivas corresponde a la preparación de la defensa y no constituye una cuarta entrega parcial del informe.

## Desarrollo del proyecto y aplicación de los contenidos

Tras la aprobación del tema, se iniciará el informe con la [plantilla obligatoria](plantillas/plantilla-informe-inteligencia.md). El documento se actualizará a medida que se apliquen los contenidos de la asignatura al caso. Cada entrega parcial será una versión revisada del informe y de sus registros de trabajo, con los cambios y las cuestiones pendientes identificados.

| Tema de la guía docente | Aplicación en el proyecto | Registro requerido |
|---|---|---|
| 1. Fundamentos y ciclo de inteligencia | Definir destinatario, decisión y preguntas; revisar el encargo si la evidencia lo exige | Requerimiento y cambios del plan |
| 2. Marco legal, ética y OPSEC | Delimitar fuentes y acciones, datos necesarios, riesgos y condiciones de parada | Alcance aprobado, evaluación y decisiones |
| 3. Personas, organizaciones y SOCMINT | Verificar entidades, canales, publicaciones, fechas y dependencias de fuentes | Fichas de fuentes y afirmaciones contrastadas; sin perfiles personales innecesarios |
| 4. Infraestructura y exposición | Interpretar datos de registro, DNS, registros de transparencia de certificados (CT) e índices existentes cuando respondan a las preguntas | Relaciones con fuente y fecha; separación entre proveedor y activo |
| 5. Fuentes cerradas y dark web | Evaluar qué aportan los informes públicos sobre esos entornos y dónde termina el alcance | Fuentes secundarias autorizadas y datos que no pueden comprobarse; sin acceder a mercados o filtraciones |
| 6. Threat Intelligence y MITRE ATT&CK | Distinguir indicadores de comportamientos y relacionar técnicas solo cuando haya evidencia | Tabla de indicadores o técnicas, su contexto y sus límites; o justificación de que no se pueden identificar |
| 7. Análisis e informes | Comparar explicaciones, revisar sesgos, expresar confianza y adaptar el resultado | Análisis, conclusiones y recomendaciones justificadas |
| 8. Herramientas y automatización | Elegir un flujo de trabajo y justificar qué tareas conviene automatizar | Herramientas, configuración y comprobaciones; script local si se utiliza |

El anexo de aplicación de temas debe identificar el trabajo realizado, su resultado y el apartado del informe donde se documenta. Si algún contenido no puede aplicarse por falta de información, se justificará la limitación y su efecto en el análisis. No se incorporarán indicadores o técnicas sin evidencia ni tareas automatizadas sin una finalidad definida.

Los [ejemplos de aplicación por caso](01-tema-y-alcance.md#aplicación-de-los-contenidos-a-los-casos-propuestos) concretan este trabajo en investigaciones personales y en incidentes documentados. La [orientación sobre CVE y MITRE ATT&CK](01-tema-y-alcance.md#aplicación-de-cve-y-mitre-attck-en-investigaciones-personales) distingue los hechos observados de los escenarios preventivos.

## PF-TEMA · Propuesta del 28 de octubre

Entrega la [plantilla de propuesta](plantillas/propuesta-tema.md) cumplimentada como `propuesta.md`. Extensión máxima: **900 palabras**, sin contar las referencias.

Debe contener el caso real, el destinatario, la decisión, entre tres y cinco preguntas, el periodo, el corte previsto, las fuentes y acciones propuestas y las exclusiones. Incluye al menos tres referencias iniciales, una primaria, y explica por qué el tema puede investigarse dentro de las condiciones de la asignatura.

Se comunicará la aprobación del alcance o los cambios necesarios. Conserva esa respuesta en tu espacio privado de trabajo y resume las condiciones en la siguiente entrega. No incluyas conversaciones personales completas en el informe.

## PF-P1 · Primer avance del 9 de noviembre

El primer avance debe definir una pregunta de inteligencia concreta y un método viable. Presenta los apartados ya trabajados en `informe.md`; marca los restantes como pendientes. Extensión máxima del cuerpo: **2.500 palabras**.

Incluye:

1. Encargo y alcance aprobados, con las condiciones de aprobación incorporadas.
2. Contexto documentado del caso y separación entre hechos conocidos y afirmaciones pendientes.
3. Plan de fuentes y consultas: cada acción debe responder a una pregunta.
4. Evaluación legal y de OPSEC aplicada al caso, con datos excluidos y condiciones de parada.
5. Registro inicial de al menos cinco fuentes pertinentes, con dos primarias si están disponibles. Si no lo están, justifica la limitación y pide revisar la viabilidad.
6. Primeras observaciones con su referencia, sin anticipar conclusiones que todavía no puedes sostener.
7. Bitácora, registro de IA y [hoja de seguimiento](plantillas/seguimiento.md).

La revisión determinará si el plan permite continuar la investigación o si es necesario reducir o modificar el alcance.

## PF-P2 · Segundo avance del 25 de noviembre

El segundo avance debe documentar los resultados obtenidos, el contraste de fuentes y el análisis provisional. Extensión máxima del cuerpo: **4.500 palabras**. El contexto del primer avance se revisará cuando haya cambios relevantes, evitando repeticiones innecesarias.

Incluye:

1. Correcciones del primer avance y justificación de cambios.
2. Registro actualizado de fuentes, con sus dependencias y su valoración.
3. Cronología que distinga fecha del hecho, publicación, observación técnica y consulta cuando correspondan.
4. Tabla de hallazgos vinculada a las preguntas y a las evidencias.
5. Análisis provisional de organizaciones, publicaciones e infraestructura dentro del alcance; justifica los apartados sin datos.
6. Al menos dos explicaciones plausibles para una cuestión relevante, con evidencias a favor, en contra y pendientes.
7. Primera lectura de amenazas: indicadores publicados, comportamientos documentados y límites para relacionarlos con el caso.
8. Versión del informe, registros de trabajo, hoja de seguimiento y cuestiones que necesitas resolver en clase.

El Tema 6 comienza en estas fechas. La lectura de amenazas puede ser provisional; se revisará en clase y estará desarrollada en el tercer avance.

## PF-P3 · Tercer avance del 9 de diciembre

El tercer avance consiste en un **borrador completo** con todos los apartados de la plantilla, para su revisión antes de la entrega final. Extensión máxima del cuerpo: **8.000 palabras**. La entrega final tendrá un máximo de **9.000 palabras**. Las cifras no incluyen portada, índice, referencias ni anexos y se cuentan según los [requisitos del informe](03-informe.md#extensión-y-presentación).

Debe contener el resumen ejecutivo, el análisis completo, las conclusiones, las recomendaciones priorizadas, las referencias y los anexos. Incluye la aplicación de los ocho temas, la evaluación de la confianza y una tabla de cambios respecto al segundo avance. Señala qué dudas permanecen y qué puedes corregir antes del día 14.

No se admite que el análisis o las conclusiones estén sustituidos por «se completará en la entrega final». Si falta evidencia, la limitación debe estar redactada y debe verse cómo afecta a la conclusión.

## PF-FINAL · Informe del 14 de diciembre

Entrega la versión definitiva siguiendo los [requisitos del informe](03-informe.md). La carpeta `FINAL/` contendrá:

| Archivo o carpeta | Contenido obligatorio |
|---|---|
| `README.md` | Identificación, título, versión, número de palabras del cuerpo y enlaces a los archivos |
| `informe.md` | Informe definitivo con control del documento, índice navegable, referencias y anexos |
| `registros/fuentes.csv` | Fuentes, fechas, evaluación y dependencias |
| `registros/hallazgos.csv` | Afirmaciones y su relación con preguntas y evidencias |
| `registros/bitacora.csv` | Acciones, resultados, decisiones y consultas sin resultado útil |
| `registros/integridad.csv` | Relación de los archivos conservados como evidencia, con SHA-256 y MD5 de la misma versión |
| `seguimiento.md` | Cambios de los tres avances y correcciones incorporadas o razonadas |
| `registro-ia.md` | Declaración y registro completo; si no se utilizó IA, declaración expresa |
| `recursos/` | Solo figuras propias, recortes necesarios y scripts utilizados que puedan conservarse conforme al alcance |

Los tres CSV deben utilizar los encabezados de las plantillas de [fuentes](plantillas/fuentes.csv), [hallazgos](plantillas/hallazgos.csv) y [bitácora](plantillas/bitacora.csv). Se pueden preparar con un editor de texto o una hoja de cálculo y guardarse como CSV en UTF-8. No dejes fórmulas o vínculos privados en el lugar de los datos.

El [registro de integridad](plantillas/integridad.csv) se añade cuando conserves archivos como evidencia. Cada fila lleva las dos huellas, SHA-256 y MD5, calculadas sobre el mismo archivo. Si solo has consultado una página sin conservar un archivo, registra la fuente y la fecha; no inventes un hash de un archivo inexistente. Si no hay archivos preservados, conserva los encabezados y explica que no se aplica.

La versión que se evalúa es `informe.md`, con los recursos enlazados mediante rutas relativas. No se exige PDF. Puedes incluir una exportación adicional, pero debe corresponder a la misma versión y no sustituye el Markdown. Si un registro de trabajo contradice una afirmación del informe, tendrás que explicarlo.

## Procedimiento de entrega

El canal ordinario es el **repositorio del curso mediante pull request**, siguiendo las [instrucciones generales de entregas](../entregas/README.md#flujo-de-entrega). Trabaja en tu fork y utiliza únicamente tu carpeta personal:

```text
entregas/apellidoNombre/PF/
├── README.md
├── TEMA/
│   ├── README.md
│   ├── propuesta.md
│   └── registro-ia.md
├── P1/
├── P2/
├── P3/
├── FINAL/
│   ├── README.md
│   ├── informe.md
│   ├── registros/
│   │   ├── fuentes.csv
│   │   ├── hallazgos.csv
│   │   ├── bitacora.csv
│   │   └── integridad.csv
│   ├── seguimiento.md
│   ├── registro-ia.md
│   └── recursos/
└── PRESENTACION/
```

El `README.md` de `PF/` identifica el proyecto y enlaza los hitos ya disponibles. Cada carpeta de avance conserva su versión de `informe.md`, los registros de trabajo, el seguimiento, la declaración de IA y los recursos necesarios para abrirla. Así se puede revisar un hito sin depender de archivos que se cambien en otro. En P1 y P2, una tabla todavía sin observaciones se conserva con sus encabezados y una explicación; no se rellena con datos inventados.

Para cada hito:

1. Actualiza tu fork y crea una rama específica; por ejemplo, `pf-p1-garciaMaria`.
2. Añade la carpeta del hito dentro de `entregas/apellidoNombre/PF/` y actualiza el índice de `PF/README.md`. No sustituyas ni borres entregas anteriores.
3. Comprueba el Markdown renderizado, las imágenes, los enlaces relativos, los CSV y el contenido publicable de todos los archivos. No añadas credenciales ni datos no autorizados.
4. Haz commit y push de la rama y abre un pull request hacia la rama `main` del repositorio del curso. Título: `[PF-P1] apellidoNombre`, sustituyendo `PF-P1` por `PF-TEMA`, `PF-P2`, `PF-P3`, `PF-FINAL` o `PF-PRESENTACION` según corresponda.
5. En el pull request indica la ruta de la entrega, la versión, el número de palabras de la propuesta o del cuerpo del informe y los asuntos pendientes. Revisa que solo modifica tu carpeta personal. Un commit en tu fork sin pull request no cuenta como entrega.
6. Si se piden correcciones del hito, utiliza la misma rama y el mismo pull request y anota el cambio en el seguimiento. Después del plazo no sustituyas la versión evaluable sin autorización previa.

La presentación se organiza como explica [Presentación y defensa](04-presentacion.md#archivos-y-entrega). Si GitHub no está disponible, avisa antes del plazo por el canal privado de la asignatura y conserva constancia mínima del problema, sin información de terceros.

### Casos personales autorizados: entrega privada

Una investigación sobre ti mismo o un caso personal autorizado utiliza la misma estructura de hitos, fechas y archivos, pero **no se sube al fork público ni se abre un pull request público**. Antes de compartir la propuesta, se deberán acordar la autorización, las condiciones de conservación y el canal: un repositorio privado con acceso habilitado para revisar la entrega u otro medio privado que se indique. No des por hecho que una carpeta dentro de un repositorio público es privada.

La entrega debe identificar la versión y dejar constancia de su fecha por el medio acordado. Conserva los datos imprescindibles y las autorizaciones de forma reservada; no publiques su contenido, capturas ni detalles del caso en títulos de ramas, commits, issues o comentarios. Si un proyecto público pasa a necesitar esta modalidad, detén la publicación y consulta antes de añadir información personal.

## Correcciones, retrasos y cambios después del cierre

La hoja de seguimiento recoge las observaciones recibidas, los cambios realizados, su ubicación y su justificación. Puedes discrepar de una corrección si lo justificas con evidencia y lo consultas; no basta con ignorarla. La ausencia de un avance deja sin mostrar una parte del proceso y se valora en el criterio de seguimiento del informe, sin crear una penalización adicional automática.

No borres las versiones anteriores. Sirven para revisar cómo evolucionaron las preguntas y las conclusiones. Los plazos no se amplían por no haber esperado la aprobación a tiempo; comunica cualquier dificultad cuanto antes. Las entregas fuera de plazo y las incidencias justificadas se tramitan conforme a las instrucciones del Campus y la normativa académica, sin un descuento numérico adicional fijado en este enunciado.

El 14 de diciembre queda cerrado el informe escrito. La preparación de diapositivas y el ensayo de la defensa continúan después. No sustituyas el informe con una versión distinta durante la presentación; cualquier corrección autorizada debe quedar identificada. Una noticia posterior puede mencionarse con su fecha y como actualización, separada de la evidencia utilizada en el documento entregado.

[Volver al proyecto](README.md) · [Requisitos del informe](03-informe.md) · [Presentación](04-presentacion.md)
