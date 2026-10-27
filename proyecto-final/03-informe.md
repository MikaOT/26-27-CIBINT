# PF · Requisitos del informe de inteligencia

[Proyecto final](README.md) · [Calendario y entrega](02-proceso-y-entregas.md) · [Rúbrica del informe](rubrica-informe.md)

## Criterios de redacción

La redacción debe adaptarse al destinatario definido en el encargo. El informe debe presentar las preguntas, las evidencias, el análisis y las conclusiones de forma que un lector pueda comprobar el razonamiento y valorar las recomendaciones sin haber participado en la investigación.

Utiliza la [plantilla del informe](plantillas/plantilla-informe-inteligencia.md). Conserva sus apartados y su orden; puedes añadir subapartados. Si alguno no tiene aplicación al caso, explica por qué y qué limitación introduce. No lo elimines ni lo completes con contenido genérico.

La plantilla incorpora índice, análisis de evidencias, amenazas, confianza, recomendaciones y anexos. Las instrucciones entre corchetes y los comentarios de ayuda se sustituyen por el contenido de tu trabajo. El [ejemplo ficticio Operación Faro](ejemplo-informe/README.md) permite reconocer la estructura y el razonamiento; no sustituye esta plantilla ni autoriza a trasladar sus evidencias al caso real.

## Extensión y presentación

| Elemento | Requisito |
|---|---|
| Cuerpo del informe | **Máximo 9.000 palabras**, desde el resumen ejecutivo hasta las conclusiones y recomendaciones. Cualquier excepción necesita autorización previa |
| Fuera del cómputo | Portada, índice, referencias y anexos |
| Resumen ejecutivo | **Máximo 600 palabras**, incluidas en el cuerpo; debe poder entenderse sin leer los anexos |
| Formato | Archivo `informe.md` en UTF-8, con títulos jerárquicos, párrafos legibles y tablas revisadas en la vista renderizada |
| Índice | Navegable, con enlaces a los apartados y anexos; no se exige paginación |
| Control del documento | Título, autor, fecha, versión, destinatario y condiciones de difusión; no uses logotipos que hagan parecer el informe una comunicación oficial de la organización estudiada |
| Recursos | Imágenes y archivos necesarios dentro de la entrega, con rutas relativas; sin enlaces que dependan de tu disco o de cuentas privadas |
| Figuras y tablas | Numeradas, con título, explicación en el texto y fuente o indicación de elaboración propia |
| Idioma | Español; los términos técnicos se explican la primera vez que se utilizan |

La extensión debe corresponder al análisis. No se aumenta con copias de noticias, repeticiones o explicaciones generales de la asignatura. Los anexos no deben esconder el análisis o las evidencias necesarias para entender una conclusión.

El recuento incluye los títulos, párrafos, listas, texto de tablas y pies de figura de los apartados 1 a 10. No cuenta las marcas de Markdown, las direcciones de destino de los enlaces ni los bloques de código. El texto relevante de una imagen debe explicarse en el cuerpo; no lo traslades a capturas para evitar el límite. Indica el número de palabras y el método utilizado en el `README.md` de cada avance y de la entrega final. En la propuesta se cuenta su texto, sin referencias ni la resolución de aprobación.

Puedes utilizar el [contador local de palabras](contar-palabras.mjs), que requiere Node.js y no realiza consultas de red. Desde la raíz del repositorio del curso:

```powershell
node proyecto-final/contar-palabras.mjs entregas/apellidoNombre/PF/FINAL/informe.md
node proyecto-final/contar-palabras.mjs entregas/apellidoNombre/PF/TEMA/propuesta.md --propuesta
```

El contador del informe utiliza los títulos de la plantilla para delimitar los apartados 1 a 10. En una propuesta, excluye las referencias de la tabla de viabilidad y el apartado de resolución de la propuesta. Si utilizas otro contador, indica cuál y aplica el mismo alcance. No hace falta exportar a PDF para comprobar la extensión.

## Estructura obligatoria

| Apartado de la plantilla | Qué debe resolver |
|---|---|
| Portada y control del documento | Qué documento es, quién lo firma, fecha, versión, destinatario académico y condiciones de difusión |
| Índice | Enlaces que llevan a cada apartado y anexo del Markdown |
| 1. Resumen ejecutivo | Pregunta, principales valoraciones, impacto, confianza, limitación principal y decisión propuesta |
| 2. Requerimiento de inteligencia | Destinatario, decisión y entre tres y cinco preguntas identificadas como PI-01, PI-02… |
| 3. Alcance, límites y condiciones | Objeto, periodo, corte, aprobación, exclusiones, datos y OPSEC |
| 4. Contexto y cronología | Hechos relevantes, ordenados y citados; sin dar por confirmadas las afirmaciones ajenas |
| 5. Fuentes y método | Selección, consultas, herramientas, independencia y forma de registro |
| 6. Resultados y evidencias | Qué se observó, con referencias y fechas, antes de interpretar lo que significa |
| 7. Análisis | Respuesta razonada a las preguntas, explicaciones alternativas y contradicciones |
| 8. Amenazas, indicadores y comportamientos | Qué evidencia existe sobre amenazas, indicadores y técnicas; qué no puede atribuirse |
| 9. Confianza y limitaciones | Apoyo de cada valoración importante, dudas y efecto de los datos que faltan |
| 10. Conclusiones y recomendaciones | Respuesta al encargo y medidas priorizadas con responsable propuesto y forma de comprobar su utilidad |
| 11. Referencias | Relación completa de las fuentes citadas |
| 12. Anexos | Evaluaciones, registros, aplicación de temas, seguimiento y autoría |

