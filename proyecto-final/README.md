# PF · Proyecto final individual de ciberinteligencia

El proyecto consiste en investigar un caso real de ciberseguridad y elaborar un informe de inteligencia para un destinatario y una decisión definidos. El objeto de estudio puede ser un incidente, una organización o la huella digital y exposición del propio estudiante, dentro del alcance aprobado. El trabajo se desarrollará de forma progresiva durante el curso, mediante la aplicación de los contenidos de la asignatura a las fases de planificación, obtención, análisis y comunicación.

El trabajo es individual. El caso y su alcance deben estar aprobados antes de iniciar la recogida sistemática de información. La aprobación autoriza únicamente las fuentes y acciones acordadas para esta práctica académica; no concede permiso para acceder a los sistemas de la organización estudiada.

| Dato | Condición |
|---|---|
| Código | `PF` |
| Modalidad | Individual, sobre un caso real elegido por el estudiante y con un alcance previamente aprobado |
| Elección del tema | **28 de octubre de 2026, a las 23:59** |
| Entrega del informe final | **14 de diciembre de 2026, a las 23:59** |
| Presentación y defensa | **21 de diciembre de 2026, en clase** |
| Canal de entrega | **Repositorio del curso mediante pull request**, desde la propuesta hasta la presentación; los casos personales autorizados se entregan por el canal privado previamente acordado |
| Formato del informe | **Markdown (`informe.md`)**, con índice navegable, recursos locales y registros de trabajo |
| Plantilla | Uso obligatorio de la [plantilla del informe](plantillas/plantilla-informe-inteligencia.md) |
| Extensión máxima | **9.000 palabras de cuerpo**, sin contar portada, índice, referencias ni anexos |
| Duración de la exposición | **Mínimo 10 y máximo 15 minutos**, más cuatro minutos de preguntas |
| Calificación | **70 % informe escrito + 30 % presentación y defensa** |
| Mínimos para superar el proyecto | **4,0 sobre 10 en el informe escrito y 4,0 sobre 10 en la presentación y defensa** |

Todas las fechas y horas de esta actividad corresponden a la hora peninsular española, zona `Europe/Madrid`.

## Documentos del proyecto

| Contenido | Documento |
|---|---|
| Modalidades, alcance y autorizaciones | [Tema, alcance y casos propuestos](01-tema-y-alcance.md) |
| Fases, plazos y archivos de entrega | [Proceso, calendario y entregables](02-proceso-y-entregas.md) |
| Estructura, redacción y evidencias | [Requisitos del informe](03-informe.md) |
| Contenido y condiciones de la exposición | [Presentación y defensa](04-presentacion.md) |
| Evaluación del documento | [Rúbrica del informe escrito](rubrica-informe.md) |
| Evaluación de la exposición y la defensa | [Rúbrica de presentación y defensa](rubrica-presentacion.md) |
| Solicitud de aprobación del tema | [Plantilla de propuesta](plantillas/propuesta-tema.md) |
| Registro de avances y correcciones | [Plantilla de seguimiento](plantillas/seguimiento.md) |
| Declaración de uso o ausencia de IA | [Registro de IA](plantillas/registro-ia.md) |
| Modelo de informe y expediente simulado | [Operación Faro: ejemplo de informe](ejemplo-informe/README.md) |

La preparación del proyecto comienza con la revisión de las condiciones de tema y alcance y la presentación de la propuesta. Una vez aprobada, se utilizará la plantilla del informe desde el primer avance, conforme al calendario de entregas.

## Objetivos y requisitos del trabajo

El informe debe establecer una relación comprobable entre la decisión del destinatario, las preguntas de inteligencia, las fuentes consultadas, las evidencias obtenidas, el análisis y las recomendaciones. Las conclusiones deben responder al encargo y señalar las limitaciones que condicionan su uso.

El análisis debe justificar por qué cada evidencia apoya una conclusión, considerar explicaciones alternativas y precisar qué aspectos permanecen sin comprobar.

El destinatario puede ser un responsable de seguridad, de continuidad del servicio o de un área de negocio. **En una investigación sobre uno mismo, el propio estudiante puede ser el destinatario del informe.** En ese caso, el trabajo debe apoyar una decisión personal concreta, como identificar qué información publicada conviene revisar, valorar la exposición de sus perfiles o priorizar medidas de protección de sus cuentas y activos digitales. Las conclusiones y recomendaciones deben justificarse con las evidencias del caso.

La propuesta debe identificar al destinatario y la decisión que necesita tomar. Cuando se trate de un destinatario supuesto, deberá indicarse su carácter académico; no se presentará como un encargo real de la organización.

El caso debe permitir aplicar los contenidos de la asignatura. La selección de fuentes y herramientas se justificará según las preguntas de investigación. Cuando no exista evidencia para identificar una técnica de ataque, atribuir un actor o estudiar una infraestructura, deberá explicarse la limitación y su efecto sobre las conclusiones.

