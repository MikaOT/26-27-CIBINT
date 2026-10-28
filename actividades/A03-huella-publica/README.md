# A03 · Huella pública

| | |
|---|---|
| **Tema** | 3 · OSINT: personas y organizaciones |
| **Modalidad** | Individual · objetivo de libre elección: una organización o tu propia huella |
| **Producto** | Informe de huella pública, con su registro de obtención y sus evidencias |
| **Entrega** | Viernes 30 de octubre de 2026, antes de las 23:59 |
| **Régimen de IA** | Nivel C · IA de apoyo, con uso obligatoriamente declarado |
| **Continuación** | [A04 · Exposición técnica y documental](../A04-exposicion-tecnica-y-documental/README.md) |

---

## 1. Objeto

Vas a investigar con fuentes abiertas la huella pública de un objetivo que eliges tú:

- **Modalidad A · Organización.** Una organización real. El informe va dirigido a su responsable de seguridad.
- **Modalidad B · Huella propia.** Tu propia identidad digital. El informe va dirigido a ti.

El informe responde a qué información sobre el objetivo está al alcance de cualquiera, qué podría aprovechar un atacante para preparar un engaño, una suplantación o un reconocimiento, y qué conviene revisar o reducir.

La actividad es **práctica**. Cada conclusión sale de consultas que haces tú, que quedan registradas y que se respaldan con una evidencia. Usarás las herramientas del [catálogo del Tema 3](https://github.com/hector-ae21/CIBINT/blob/main/contenidos/03-osint-personas-y-organizaciones/herramientas.md).

> **La A04 continúa esta actividad.** En la [A04](../A04-exposicion-tecnica-y-documental/README.md) trabajarás sobre el **mismo objetivo** con Shodan y FOCA, a partir de la ficha que construyas aquí. Elige un objetivo que te sirva para las dos actividades.

> **Recomendación: usa el caso de tu proyecto final.** Lo que obtengas en la A03 y la A04 te servirá directamente para los avances del [proyecto final](../../proyecto-final/README.md). Según el tipo de proyecto:
>
> - **Organización:** elige esa misma organización, en la modalidad A.
> - **Huella propia:** elige tu propia huella, en la modalidad B.
> - **Caso o vulnerabilidad públicos:** elige la organización afectada por el caso o el fabricante del producto vulnerable, en la modalidad A.
>
> El objetivo debe cumplir igualmente los requisitos del apartado 3, y estas actividades **no amplían el alcance aprobado del proyecto**: se entregan y se califican aparte.

## 2. Contexto profesional

Antes de una suplantación o de un correo dirigido, quien ataca estudia a su objetivo desde fuera: quién es, qué canales usa y con quién se relaciona. Un equipo defensivo hace el mismo recorrido, con límites, para saber qué ven los demás y reducirlo. Una persona puede hacerlo sobre sí misma por la misma razón.

| Huella | En una organización | En tu huella propia | Herramientas |
|---|---|---|---|
| **Corporativa o profesional** | ¿Qué entidad legal hay detrás de la marca y con qué otras se relaciona? | ¿Qué relación profesional o académica tuya es pública? | BORME, OpenCorporates, Google |
| **De canales** | ¿Qué dominios, perfiles y canales presenta como propios, y desde cuándo? | ¿Qué cuentas, alias y correos tuyos se encuentran, y cuáles se pueden relacionar entre sí? | Google con operadores, Wayback Machine |
| **De relaciones** | ¿Cómo se conectan las piezas y qué respalda cada conexión? | ¿Qué permite unir tus cuentas y alias en una sola identidad? | Maltego |

La explicación del Tema 3 sobre [OSINT ético y uso malicioso](https://github.com/hector-ae21/CIBINT/blob/main/contenidos/03-osint-personas-y-organizaciones/README.md#osint-ético-y-uso-malicioso-de-fuentes-abiertas) es el punto de partida: pensar como un atacante sirve para convertir cada observación en una comprobación o una medida de protección, nunca para ejecutar el engaño.

## 3. Elige el objetivo

### 3.1 Modalidad A · Organización

| La organización debe | No se puede elegir |
|---|---|
| Ser real y tener actividad pública en España o en Europa: empresa, administración, universidad, hospital, operador de transporte o de otro servicio, biblioteca, federación, club, fundación, asociación u ONG | Una persona física distinta de ti, ni un profesional que actúa con su propio nombre |
| Tener un dominio web propio con documentos publicados, necesarios para la A04. Compruébalo antes de elegirla con `site:DOMINIO filetype:pdf` | Un centro educativo de menores |
| Tener información societaria o institucional publicada, en el BORME o en otra fuente oficial | Las organizaciones de los casos de A01 y A02 |

**Sectores sensibles e incidentes.** Puedes elegir una entidad sanitaria, de transporte, energía, agua, defensa o seguridad, o una organización que haya sufrido un incidente, como los casos documentados del proyecto final. En ese caso se aplican además estas reglas:

- se estudia solo la organización y sus canales públicos: no se buscan datos de pacientes, viajeros, clientes ni empleados;
- no se buscan, abren ni descargan materiales del incidente, como muestras, filtraciones o anuncios de venta, ni se visitan los foros donde se ofrezcan;
- no se relaciona un hallazgo propio con el incidente si ninguna fuente lo hace;
- en la A04, Shodan se consulta solo por los dominios corporativos de la organización.

Puedes elegir una organización que conozcas o con la que tengas relación. En ese caso, trabaja igual que con cualquier otra: solo con fuentes abiertas y sin utilizar información que conozcas por esa relación.

### 3.2 Modalidad B · Huella propia

| Entra en el alcance | Queda fuera |
|---|---|
| Tu nombre, tus alias, tus cuentas y tus correos | **Familiares, amigos, compañeros o cualquier otra persona**, aunque aparezcan contigo en una foto, un comentario o un documento |
| Los documentos que has publicado: CV, trabajos, presentaciones, repositorios | Homónimos: si una persona con tu nombre aparece en los resultados, se registra como homónimo y no se investiga |
| Tu web, tu dominio o la IP pública de tu conexión, que se trabajan en la A04 | Cuentas, dominios o equipos que no sean tuyos, aunque los uses |
| La configuración y las exportaciones de tus propias cuentas, con el acceso normal | Probar contraseñas, revisar credenciales filtradas o acceder a contenido de filtraciones, aunque sea tuyo |

El informe contiene tus datos personales. Por eso la modalidad B **no se entrega en el repositorio del curso**, sino en una entrega privada del Campus Virtual. Aun así, incluye solo lo necesario para responder a tus preguntas.

> **Para hacer la modalidad B hay que solicitarlo por correo.** Antes del **miércoles 28 de octubre de 2026 a las 23:59**, envía un correo a [hector.arrechea@uneatlantico.es](mailto:hector.arrechea@uneatlantico.es) con este asunto exacto:
>
> `[CIBINT] A03 · Modalidad B · Apellido Nombre`
>
> En el cuerpo, indica solo tu nombre y que harás la modalidad B. No incluyas datos de tu investigación. Al recibirlo, se te habilitarán las entregas de la A03 y de la A04 en el Campus Virtual. **Sin ese correo, o si llega fuera de plazo, no se habilita la entrega y la actividad se hace en la modalidad A.**

### 3.3 En ambas modalidades

Si dudas de si un objetivo es adecuado, pregunta por el [canal privado](../../SECURITY.md) antes de empezar. Se pedirá que cambies de objetivo si no cumple los requisitos.

## 4. Herramientas

| Herramienta | Modalidad A · Organización | Modalidad B · Huella propia | Carácter |
|---|---|---|---|
| [Google con operadores](https://github.com/hector-ae21/CIBINT/blob/main/contenidos/03-osint-personas-y-organizaciones/herramientas.md#google-operadores-y-búsquedas-combinadas) | Canales, avisos y documentos indexados | Tu nombre, alias y correos, separando homónimos | Obligatoria |
| [Wayback Machine](https://github.com/hector-ae21/CIBINT/blob/main/contenidos/03-osint-personas-y-organizaciones/herramientas.md#wayback-machine-consultar-versiones-anteriores) | Comparar dos versiones de una página relevante | Comparar dos versiones de un perfil o una web tuyos | Obligatoria |
| [BORME](https://github.com/hector-ae21/CIBINT/blob/main/contenidos/03-osint-personas-y-organizaciones/herramientas.md#buscadores-borme-y-osint-framework-localizar-fuentes-concretas) u [OpenCorporates](https://github.com/hector-ae21/CIBINT/blob/main/contenidos/03-osint-personas-y-organizaciones/herramientas.md#opencorporates-distinguir-sociedades-con-nombres-parecidos) | Nombre legal, registro, filiales y actos publicados | Si figuras en algún acto o sociedad. Si no, registra la consulta vacía y qué significa | Obligatoria, al menos una de las dos |
| [Maltego](https://github.com/hector-ae21/CIBINT/blob/main/contenidos/03-osint-personas-y-organizaciones/herramientas.md#maltego-relacionar-entidades-y-fuentes) | Grafo de entidades, dominios y canales | Grafo de tus cuentas, alias, correos y enlaces | Obligatoria |
| [Intelligence X](https://github.com/hector-ae21/CIBINT/blob/main/contenidos/03-osint-personas-y-organizaciones/herramientas.md#intelligence-x-localizar-referencias-en-un-índice-y-archivo), [Google Lens o TinEye](https://github.com/hector-ae21/CIBINT/blob/main/contenidos/03-osint-personas-y-organizaciones/herramientas.md#google-lens-y-tineye-contrastar-imágenes), [Hunchly](https://github.com/hector-ae21/CIBINT/blob/main/contenidos/03-osint-personas-y-organizaciones/herramientas.md#hunchly-conservar-el-recorrido-y-las-evidencias-web), [Serus](https://github.com/hector-ae21/CIBINT/blob/main/contenidos/03-osint-personas-y-organizaciones/herramientas.md#serus-búsqueda-osint-asistida-por-ia-y-control-de-la-exposición) | Referencias históricas, reutilización de imágenes, conservación del recorrido o exposición del dominio | Por ejemplo, Lens o TinEye con tu foto de perfil, o Serus con tu correo. Con Intelligence X y Serus, registra solo en qué tipo de fuente o brecha apareces, sin abrir el contenido | Al menos una de las cuatro |
| OpenSanctions, Babel Street | Solo si una pregunta lo justifica | Normalmente no aplican | Se usan o se explica por qué se descartan |

Si una herramienta no está disponible para ti, por acceso o bloqueo del servicio, aplica la alternativa que indica su ficha del catálogo y **registra el cambio y su motivo**. Una alternativa justificada no penaliza; una herramienta obligatoria ausente sin explicación, sí.

## 5. Qué tienes que hacer

El informe se redacta en la [plantilla de respuesta](plantilla-respuesta.md). Las fases siguen el orden del trabajo; los apartados de la plantilla, el orden de lectura del informe.

### Fase 1 · Encargo · apartado 2

- Indica la modalidad y explica por qué has elegido el objetivo, si coincide con el de tu proyecto final y cómo has comprobado que hay material suficiente.
- Escribe el requerimiento con sus siete componentes: destinatario, decisión, objeto, horizonte, alcance, exclusiones y producto. El destinatario es el responsable de seguridad de la organización o, en la modalidad B, tú.
- Formula entre **tres y cuatro preguntas de inteligencia**, priorizadas, que cubran la huella corporativa o profesional, la de canales y la de relaciones.

### Fase 2 · Plan de obtención · apartado 3

Antes de la primera consulta, decide para cada pregunta qué herramienta usarás, qué alternativa descartas y por qué, qué introducirás, a quién envías ese dato y qué resultado esperas. Describe también tu configuración: identidad de investigación, cuentas, navegador y carpeta de trabajo.

> **El plan va antes que la obtención.** En la modalidad A, haz un *commit* con los apartados 2 y 3 completos **antes** de añadir resultados; el historial debe mostrarlo. En la modalidad B, indica al final del apartado 3 la fecha y hora en que cerraste el plan, que debe ser anterior a la primera fila del registro.

### Fase 3 · Obtención · apartado 4

Ejecuta el plan. Cada consulta o acción ocupa una fila del **registro de obtención** (`OBT-01`, `OBT-02`…): herramienta, consulta exacta, fecha y hora con zona horaria, resultado, límite y evidencia. Registra también los errores, los resultados vacíos y las restricciones de acceso: no equivalen a que algo no exista.

Para cada herramienta, explica qué pregunta respondió, qué obtuviste y qué límite tiene. Termina con la revisión de la elección: qué herramienta preveías, cuál usaste, qué obtuviste y si respondió a la pregunta.

### Fase 4 · Análisis de la huella · apartado 5

- Completa la **ficha del objetivo**, cada dato con su `OBT` y su precaución. Es el punto de partida de la A04:
  - en la modalidad A: nombre legal, marcas, filiales, dominios, canales oficiales y proveedores;
  - en la modalidad B: nombre y alias, cuentas y perfiles, correos públicos, relaciones profesionales o académicas, webs y documentos.
- Describe cada huella con dos partes separadas: **lo observado**, con referencias, y **la valoración**, con fiabilidad de la fuente y credibilidad de la información.
- Incorpora el grafo de Maltego, con las relaciones etiquetadas como observadas, declaradas o pendientes.
- Valora los hallazgos clave: qué es un hecho, qué es una inferencia y qué contraste independiente tiene.

### Fase 5 · Perspectiva del atacante · apartado 6

Construye al menos **tres filas** con este recorrido: información visible, cómo podría aprovecharla un atacante, a qué afectaría y qué medida defensiva propones, con su prioridad. Describe el riesgo sin dar instrucciones operativas.

### Fase 6 · Limitaciones y cierre · apartados 7, 8 y 1

Recoge lo que no has podido responder, lo que descartaste por quedar fuera del alcance y cualquier incidencia. Completa el índice de evidencias. Después escribe el **resumen ejecutivo**, de 250 palabras como máximo: va al principio, pero se escribe al final. Debe responder cada pregunta con su nivel de confianza.

## 6. Evidencias y capturas

Cada afirmación del informe se apoya en una fila del registro, y cada fila relevante en una captura propia.

**Nombre y ubicación.** Las capturas se guardan en `evidencias/` con el nombre `EV-01.png`, `EV-02.png`… y se citan en el registro de obtención y en el índice de evidencias de la plantilla.

**Capturas mínimas**

| Herramienta | Qué debe verse |
|---|---|
| Google | Una consulta con operadores y sus resultados |
| Wayback Machine | Las dos versiones comparadas, con su fecha de captura |
| BORME u OpenCorporates | La ficha, el acto consultado o la consulta vacía |
| Maltego | El grafo exportado como imagen |
| Herramienta opcional | El resultado utilizado |

**Antes de guardar una captura, recórtala y oculta:**

- cualquier dato de tu sesión;
- los datos de cualquier otra persona: nombres, usuarios, correos, fotos o comentarios;
- en la modalidad A, tu nombre de usuario y tu correo;
- en la modalidad B, tus datos que no sean necesarios para la pregunta, como teléfono, dirección o documentos de identidad.

Oculta con un bloque opaco. El desenfoque y la pixelación pueden revertirse. Nunca se guardan contraseñas, códigos de verificación ni tokens, tampoco los tuyos. No se entregan páginas ni documentos descargados ni el archivo de proyecto de Maltego.

## 7. Límites

Se aplican íntegramente las [normas de la asignatura](../../NORMAS.md). En esta actividad se concretan así:

| Puedes | No puedes |
|---|---|
| Consultar buscadores, archivos, registros públicos e índices existentes | Escanear, sondear o comprobar servicios del objetivo o de terceros |
| Visitar la web pública del objetivo como cualquier visitante | Ejecutar transformaciones de Maltego que no hayas revisado o que consulten fuentes fuera del alcance |
| En la modalidad A, registrar cargos o funciones cuando la pregunta lo necesite | Investigar a familiares, amigos, compañeros, homónimos o a las personas cuyos nombres aparezcan en la web o junto a ti |
| En la modalidad B, revisar la configuración y las exportaciones de tus propias cuentas | Acceder a cuentas ajenas, probar contraseñas o usar credenciales filtradas, aunque sean tuyas |
| Proponer medidas y comprobaciones al destinatario | Contactar con la organización, su personal o sus canales, ni enviarles el informe |
| Usar tus propias cuentas gratuitas | Crear cuentas para eludir límites, buscar credenciales o abrir filtraciones |

### Cuándo parar

Si aparece una credencial, un documento interno o confidencial o datos personales sensibles de otra persona:

1. detente y no abras, descargues ni captures su contenido;
2. anota en el apartado 7 solo la categoría de lo encontrado y la fila `OBT` en la que apareció, sin reproducir el dato;
3. avisa por el [canal privado de la asignatura](../../SECURITY.md);
4. continúa solo cuando se confirme un alcance seguro.

En la modalidad B, si descubres que una credencial tuya está expuesta, cámbiala desde el servicio oficial y anótalo como medida tomada, sin reproducir el dato.

## 8. Inteligencia artificial · nivel C

**Nivel C · IA de apoyo.** El uso es obligatoriamente declarado.

| Se permite usar IA para… | No se permite usar IA para… |
|---|---|
| Aclarar conceptos del tema | Redactar los apartados del informe |
| Entender la sintaxis de un operador o el funcionamiento de una herramienta | Hacer búsquedas o navegar en tu nombre, con un agente o una extensión |
| Buscar ideas de preguntas o de medidas que después valoras y decides tú | Analizar o resumir los resultados de tu obtención, o valorar tus hallazgos |
| Revisar la ortografía de un texto ya escrito por ti | Decidir conclusiones, niveles de confianza, recomendaciones o el resumen ejecutivo |

**Serus** es una herramienta del catálogo: sus búsquedas e investigaciones se registran en el registro de obtención como cualquier otra consulta, y sus resultados se contrastan en la fuente original. Su asistente no se usa para redactar ni para valorar.

**Nunca se introducen en una IA** los resultados de la obtención ni tus datos personales: nombres, cuentas, correos, capturas ni documentos. La IA no es una fuente: ningún hecho sobre el objetivo puede apoyarse en lo que diga un asistente.

**Cómo se declara.** Copia [registro-ia.md](registro-ia.md) en tu carpeta de entrega:

1. por cada uso, copia el bloque «Uso» y rellena herramienta, para qué, en qué apartado, el **prompt tal cual** y qué hiciste con la respuesta;
2. guarda como evidencia una captura o exportación en `ia/` con el número del uso (`uso-01.png`…), o pega el enlace para compartir la conversación;
3. si no has usado IA, borra el modelo y escribe: «No he utilizado inteligencia artificial».

> Sin `registro-ia.md`, o con un registro sin los prompts, la entrega está **incompleta y no se califica**.

## 9. Entrega

| Campo | Modalidad A · Organización | Modalidad B · Huella propia |
|---|---|---|
| Código | `A03` | `A03` |
| Requisito previo | Ninguno | Correo con el asunto `[CIBINT] A03 · Modalidad B · Apellido Nombre`, antes del miércoles 28 de octubre de 2026 a las 23:59 |
| Canal | *Pull request* desde tu *fork*, con el título `[A03] Apellido Nombre` | Entrega privada A03 del Campus Virtual, habilitada tras el correo |
| Formato | Carpeta `entregas/apellidoNombre/A03/` | Carpeta `A03` comprimida en un único archivo ZIP |
| Fecha límite | Viernes 30 de octubre de 2026, antes de las 23:59 | Viernes 30 de octubre de 2026, antes de las 23:59 |

> **Plazo.** Una entrega fuera de plazo se califica con un **0 en la actividad**. En la modalidad A cuenta el estado de la rama a la hora límite: los *commits* posteriores no se tienen en cuenta.

```text
A03/
├── README.md          ← informe, copia de plantilla-respuesta.md
├── registro-ia.md     ← copia de registro-ia.md
├── ia/                ← evidencias del uso de IA, si las hay
└── evidencias/
    ├── EV-01.png
    └── …
```

1. **Modalidad A:** actualiza tu *fork* y crea una rama, por ejemplo `a03-apellidoNombre`. **Modalidad B:** envía el correo de solicitud en su plazo y trabaja en una carpeta `A03` de tu equipo, fuera del repositorio del curso.
2. Copia [plantilla-respuesta.md](plantilla-respuesta.md) como `README.md` y [registro-ia.md](registro-ia.md) en la carpeta `A03`. No edites los originales.
3. Completa los apartados 2 y 3 antes de empezar la obtención: en la modalidad A, con su *commit*; en la modalidad B, con la fecha de cierre del plan.
4. Completa el resto sin cambiar el orden ni la numeración. Si un apartado no te aplica, explica por qué en lugar de borrarlo.
5. Revisa cada captura y entrega. En la modalidad A, el *pull request* solo puede tocar tu carpeta.

Ninguna parte de una entrega de la modalidad B se sube al repositorio del curso. Si una entrega de la modalidad A contuviera algo que no deba publicarse, no la subas y avisa por el canal privado.

## 10. Evaluación

### Rúbrica

| Criterio | Peso | Excelente | Notable | Suficiente | Insuficiente |
|---|---:|---|---|---|---|
| **C1 · Encargo y plan**<br>Apartados 2 y 3 | 2,0 | **1,8 – 2,0** · Objetivo adecuado para la A03 y la A04, con material suficiente comprobado. Requerimiento completo, con exclusiones propias del caso. Las preguntas responden a una decisión del destinatario y están priorizadas. Cada herramienta del plan responde a una pregunta, con su alternativa descartada y lo que expone. El plan es anterior a la obtención. | **1,3 – 1,7** · Encargo y plan correctos, con alguna pregunta genérica o alguna elección poco justificada. | **0,8 – 1,2** · Requerimiento incompleto o preguntas que son temas; herramientas elegidas sin relación con las preguntas. | **0,0 – 0,7** · Sin requerimiento o sin plan, o plan posterior a la obtención. |
| **C2 · Obtención y trazabilidad**<br>Apartado 4.1 · evidencias | 2,0 | **1,8 – 2,0** · Cada consulta se puede repetir a partir del registro: consulta exacta, fecha y hora con zona, resultado y límite. Registra errores, vacíos y restricciones. Las capturas están bien elegidas, recortadas, anonimizadas y citadas. | **1,3 – 1,7** · Registro completo con alguna consulta imprecisa o alguna captura sin citar. | **0,8 – 1,2** · Registro irregular: faltan fechas, consultas exactas o la relación entre fila y captura. | **0,0 – 0,7** · Afirmaciones sin registro o capturas que no permiten saber cómo se obtuvieron. |
| **C3 · Uso de las herramientas**<br>Apartados 4.2 y 4.3 | 2,0 | **1,8 – 2,0** · Google con operadores bien combinados, versiones de Wayback comparadas con sus fechas, fuente societaria interpretada con sus identificadores y grafo de Maltego construido con fuentes. La herramienta opcional aporta algo que las demás no daban. La revisión de la elección es honesta. | **1,3 – 1,7** · Todas usadas correctamente, con algún uso superficial. | **0,8 – 1,2** · Usos que no responden a ninguna pregunta o revisión de la elección ausente. | **0,0 – 0,7** · Faltan herramientas obligatorias sin justificación. |
| **C4 · Análisis de la huella**<br>Apartado 5 | 2,0 | **1,8 – 2,0** · Ficha del objetivo completa y referenciada. Separa siempre lo observado de la valoración. Distingue marca, sociedad y filiales, o cuenta, alias, persona y homónimo. No une entidades ni cuentas por coincidencia de nombre. Valora fiabilidad y credibilidad por separado. El grafo etiqueta cada relación y su fuente. | **1,3 – 1,7** · Análisis correcto con algún hallazgo valorado por encima de su evidencia. | **0,8 – 1,2** · Describe sin valorar, o valora sin distinguir hecho e inferencia. | **0,0 – 0,7** · Conclusiones sin base o relaciones inventadas. |
| **C5 · Perspectiva del atacante**<br>Apartado 6 | 1,0 | **0,9 – 1,0** · Cada fila parte de un hallazgo propio con su referencia. El aprovechamiento es realista y no operativo. Las medidas son concretas, proporcionadas y priorizadas. | **0,6 – 0,8** · Filas correctas con alguna medida genérica. | **0,3 – 0,5** · Riesgos genéricos, válidos para cualquier objetivo. | **0,0 – 0,2** · Sin relación con los hallazgos, o con instrucciones operativas. |
| **C6 · Minimización, limitaciones y resumen**<br>Apartados 7 y 1 | 1,0 | **0,9 – 1,0** · Conserva solo los datos necesarios, protege los de terceros y documenta lo descartado. Las limitaciones condicionan de verdad las conclusiones. El resumen se entiende sin leer el resto y responde cada pregunta con su confianza. | **0,6 – 0,8** · Correcto con alguna limitación genérica o un resumen con algún desajuste. | **0,3 – 0,5** · Minimización irregular o resumen que no responde a las preguntas. | **0,0 – 0,2** · Conserva datos innecesarios o falta el resumen. |
| | **10** | | | | |

**Qué separa un 8 de un 10.** Un informe completo, correcto y bien presentado que usa todas las herramientas es un **8**. Para subir hacen falta, a la vez:

- que cualquier consulta del registro se pueda repetir y dé un resultado comparable;
- que ninguna entidad ni cuenta se atribuya al objetivo solo por una coincidencia;
- que el grafo distinga lo observado de lo declarado y de lo pendiente;
- que la ficha del objetivo sirva, tal como está, de punto de partida para la A04.

### Penalizaciones e incumplimientos

Las penalizaciones se restan de la suma de la rúbrica. La nota no baja de 0 ni sube de 10.

**Incumplimientos que impiden la evaluación**

| Incumplimiento | Efecto |
|---|---|
| Entregar fuera de plazo | **0 en la actividad** |
| Realizar cualquier acción de la columna «No puedes» o contraria a las normas | Actividad no evaluable y aplicación de las [normas](../../NORMAS.md) |
| Elegir un objetivo excluido por el apartado 3 o investigar a otra persona | Actividad no evaluable |
| Subir credenciales, datos personales de terceros o material no publicable | Actividad no evaluable y aviso por el canal privado |
| Subir al repositorio del curso cualquier parte de una entrega de la modalidad B | Actividad no evaluable y retirada del contenido |
| Falta `registro-ia.md` o no incluye los prompts | Entrega incompleta: **no se califica** |
| Contenido coincidente con otra entrega | Se aplica la normativa académica sobre autoría |
| El *pull request* modifica archivos fuera de `entregas/apellidoNombre/A03/` | Se devuelve sin revisar hasta que se corrija |

**Incumplimiento de indicaciones · −1,0 punto cada una**

| Indicación incumplida |
|---|
| No consta que el plan sea anterior a la obtención: falta el *commit* en la modalidad A o la fecha de cierre del plan en la modalidad B |
| Una herramienta obligatoria no se usa ni se justifica su sustitución |
| Las capturas muestran datos de tu sesión o cualquier dato de los que deben ocultarse |
| No se respeta la plantilla: encabezados, numeración o bloques de instrucciones sin sustituir |
| El registro de IA está incompleto, le falta la evidencia de algún uso o no corresponde a la entrega |
| Se usa la IA para algo que el nivel C no permite o se le introducen resultados de la obtención o datos personales |
| Cualquier otra indicación de este enunciado que no se cumpla |

**Errores de análisis**

| Error | Penalización |
|---|---|
| Afirmar sin una fila `OBT` que lo respalde, o con una fila que no dice eso | −0,25 por caso, hasta −1,0 |
| Atribuir al objetivo una entidad, un dominio o una cuenta solo por coincidencia de nombre | −0,5 por caso, hasta −1,5 |
| Introducir hechos que no salen de tu obtención ni de una fuente citada | −2,0 |
| Atribuir negligencia o responsabilidad a la organización o a personas | −1,0 |

---

## Antes de entregar

- [ ] El objetivo cumple los requisitos de su modalidad y no investigo a ninguna otra persona.
- [ ] Modalidad B: envié el correo con el asunto indicado antes del miércoles 28 de octubre a las 23:59.
- [ ] El plan es anterior a la obtención: *commit* en la modalidad A, fecha de cierre en la modalidad B.
- [ ] He usado todas las herramientas obligatorias, o he justificado su sustitución.
- [ ] Cada consulta tiene su fila `OBT` con fecha, hora y zona horaria.
- [ ] Cada captura está recortada, anonimizada, numerada y citada.
- [ ] La ficha del objetivo está completa: la necesitaré en la A04.
- [ ] El resumen ejecutivo responde cada pregunta con su confianza y no supera las 250 palabras.
- [ ] He incluido `registro-ia.md` con los prompts, o la declaración de no uso.
- [ ] Entrego antes del viernes 30 de octubre a las 23:59.
- [ ] Modalidad A: solo he modificado `entregas/apellidoNombre/A03/`. Modalidad B: nada está en el repositorio del curso y entrego el ZIP en el Campus Virtual.