## Integridad de los archivos conservados

Para cada archivo que conserves como evidencia, registra **SHA-256 y MD5**, junto con su nombre, origen, fecha de obtención y ubicación, utilizando el [registro de integridad](plantillas/integridad.csv). En este proyecto se exigen los dos valores para poder comparar los registros de herramientas distintas. Si el archivo cambia, conserva la versión anterior y registra los dos valores de la nueva; no sobrescribas el historial.

SHA-256 se utiliza como referencia principal de integridad. MD5 se añade como comprobación complementaria y de compatibilidad; sus limitaciones conocidas impiden tratarlo como garantía de seguridad. Dos hashes tampoco prueban por sí solos la procedencia, la fecha de creación o la veracidad del contenido. Consulta la [RFC 6151](https://www.rfc-editor.org/rfc/rfc6151) para el alcance de las limitaciones de MD5.

## Fuentes y citas

Como referencia de trabajo, utiliza **al menos diez fuentes relevantes**, entre ellas **cuatro primarias** y fuentes de más de una procedencia. Si el caso no permite alcanzarlo sin añadir material poco útil, justifícalo durante los avances y solicita la aprobación de un ajuste. No introduzcas fuentes de relleno para cumplir el número.

Una fuente primaria puede ser un comunicado de la entidad, un informe técnico original, una resolución o un registro público. En una investigación sobre ti mismo también pueden utilizarse observaciones directas y archivos propios autorizados, con fecha y referencia privada revisable. Ser primaria no garantiza que sea neutral ni que confirme todas las afirmaciones del caso. Varias noticias basadas en un comunicado siguen dependiendo de ese comunicado; varias capturas de una misma cuenta tampoco aportan independencia por sí solas.

Asigna identificadores estables: `F-01` para fuentes y `H-01` para hallazgos. Cita la fuente junto a la afirmación. Por ejemplo: «El comunicado describe una interrupción de ese servicio en la fecha indicada (F-03, apartado 2)». La referencia completa debe indicar autor u organización, título, fecha de publicación, URL y fecha de consulta. Si no consta una fecha, escríbelo; no la sustituyas por la de consulta.

Las cifras, fechas, atribuciones y afirmaciones técnicas necesitan referencia. Una bibliografía al final sin citas en el cuerpo no permite comprobar qué sostiene cada conclusión. Las figuras propias también deben indicar qué fuentes se utilizaron para construirlas.

## Relación entre evidencias, análisis y conclusiones

Cada conclusión principal debe conservar una relación explícita con las preguntas, las fuentes, los hallazgos y las recomendaciones:

```text
PI-01 · Pregunta
  → F-01 y F-04 · Fuentes y su relación de independencia
    → H-02 · Observación concreta, con fecha y limitación
      → V-01 · Valoración razonada, con confianza
        → R-01 · Recomendación y comprobación propuesta
```

Incluye al menos una comparación de explicaciones plausibles sobre una cuestión central del caso. Las alternativas deben ser pertinentes para el análisis. Explica qué evidencia apoya cada posibilidad, qué la debilita y qué dato permitiría distinguirlas.

Revisa sesgos: si la primera noticia decía «robo masivo», comprueba qué hechos sostienen esa expresión y qué fuentes la repiten. Si solo conoces una afirmación del presunto atacante, atribúyesela y mantén su verificación pendiente. No conviertas ausencia de evidencia en evidencia de ausencia.

## Indicadores y MITRE ATT&CK

Distingue un indicador —un dominio o un hash publicado, por ejemplo— de un comportamiento del ataque. Para cada indicador explica fuente, fecha, relación con el caso y límites de uso. Las direcciones potencialmente maliciosas se muestran neutralizadas, como `ejemplo[.]invalid` o `hxxps://...`, sin enlaces activos. No se visitan ni se prueban.

La relación con MITRE ATT&CK debe citar el comportamiento documentado y la referencia oficial de la técnica que corresponda. No se deduce una técnica solo por el nombre de un grupo o por llamar ransomware al incidente. Si las fuentes no permiten identificar técnicas, explica esa limitación y qué parte del análisis sí puede hacerse. No se exige ejecutar malware ni reconstruir el ataque.

En una investigación preventiva sobre uno mismo pueden estudiarse técnicas que expliquen cómo podría aprovecharse la exposición observada. Esa relación debe presentarse como **escenario preventivo**, separada de cualquier técnica realmente observada en un incidente. Una publicación propia no demuestra que un atacante la haya consultado. Del mismo modo, una coincidencia de producto y versión con una CVE requiere contrastar condiciones y correcciones; no acredita explotación. Los [ejemplos de tema y alcance](01-tema-y-alcance.md#aplicación-de-cve-y-mitre-attck-en-investigaciones-personales) desarrollan estos criterios.

## Formulación de recomendaciones

Ordena las recomendaciones por su utilidad para el destinatario. Cada una debe indicar:

- el hallazgo que la justifica;
- qué se propone hacer y para qué;
- quién debería revisarlo o ejecutarlo, sin atribuirle un encargo real;
- prioridad y plazo orientativo, razonados;
- qué resultado permitiría darla por atendida;
- qué limitación impide recomendar algo más concreto.

Una recomendación debe indicar una acción concreta y un resultado verificable. Por ejemplo: «Solicitar al responsable de continuidad que confirme la recuperación de las dependencias identificadas antes de reabrir el servicio». Su inclusión debe justificarse con las evidencias del caso.

[Volver al proyecto](README.md) · [Plantilla obligatoria](plantillas/plantilla-informe-inteligencia.md) · [Consultar la rúbrica](rubrica-informe.md)
