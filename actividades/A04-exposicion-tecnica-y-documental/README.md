# A04 · Exposición técnica y documental

| | |
|---|---|
| **Tema** | 4 · OSINT técnico: infraestructura y superficie de exposición |
| **Modalidad** | Individual · continuación de la A03, con el mismo objetivo y la misma modalidad |
| **Producto** | Informe de exposición técnica y documental, con su registro de obtención y sus evidencias |
| **Entrega** | Viernes 6 de noviembre de 2026, antes de las 23:59 |
| **Régimen de IA** | Nivel C · IA de apoyo, con uso obligatoriamente declarado |
| **Parte de** | [A03 · Huella pública](../A03-huella-publica/README.md) |

---

## 1. Objeto

La A04 es la **continuación de la [A03](../A03-huella-publica/README.md)**. Trabajas sobre el **mismo objetivo** y en la **misma modalidad**:

- **Modalidad A · Organización.** El informe va dirigido a su responsable de seguridad.
- **Modalidad B · Huella propia.** El informe va dirigido a ti.

En la A03 reconstruiste lo que el objetivo publica: su identidad, sus canales y sus relaciones. Ahora estudias lo que deja ver **sin pretenderlo**, con dos herramientas del Tema 4:

- **Shodan**, para los servicios relacionados con el objetivo que se observan desde Internet;
- **FOCA**, para los metadatos de los documentos que ha publicado.

El informe responde a qué revelan esos servicios y esos documentos, qué podría aprovechar un atacante y qué conviene corregir. Integra lo obtenido con la ficha de la A03 y cierra con las recomendaciones finales sobre el objetivo.