En el análisis de infraestructura, los **registros de transparencia de certificados (CT, del inglés Certificate Transparency)** permiten consultar los nombres de dominios y subdominios incluidos en certificados digitales publicados. Que un nombre aparezca en estos registros no demuestra que el servicio siga activo o sea accesible desde Internet.

## Cálculo de la calificación

Este proyecto se evalúa como **Informe individual de inteligencia** y representa el **20 % de la nota de la asignatura**, según [Evaluación](../EVALUACION.md).

```text
Nota del informe individual de inteligencia =
    0,70 × nota del informe escrito + 0,30 × nota de la presentación y defensa
```

Las dos notas se expresan sobre 10. Por ejemplo, un 8 en el informe escrito y un 7 en la presentación dan **7,7 sobre 10** en el proyecto final. Su aportación a la asignatura sería `7,7 × 0,20 = 1,54` puntos sobre 10, siempre que se cumplan las condiciones de evaluación aplicables.

El reparto 70/30 se realiza dentro de ese 20 %: equivale al 14 % de la asignatura para el informe escrito y al 6 % para la presentación. Los tres avances sirven para supervisar el proceso y corregir el trabajo; no añaden porcentajes ni son tres actividades del bloque del 25 %.

Para superar el proyecto debes alcanzar **al menos 4,0 en cada componente**: documento escrito y presentación con defensa. Una nota alta no compensa un resultado inferior a 4,0 en la otra parte. Por ejemplo, un 3 en el documento y un 9 en la presentación producen una media aritmética ponderada de 4,8, pero **no cumplen el mínimo del documento y no permiten superar el proyecto**. Las revisiones o recuperaciones se tramitan según la normativa y las indicaciones del Campus Virtual. El proyecto no sustituye la prueba teórico-práctica final ni modifica sus condiciones de mínimo.

## Trabajo en clase y autoría

En las sesiones prácticas se trabajará con la última versión del informe, las preguntas pendientes y los registros de fuentes y decisiones. Se podrá solicitar la localización de una evidencia, la explicación de una consulta, la revisión de una conclusión o la justificación de una corrección. El trabajo en clase se complementará con trabajo autónomo entre sesiones.

La investigación, las valoraciones y las conclusiones deben ser de elaboración individual. Se permite consultar dudas de método con compañeros, pero no repartir el análisis ni compartir textos o resultados para presentarlos como trabajos individuales distintos. Si dos estudiantes eligen el mismo incidente, necesitarán preguntas y alcances diferenciados y aprobados.

El régimen de esta actividad es **nivel C: IA de apoyo, con declaración obligatoria de su uso o de su ausencia**. Se permite aclarar conceptos, explorar ideas que después comprobarás, pedir explicaciones sobre una herramienta y revisar la ortografía de un texto que hayas escrito. No se permite delegar la investigación, la selección de evidencias, el análisis, las conclusiones, la redacción de apartados ni la elaboración de la presentación. Cada uso se registra con el prompt, la respuesta relevante y la decisión tomada en el [registro de IA](plantillas/registro-ia.md). Nunca se introducen datos personales o material no publicable en esos servicios.

## Entrega y reserva del trabajo

La propuesta, los tres avances, el informe final, las diapositivas y sus registros se entregan mediante **pull request al repositorio del curso**, dentro de `entregas/apellidoNombre/PF/`. Cada hito tiene su carpeta y su propio pull request. Los archivos deben poder leerse y revisarse directamente. Consulta la [estructura y el procedimiento](02-proceso-y-entregas.md#procedimiento-de-entrega).

**Excepción: casos personales autorizados.** Si investigas sobre ti mismo o propones un caso personal o profesional cercano con información que deba mantenerse reservada, se deberán acordar la autorización, los datos permitidos y el canal privado antes de compartir la propuesta. Puede utilizarse un repositorio privado con acceso habilitado para revisar la entrega u otro canal privado previamente indicado. No publiques el tema, el informe ni sus registros en el repositorio público; las fechas, los entregables y los criterios de evaluación siguen siendo los mismos.

Ser titular de tus datos o contar con autorización para estudiar un caso no implica autorizar su publicación. Para los demás proyectos, selecciona información publicable y elimina los datos innecesarios antes de subir cada archivo. Si aparece una limitación que impide una entrega pública, consulta para revisar el alcance o valorar si procede la modalidad personal autorizada.

La exposición en clase tampoco autoriza la publicación posterior del informe, una grabación o las diapositivas. Antes de mostrar una captura, elimina los datos que no hagan falta para entender la evidencia. Si aparece contenido sensible inesperado, detén el trabajo y utiliza el [canal privado de la asignatura](../SECURITY.md), sin adjuntar ese contenido.

Las condiciones de trabajo se completan en [Tema y alcance](01-tema-y-alcance.md#acciones-permitidas-y-excluidas). Las instrucciones de archivos y envío están en [Proceso y entregas](02-proceso-y-entregas.md#procedimiento-de-entrega).

[Volver al inicio del curso](../README.md) · [Planificación](../PLANIFICACION.md) · [Evaluación](../EVALUACION.md)