La actividad es **práctica**. Cada conclusión sale de consultas que haces tú, que quedan registradas y que se respaldan con una evidencia. Las dos herramientas están explicadas en el [catálogo del Tema 4](https://github.com/hector-ae21/CIBINT/blob/main/contenidos/04-osint-tecnico-infraestructura-y-exposicion/herramientas.md).

> **Recomendación: usa el caso de tu proyecto final.** Si en la A03 elegiste el objetivo de tu [proyecto final](../../proyecto-final/README.md), la A04 completa su huella técnica y documental y te servirá directamente para sus avances:
>
> - **Organización:** la exposición técnica y documental de esa misma organización.
> - **Huella propia:** la exposición de tu dominio, tu conexión y tus documentos.
> - **Caso o vulnerabilidad públicos:** la exposición de la organización afectada o del fabricante del producto vulnerable, sin buscar en Shodan los sistemas vulnerables ni comprobar el fallo.
>
> Estas actividades **no amplían el alcance aprobado del proyecto**: se entregan y se califican aparte.

## 2. Contexto profesional

Una organización cuida lo que publica a propósito: su web, sus avisos, sus perfiles. Lo que se le escapa suele estar en otra capa: un servicio que alguien dejó accesible, un certificado que nombra un sistema interno o un PDF que conserva el usuario y la ruta del equipo en el que se escribió. Quien ataca busca precisamente esa capa, porque le da detalles que hacen creíble un engaño o le orientan en un reconocimiento. A una persona le ocurre lo mismo con su CV, sus trabajos publicados o su conexión de casa.

| Huella | En una organización | En tu huella propia | Herramienta |
|---|---|---|---|
| **Técnica** | ¿Qué servicios relacionados se observan desde Internet, desde cuándo y cuáles dependen de proveedores? | ¿Qué se observa de tu dominio, tu web o tu conexión? | **Shodan** |
| **Documental** | ¿Qué revelan los metadatos de los documentos que publica: usuarios, rutas, programas, fechas? | ¿Qué revelan los metadatos de tu CV, tus trabajos o tus presentaciones? | **FOCA** |

## 3. Objetivo

El objetivo es el de tu A03 y cumple sus [requisitos](../A03-huella-publica/README.md#3-elige-el-objetivo). No se cambia de objetivo ni de modalidad entre las dos actividades.

- La **modalidad B** solo es posible si enviaste en plazo el correo de solicitud de la A03. Con ese correo quedan habilitadas las entregas de la A03 y de la A04 en el Campus Virtual. Si no lo enviaste, la A04 se hace en la modalidad A.
- Si el objetivo pertenece a un sector sensible o ha sufrido un incidente, se mantienen las [reglas reforzadas de la A03](../A03-huella-publica/README.md#31-modalidad-a--organización) y las de Shodan de los apartados 4 y 7.
- La A04 **se califica por sí misma**. Si no entregaste la A03, elige el objetivo con los mismos requisitos y construye en el apartado 2 una ficha mínima con las herramientas del Tema 3.

Si dudas de si una consulta entra en el alcance, pregunta por el [canal privado](../../SECURITY.md) antes de hacerla.

## 4. Herramientas

| Herramienta | Modalidad A · Organización | Modalidad B · Huella propia | Carácter |
|---|---|---|---|
| [**Shodan**](https://github.com/hector-ae21/CIBINT/blob/main/contenidos/04-osint-tecnico-infraestructura-y-exposicion/herramientas.md#shodan-consultar-observaciones-de-servicios) | Tres consultas con filtros distintos, lectura de facetas y al menos dos fichas analizadas. En sectores sensibles, solo `hostname:`, `ssl:` y `ssl.cert.subject.cn:` sobre los dominios corporativos | Tu dominio o tu web, si tienes, y la IP pública de tu conexión con `ip:`. Un resultado vacío también es un hallazgo | Obligatoria |
| [**FOCA**](https://github.com/hector-ae21/CIBINT/blob/main/contenidos/04-osint-tecnico-infraestructura-y-exposicion/herramientas.md#foca-extraer-metadatos-de-los-documentos-publicados) | Entre 15 y 30 documentos del dominio analizados, o todos los disponibles si hay menos, y resumen por categorías | Entre 5 y 30 documentos publicados por ti, con el análisis local, y resumen por categorías | Obligatoria |
| Maltego | Ampliar el grafo de la A03 con los hallazgos técnicos y documentales | Ampliar el grafo de la A03 | Obligatoria |
| [crt.sh](https://github.com/hector-ae21/CIBINT/blob/main/contenidos/04-osint-tecnico-infraestructura-y-exposicion/herramientas.md#icann-lookup-dns-y-crtsh-resolver-preguntas-acotadas), [Censys](https://github.com/hector-ae21/CIBINT/blob/main/contenidos/04-osint-tecnico-infraestructura-y-exposicion/herramientas.md#censys-consultar-hosts-sitios-y-certificados) o [SecurityTrails](https://github.com/hector-ae21/CIBINT/blob/main/contenidos/04-osint-tecnico-infraestructura-y-exposicion/herramientas.md#securitytrails-comparar-dns-actual-e-histórico) | Contrastar si un resultado de Shodan pertenece a la organización | Contrastar los resultados de tu dominio, si tienes | Recomendada |

**Preparación.** Shodan se usa con una cuenta gratuita, preferiblemente con el correo de tu identidad de investigación del Tema 2. FOCA necesita Windows de 64 bits y SQL Server Express. Instálalo al empezar la semana siguiendo su ficha del catálogo o usa un equipo del aula: un fallo de instalación el último día no justifica la falta de la herramienta.

Si una herramienta no está disponible para ti, aplica la alternativa que indica su ficha del catálogo, como el análisis local o ExifTool en el caso de FOCA, y **registra el cambio y su motivo**. Una alternativa justificada no penaliza; una herramienta obligatoria ausente sin explicación, sí.

## 5. Qué tienes que hacer

El informe se redacta en la [plantilla de respuesta](plantilla-respuesta.md). Las fases siguen el orden del trabajo; los apartados de la plantilla, el orden de lectura del informe.

### Fase 1 · Punto de partida · apartado 2

- Identifica el objetivo, la modalidad y tu entrega de la A03.
- Copia la **ficha del objetivo** de la A03 y conserva sus referencias como `A03 OBT-05`. De ella salen las entradas de Shodan y FOCA: el dominio, el nombre legal o tus identificadores ya validados.
- Formula entre **tres y cuatro preguntas de inteligencia** nuevas, priorizadas, sobre la huella técnica y la documental. Indica a qué decisión del destinatario ayuda cada una.

### Fase 2 · Plan de obtención · apartado 3

Antes de la primera consulta, decide para cada pregunta qué consultas de Shodan harás, qué documentos buscarás con FOCA y con qué criterio, qué fuente usarás para contrastar, qué introduces, a quién lo envías y qué resultado esperas. Describe la configuración de FOCA: dominios del proyecto o documentos locales, buscadores, extensiones, número máximo de documentos y funciones que no vas a usar.

> **El plan va antes que la obtención.** En la modalidad A, haz un *commit* con los apartados 2 y 3 completos **antes** de añadir resultados; el historial debe mostrarlo. En la modalidad B, indica al final del apartado 3 la fecha y hora en que cerraste el plan, que debe ser anterior a la primera fila del registro.

### Fase 3 · Obtención con Shodan · apartados 4.1 y 4.2

Cada consulta o acción ocupa una fila del **registro de obtención** de esta actividad (`OBT-01`, `OBT-02`…): herramienta, consulta exacta, fecha y hora con zona horaria, resultado, límite y evidencia. Registra también los errores, los resultados vacíos y las restricciones de la cuenta.

- Ejecuta las consultas con filtros distintos y lee sus facetas antes de abrir fichas.
- En cada ficha que abras, anota puerto, producto declarado, fecha de observación y titular del rango.
- Clasifica los resultados en tres grupos: **del objetivo**, respaldado por otra fuente; **de un proveedor**; y **relación no demostrada**. Indica con qué fuente has contrastado cada atribución.
- Presenta los servicios de forma agregada, sin vulnerabilidades asociadas a servicios concretos.

### Fase 4 · Obtención con FOCA · apartados 4.1, 4.3 y 4.4

- Documenta el proyecto, la búsqueda o la carga local y el criterio con que has seleccionado los documentos.
- Presenta los documentos localizados y analizados por tipo y por intervalo de fechas.
- Resume los metadatos por categorías, con recuentos y patrones. Interpreta cada patrón con sus límites: autor de la plantilla, programa de conversión, documentos de terceros.
- En la modalidad A, los nombres, usuarios y correos se sustituyen por seudónimos (`USR-01`…). En la modalidad B, describe tus propios datos solo en la medida necesaria.

Termina con la **revisión de la elección**: qué preveías, qué usaste, qué obtuviste y si respondió a la pregunta.

### Fase 5 · Análisis e integración con la A03 · apartado 5

- Describe la huella técnica y la documental con dos partes separadas: **lo observado**, con referencias, y **la valoración**, con fiabilidad de la fuente y credibilidad de la información.
- Actualiza la ficha del objetivo: qué confirman, añaden o contradicen Shodan y FOCA respecto de la A03.
- Incorpora el grafo final de Maltego, con los nuevos nodos y las relaciones etiquetadas como observadas, declaradas o pendientes.
- Valora los hallazgos clave: qué es un hecho, qué es una inferencia y qué contraste independiente tiene.

### Fase 6 · Perspectiva del atacante y recomendaciones · apartado 6

Construye al menos **cinco filas**, al menos **tres** a partir de Shodan o FOCA. Puedes incluir hallazgos de la A03 si los nuevos datos cambian su valoración. Cada fila sigue este recorrido: información visible, cómo podría aprovecharla un atacante, a qué afectaría y qué medida defensiva propones, con su prioridad. Describe el riesgo sin instrucciones operativas y termina con lo que las recomendaciones **no** cubren.

### Fase 7 · Limitaciones y cierre · apartados 7, 8 y 1

Recoge lo que no has podido responder, lo que descartaste y cualquier incidencia. Completa el índice de evidencias. Después escribe el **resumen ejecutivo**, de 300 palabras como máximo, que responda cada pregunta con su nivel de confianza.

## 6. Evidencias y capturas

**Nombre y ubicación.** Las capturas se guardan en `evidencias/` con el nombre `EV-01.png`, `EV-02.png`… y se citan en el registro de obtención y en el índice de evidencias de la plantilla.

**Capturas mínimas**

| Herramienta | Qué debe verse |
|---|---|
| Shodan | Cada consulta con sus facetas, o la consulta vacía, y al menos una ficha de resultado |
| FOCA | El proyecto creado, la lista de documentos y el `Metadata Summary` |
| Maltego | El grafo final exportado como imagen |
| Fuente de contraste | El resultado que respalda una atribución |

**Antes de guardar una captura, recórtala y oculta:**

- tu clave de API y cualquier dato de tu sesión;
- los dos últimos bloques de cada dirección IP, también la de tu propia conexión;
- en la modalidad A, los nombres, usuarios, correos y rutas con nombres de persona que aparezcan en los metadatos;
- en la modalidad B, tus datos que no sean necesarios para la pregunta, y los de cualquier otra persona que aparezca en tus documentos.

Oculta con un bloque opaco. El desenfoque y la pixelación pueden revertirse.

**No se entrega**: los documentos descargados, el proyecto o la base de datos de FOCA, las exportaciones de Shodan en JSON o CSV, el archivo de proyecto de Maltego ni ninguna captura con el contenido de un servicio delicado.

## 7. Límites

Se aplican íntegramente las [normas de la asignatura](../../NORMAS.md). En esta actividad se concretan así:

| Puedes | No puedes |
|---|---|
| Consultar Shodan con tu cuenta y abrir fichas de resultados | Pedir escaneos nuevos a Shodan o abrir Shodan Images |
| Consultar índices pasivos de certificados y DNS para contrastar | Escanear, sondear o comprobar servicios del objetivo o de terceros |
| Visitar la web pública del objetivo como cualquier visitante | Abrir en el navegador o en cualquier otro programa las IP o puertos de terceros encontrados en Shodan |
| Descargar documentos públicos del objetivo, dentro del número indicado, y analizarlos con FOCA | Usar los nodos `Network` y `Domains` de FOCA, sus `Plugins` o cualquier función de búsqueda DNS, rastreo o prueba sobre servidores |
| En la modalidad B, revisar tus propios equipos y cuentas con el acceso normal de titular | Escanear tu red o la de otros con herramientas de reconocimiento: la actividad es de fuentes abiertas |
| En sectores sensibles, consultar Shodan por los dominios corporativos de la organización | En entidades sanitarias, de transporte, energía, agua, defensa o seguridad, usar `org:`, `net:` o búsquedas por producto, o abrir fichas de servicios que no sean web o correo |
| Indicar de forma general que una versión declarada figura en un catálogo de fallos | Publicar vulnerabilidades asociadas a una IP o un servicio concretos, o comprobar si existen |
| Proponer medidas y comprobaciones al destinatario | Investigar a las personas que aparezcan en los metadatos, ni contactar con la organización o su personal |

### Cuándo parar

Si aparece una credencial, un documento interno o confidencial, datos personales sensibles de otra persona o un servicio delicado, como un escritorio remoto, una cámara, un panel de control industrial o una base de datos expuesta:

1. detente y no abras, descargues ni captures su contenido;
2. anota en el apartado 7 solo la categoría de lo encontrado y la fila `OBT` en la que apareció, sin reproducir el dato;
3. avisa por el [canal privado de la asignatura](../../SECURITY.md);
4. continúa solo cuando se confirme un alcance seguro.

En la modalidad B, si encuentras expuesto un servicio de tu propia conexión, desactívalo o protégelo desde tu equipo como titular y anótalo como medida tomada.

Parar y avisar a tiempo **se valora** en el criterio C7. No hacerlo es un incumplimiento.

## 8. Inteligencia artificial · nivel C

**Nivel C · IA de apoyo.** El uso es obligatoriamente declarado.

| Se permite usar IA para… | No se permite usar IA para… |
|---|---|
| Aclarar conceptos, como un tipo de metadato o el significado de un campo de Shodan | Redactar los apartados del informe |
| Entender la sintaxis de un filtro | Hacer búsquedas o navegar en tu nombre, con un agente o una extensión |
| Resolver problemas de instalación de FOCA o de SQL Server Express | Analizar o resumir los resultados de tu obtención, o valorar tus hallazgos |
| Buscar ideas de medidas que después valoras y decides tú | Decidir conclusiones, niveles de confianza, recomendaciones o el resumen ejecutivo |
| Revisar la ortografía de un texto ya escrito por ti | |

**Nunca se introducen en una IA** los resultados de la obtención ni tus datos personales: metadatos, nombres, cuentas, direcciones IP, capturas ni documentos. La IA no es una fuente: ningún hecho sobre el objetivo puede apoyarse en lo que diga un asistente.

**Cómo se declara.** Copia [registro-ia.md](registro-ia.md) en tu carpeta de entrega:

1. por cada uso, copia el bloque «Uso» y rellena herramienta, para qué, en qué apartado, el **prompt tal cual** y qué hiciste con la respuesta;
2. guarda como evidencia una captura o exportación en `ia/` con el número del uso (`uso-01.png`…), o pega el enlace para compartir la conversación;
3. si no has usado IA, borra el modelo y escribe: «No he utilizado inteligencia artificial».

> Sin `registro-ia.md`, o con un registro sin los prompts, la entrega está **incompleta y no se califica**.

## 9. Entrega

| Campo | Modalidad A · Organización | Modalidad B · Huella propia |
|---|---|---|
| Código | `A04` | `A04` |
| Canal | *Pull request* desde tu *fork*, con el título `[A04] Apellido Nombre` | Entrega privada A04 del Campus Virtual, habilitada con el correo de la A03 |
| Formato | Carpeta `entregas/apellidoNombre/A04/` | Carpeta `A04` comprimida en un único archivo ZIP |
| Fecha límite | Viernes 6 de noviembre de 2026, antes de las 23:59 | Viernes 6 de noviembre de 2026, antes de las 23:59 |

> **Plazo.** Una entrega fuera de plazo se califica con un **0 en la actividad**. En la modalidad A cuenta el estado de la rama a la hora límite: los *commits* posteriores no se tienen en cuenta.

```text
A04/
├── README.md          ← informe, copia de plantilla-respuesta.md
├── registro-ia.md     ← copia de registro-ia.md
├── ia/                ← evidencias del uso de IA, si las hay
└── evidencias/
    ├── EV-01.png
    └── …
```

1. **Modalidad A:** actualiza tu *fork* y crea una rama nueva para esta actividad, por ejemplo `a04-apellidoNombre`. **Modalidad B:** trabaja en una carpeta `A04` de tu equipo, fuera del repositorio del curso.
2. Copia [plantilla-respuesta.md](plantilla-respuesta.md) como `README.md` y [registro-ia.md](registro-ia.md) en la carpeta `A04`. No edites los originales ni tu carpeta de la A03.
3. Completa los apartados 2 y 3 antes de empezar la obtención: en la modalidad A, con su *commit*; en la modalidad B, con la fecha de cierre del plan.
4. Completa el resto sin cambiar el orden ni la numeración. Si un apartado no te aplica, explica por qué en lugar de borrarlo.
5. Revisa cada captura y entrega. En la modalidad A, el *pull request* solo puede tocar `entregas/apellidoNombre/A04/`.

Ninguna parte de una entrega de la modalidad B se sube al repositorio del curso. Si una entrega de la modalidad A contuviera algo que no deba publicarse, no la subas y avisa por el canal privado.

## 10. Evaluación

### Rúbrica

| Criterio | Peso | Excelente | Notable | Suficiente | Insuficiente |
|---|---:|---|---|---|---|
| **C1 · Punto de partida y plan**<br>Apartados 2 y 3 | 1,0 | **0,9 – 1,0** · La ficha de la A03 sirve de entrada real a Shodan y FOCA. Las preguntas nuevas son técnicas y documentales, útiles para el destinatario y priorizadas. El plan concreta consultas, criterio de selección de documentos, contraste y configuración de FOCA, y es anterior a la obtención. | **0,6 – 0,8** · Plan correcto con alguna pregunta genérica o una configuración poco concreta. | **0,3 – 0,5** · Preguntas que repiten la A03 o plan sin relación con ellas. | **0,0 – 0,2** · Sin punto de partida o sin plan, o plan posterior a la obtención. |
| **C2 · Obtención y trazabilidad**<br>Apartado 4.1 · evidencias | 1,5 | **1,35 – 1,5** · Cada consulta se puede repetir a partir del registro. Registra errores, vacíos y restricciones de la cuenta. Las capturas están recortadas, anonimizadas y citadas. | **0,9 – 1,3** · Registro completo con alguna consulta imprecisa o alguna captura sin citar. | **0,6 – 0,8** · Registro irregular: faltan fechas, consultas exactas o la relación entre fila y captura. | **0,0 – 0,5** · Afirmaciones sin registro o capturas que no permiten saber cómo se obtuvieron. |
| **C3 · Shodan**<br>Apartado 4.2 | 2,0 | **1,8 – 2,0** · Consultas con filtros adecuados y combinados con criterio. Lee las facetas antes de las fichas. Distingue titular del rango y usuario del servicio. Clasifica cada resultado en los tres grupos y contrasta las atribuciones con otra fuente. Conserva las fechas de observación y no confunde un banner con el estado actual. | **1,3 – 1,7** · Uso correcto con alguna atribución sin contrastar o alguna fecha sin registrar. | **0,8 – 1,2** · Lista resultados sin clasificarlos ni interpretarlos. | **0,0 – 0,7** · Sin usar ni justificar, o atribuciones sistemáticamente erróneas. |
| **C4 · FOCA**<br>Apartado 4.3 | 2,0 | **1,8 – 2,0** · Proyecto configurado dentro de los límites. Selección de documentos razonada y variada. Resumen por categorías con recuentos y patrones. Interpreta bien autor, programa y fechas, distingue plantilla, conversión y documentos de terceros, y protege los datos personales. | **1,3 – 1,7** · Uso correcto con alguna interpretación discutible, como tomar el programa de conversión por el de creación. | **0,8 – 1,2** · Copia el resumen de la herramienta sin interpretarlo. | **0,0 – 0,7** · Sin usar ni justificar, o metadatos mal interpretados de forma sistemática. |
| **C5 · Análisis e integración con la A03**<br>Apartado 5 | 1,5 | **1,35 – 1,5** · Separa lo observado de la valoración. Explica qué confirman, añaden o contradicen los nuevos hallazgos respecto de la A03. El grafo final integra las dos actividades y etiqueta cada relación con su fuente. Valora fiabilidad y credibilidad por separado. | **0,9 – 1,3** · Análisis correcto con una integración superficial con la A03. | **0,6 – 0,8** · Describe sin valorar o trata la A04 como un trabajo aislado. | **0,0 – 0,5** · Conclusiones sin base o relaciones inventadas. |
| **C6 · Perspectiva del atacante y recomendaciones**<br>Apartado 6 | 1,0 | **0,9 – 1,0** · Cada fila parte de un hallazgo propio con su referencia, y al menos tres salen de Shodan o FOCA. El aprovechamiento es realista y no operativo. Las medidas son concretas, proporcionadas y priorizadas, y se dice qué no cubren. | **0,6 – 0,8** · Filas correctas con alguna medida genérica. | **0,3 – 0,5** · Riesgos genéricos, válidos para cualquier objetivo. | **0,0 – 0,2** · Sin relación con los hallazgos, o con instrucciones operativas. |
| **C7 · Minimización, límites y resumen**<br>Apartados 7 y 1 | 1,0 | **0,9 – 1,0** · Seudonimiza o agrega los datos personales, documenta lo descartado y, si hubo incidencias, paró y avisó como se indica. Las limitaciones condicionan de verdad las conclusiones. El resumen se entiende sin leer el resto y responde cada pregunta con su confianza. | **0,6 – 0,8** · Correcto con alguna limitación genérica o un resumen con algún desajuste. | **0,3 – 0,5** · Minimización irregular o resumen que no responde a las preguntas. | **0,0 – 0,2** · Conserva datos innecesarios o falta el resumen. |
| | **10** | | | | |

**Qué separa un 8 de un 10.** Un informe completo, correcto y bien presentado que usa todas las herramientas es un **8**. Para subir hacen falta, a la vez:

- que cualquier consulta del registro se pueda repetir y dé un resultado comparable;
- que ningún activo se atribuya al objetivo solo por un resultado de Shodan;
- que los metadatos se interpreten con sus límites, y no como una lista de datos;
- que la A04 cambie o confirme de forma explícita alguna conclusión de la A03;
- que las recomendaciones salgan de hallazgos propios y digan qué **no** cubren.

### Penalizaciones e incumplimientos

Las penalizaciones se restan de la suma de la rúbrica. La nota no baja de 0 ni sube de 10.

**Incumplimientos que impiden la evaluación**

| Incumplimiento | Efecto |
|---|---|
| Entregar fuera de plazo | **0 en la actividad** |
| Realizar cualquier acción de la columna «No puedes» o contraria a las normas | Actividad no evaluable y aplicación de las [normas](../../NORMAS.md) |
| Cambiar de objetivo o de modalidad respecto de la A03 sin autorización | Actividad no evaluable |
| Subir documentos descargados, credenciales, datos personales sin seudonimizar o capturas de servicios delicados | Actividad no evaluable y aviso por el canal privado |
| Subir al repositorio del curso cualquier parte de una entrega de la modalidad B | Actividad no evaluable y retirada del contenido |
| Falta `registro-ia.md` o no incluye los prompts | Entrega incompleta: **no se califica** |
| Contenido coincidente con otra entrega | Se aplica la normativa académica sobre autoría |
| El *pull request* modifica archivos fuera de `entregas/apellidoNombre/A04/` | Se devuelve sin revisar hasta que se corrija |

**Incumplimiento de indicaciones · −1,0 punto cada una**

| Indicación incumplida |
|---|
| No consta que el plan sea anterior a la obtención: falta el *commit* en la modalidad A o la fecha de cierre del plan en la modalidad B |
| Shodan o FOCA no se usan ni se justifica su sustitución |
| Las capturas muestran datos de tu sesión, direcciones IP completas o cualquier dato de los que deben ocultarse |
| No se respeta la plantilla: encabezados, numeración o bloques de instrucciones sin sustituir |
| El registro de IA está incompleto, le falta la evidencia de algún uso o no corresponde a la entrega |
| Se usa la IA para algo que el nivel C no permite o se le introducen resultados de la obtención o datos personales |
| Cualquier otra indicación de este enunciado que no se cumpla |

**Errores de análisis**

| Error | Penalización |
|---|---|
| Afirmar sin una fila `OBT` que lo respalde, o con una fila que no dice eso | −0,25 por caso, hasta −1,0 |
| Atribuir al objetivo un activo solo por `org:`, `hostname:` o por compartir proveedor | −0,5 por caso, hasta −1,5 |
| Presentar como vulnerabilidad confirmada lo que es una versión declarada en un banner | −1,0 |
| Introducir hechos que no salen de tu obtención ni de una fuente citada | −2,0 |
| Atribuir negligencia o responsabilidad a la organización o a personas | −1,0 |

---

## Antes de entregar

- [ ] Trabajo sobre el mismo objetivo y la misma modalidad que en la A03.
- [ ] El plan es anterior a la obtención: *commit* en la modalidad A, fecha de cierre en la modalidad B.
- [ ] He usado Shodan, FOCA y Maltego, o he justificado su sustitución.
- [ ] Cada consulta tiene su fila `OBT` con fecha, hora y zona horaria.
- [ ] Cada captura está recortada, anonimizada, numerada y citada, con las IP ocultas.
- [ ] Los datos personales de los metadatos están seudonimizados o agregados.
- [ ] No he abierto IP ni puertos de terceros, ni he usado las funciones de red de FOCA.
- [ ] No entrego documentos descargados, exportaciones ni proyectos de las herramientas.
- [ ] El resumen ejecutivo responde cada pregunta con su confianza y no supera las 300 palabras.
- [ ] He incluido `registro-ia.md` con los prompts, o la declaración de no uso.
- [ ] Entrego antes del viernes 6 de noviembre a las 23:59.
- [ ] Modalidad A: solo he modificado `entregas/apellidoNombre/A04/`. Modalidad B: nada está en el repositorio del curso y entrego el ZIP en el Campus Virtual.
