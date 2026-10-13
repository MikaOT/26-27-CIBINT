# Registro de uso de inteligencia artificial · Grupo 1

> **Registro de IA del grupo 1 · actividad A02.**
>
> Este archivo es el registro de tu grupo. **Se trabaja directamente sobre él** y se entrega junto con el plan de investigación.
>
> **Cómo se rellena:**
>
> 1. Cada vez que alguien del grupo use IA, copia el bloque «Uso 1» y rellénalo con el número siguiente.
> 2. Como evidencia, guarda una captura o exportación en la carpeta `ia/` con el número del uso (`uso-01.png`, `uso-02.pdf`…), o pega el enlace para compartir la conversación.
> 3. Si el grupo no ha usado IA, borra el bloque y escribe: «No hemos utilizado inteligencia artificial».
>
> Nivel C: la IA puede usarse para explorar, buscar ideas, aclarar conceptos o revisar la ortografía. No puede redactar el plan ni tomar sus decisiones. No se introducen datos personales.
>
> Borra este recuadro antes de entregar.

**Nota sobre los prompts.** Los prompts se copian tal cual, con una única excepción: las rutas de archivos locales se han sustituido por `[ruta omitida: …]` para no publicar en un repositorio público el nombre de usuario del equipo ni la estructura de directorios local. Las referencias corresponden a:

| Referencia | Archivo |
|---|---|
| `enunciado-A02` | `README.md` del enunciado de la actividad A02 |
| `caso-hacienda` | `README.md` del caso del grupo 1 (Ministerio de Hacienda) |
| `documentacion-tema-02` | `README.md` del Tema 2 · Marco legal, ética y OPSEC del analista |
| `casos-A02` | `README.md` general de los casos de la actividad A02 |
| `plan-grupo1` | `README.md` del plan de investigación del grupo 1 |
| `registro-ia` | Este registro, `registro-ia.md` |
| `evidencia-historial` | `ia/usos-01-14.txt`, la exportación de la conversación |
| `ruta local` | Ruta absoluta del equipo, citada de forma abreviada |

Por el mismo motivo, las rutas también aparecen sustituidas en `ia/usos-01-14.txt`, con las mismas referencias. En esa exportación se han sustituido además las rutas de los mensajes de contexto del editor y de los enlaces de las respuestas; el resto del texto no se ha modificado.

## Uso 1

- **Quién:** Eirik Rosete
- **Herramienta:** Claude Code (extensión de VS Code), modelo Claude Opus 5.5
- **Para qué:** petición de ayuda para realizar el apartado 2.2. La IA la rechazó por no estar permitida en el nivel C (valorar afirmaciones, decidir qué se da por establecido y redactar apartados) y solo indicó qué usos sí estaban permitidos
- **Apartado del plan:** 2.2
- **Prompt, copiado tal cual:**

  ```text
  Vamos a realizar la actividad de [ruta omitida: enunciado-A02]  usando el caso el grupo de hacienda  [ruta omitida: caso-hacienda]   . Debes limitarte al uso de inteligencia aartifical marcado a partir de la línea 91 del documento [ruta omitida: enunciado-A02] , SIEMPRE deberás actuar consultando esto antes de cualquier acción; si una petición mía contradice estos límites, márcamelo y no respondas, limita tu comportamiento a estas reglas durante TODA la conversación.

  Toda la documentación relevante para esta práctica está en [ruta omitida: documentacion-tema-02]   en dicho directorio de 02-marclo-legal-etica-y-opsec. Ayúdame a realizar el apartado 2.2, recuerda siempre siguiendo las reglas
  ```

- **Qué hicimos con la respuesta:** Descartar la información que nos dio porque cumplia con las reglas establecidas del uso de la IA
- **Evidencia:** `ia/usos-01-14.txt` (exportación de la conversación, uso 1)

## Uso 2

- **Quién:** Eirik Rosete
- **Herramienta:** Claude Code (extensión de VS Code), modelo Claude Opus 5.5
- **Para qué:** aclarar un concepto: significado de cada columna de la tabla 2.1 y su relación con el Tema 2
- **Apartado del plan:** 2.1
- **Prompt, copiado tal cual:**

  ```text
  Vale, entonces dime cómo es que relleno la tabla, es decir, qué es lo que significa cada columna y cómo está relacionada con la documentación del tema
  ```

- **Qué hicimos con la respuesta:** Analizar la respuesta del agente para proceder a avanzar con la tabla
- **Evidencia:** `ia/usos-01-14.txt` (exportación de la conversación, uso 2)

## Uso 3

- **Quién:** Eirik Rosete
- **Herramienta:** Claude Code (extensión de VS Code), modelo Claude Opus 5.5
- **Para qué:** buscar ideas sobre cómo organizar el trabajo entre tres personas. La IA propuso opciones sin elegir ninguna; la decisión es del grupo
- **Apartado del plan:** Equipo · Organización del trabajo
- **Prompt, copiado tal cual:**

  ```text
  Cómo es que podríamos distribuirnos el trabajo entre tres personas, deberíamos seguir el hilo? Deberíamos trabajar en lo mismo a la vez? Veo que la manera de realizar este ejercicio depende del apartado anterior
  ```

- **Qué hicimos con la respuesta:** No tenerla en cuenta y distribuirnos el trabajo para finalizar la actividad
- **Evidencia:** `ia/usos-01-14.txt` (exportación de la conversación, uso 3)

## Uso 4

- **Quién:** Eirik Rosete
- **Herramienta:** Claude Code (extensión de VS Code), modelo Claude Opus 5.5
- **Para qué:** aclarar un concepto: diferencia entre `hechos.csv` y la tabla 2.1, proceso de análisis y uso de la columna «Valoración»
- **Apartado del plan:** 2.1
- **Prompt, copiado tal cual:**

  ```text
  Y qué diferencia hay entre la tabla del apartado 2.1 con los hechos del csv? No quiero que me des la respuesta, sino, el proceso de análisis, debería poner el hecho completo? O debería colocar información? Luego, en valoración no se supone que debe colocarse esto: 

  establecida, afirmada sin confirmar, cálculo o interpretación de un tercero, contradicha por otra fuente, etc.
  ```

- **Qué hicimos con la respuesta:** Analizar la respuesta y tomarla en cuenta para realizar el apartado
- **Evidencia:** `ia/usos-01-14.txt` (exportación de la conversación, uso 4)

## Uso 5

- **Quién:** Eirik Rosete
- **Herramienta:** Claude Code (extensión de VS Code), modelo Claude Opus 5.5
- **Para qué:** aclarar un concepto: si pueden incluirse en la tabla 2.1 afirmaciones que están en las fuentes F01–F06 pero no en `hechos.csv`, según el enunciado
- **Apartado del plan:** 2.1
- **Prompt, copiado tal cual:**

  ```text
  Otra duda, entonces en el apartado 2.1 se puede agregar información que estén directamente en las fuentes aunque no estén en los hechos? Es decir, puedo citar a la fuente X que, aunque no está explícitamente dicho en el csv que dice algo y en la fuente sí, podría incluirlo?
  ```

- **Qué hicimos con la respuesta:** Tomarlo en cuenta para agregar citas de hechos que no estaban en el .csv y entender el formato para agregarlo
- **Evidencia:** `ia/usos-01-14.txt` (exportación de la conversación, uso 5)

## Uso 6

- **Quién:** Eirik Rosete
- **Herramienta:** Claude Code (extensión de VS Code), modelo Claude Opus 5.5
- **Para qué:** aclarar un concepto: cómo condensar una afirmación sin alterar su atribución (con ejemplos genéricos, no del caso)
- **Apartado del plan:** 2.1
- **Prompt, copiado tal cual:**

  ```text
  O sea, podría reducir la cantidad de información diciendo, por ejemplo, el actor x es el responsable de este ataque
  ```

- **Qué hicimos con la respuesta:** Analizar la respuesta para tomarla en cuenta para la redacción del apartado
- **Evidencia:** `ia/usos-01-14.txt` (exportación de la conversación, uso 6)

## Uso 7

- **Quién:** Eirik Rosete
- **Herramienta:** Claude Code (extensión de VS Code), modelo Claude Opus 5.5
- **Para qué:** aclarar un concepto: validez de la fórmula «según X, se hizo Y» en la tabla 2.1
- **Apartado del plan:** 2.1
- **Prompt, copiado tal cual:**

  ```text
  para la 2.1 es valido decir "segun x se hizo y"
  ```

- **Qué hicimos con la respuesta:** Analizar la respuesta para tomarla en cuenta para la redacción del apartado
- **Evidencia:** `ia/usos-01-14.txt` (exportación de la conversación, uso 7)

## Uso 8

- **Quién:** Eirik Rosete
- **Herramienta:** Claude Code (extensión de VS Code), modelo Claude Opus 5.5
- **Para qué:** aclarar un concepto: cuándo un medio es quien hace la afirmación y cuándo solo la transmite
- **Apartado del plan:** 2.1
- **Prompt, copiado tal cual:**

  ```text
  vale poner el medio, es decir, la revista o la marca como sujeto X?
  ```

- **Qué hicimos con la respuesta:** Analizar la respuesta para tomarla en cuenta para la redacción del apartado
- **Evidencia:** `ia/usos-01-14.txt` (exportación de la conversación, uso 8)

## Uso 9

- **Quién:** Eirik Rosete
- **Herramienta:** Claude Code (extensión de VS Code), modelo Claude Opus 5.5
- **Para qué:** aclarar un concepto: método para construir las filas de la tabla 2.1. La IA no dio una cifra objetivo de afirmaciones porque decidir cuáles son relevantes corresponde al grupo
- **Apartado del plan:** 2.1
- **Prompt, copiado tal cual:**

  ```text
  Sé que no puedes ayudarme del todo como tal, pero si me puedes dar alguna referencia de la cantidad de afirmaciones del caso deberia poner te lo agradeceria (y aun mas si me das un step by step de como construirlas)
  ```

- **Qué hicimos con la respuesta:** Complementar con una idea de cómo realizar la tabla paso a paso con referencia al tema
- **Evidencia:** `ia/usos-01-14.txt` (exportación de la conversación, uso 9)

## Uso 10

- **Quién:** Eirik Rosete
- **Herramienta:** Claude Code (extensión de VS Code), modelo Claude Opus 5.5
- **Para qué:** aclarar un concepto: para qué sirve `hechos.csv` frente a la lectura de las fuentes
- **Apartado del plan:** 2.1
- **Prompt, copiado tal cual:**

  ```text
  Entonces si tengo que buscar directamente de las fuentes, para que me serviria la tabla de hechos?
  ```

- **Qué hicimos con la respuesta:** Analizar la respuesta para tomarla en cuenta para la redacción del apartado
- **Evidencia:** `ia/usos-01-14.txt` (exportación de la conversación, uso 10)

## Uso 11

- **Quién:** Eirik Rosete
- **Herramienta:** Claude Code (extensión de VS Code), modelo Claude Opus 5.5
- **Para qué:** revisar la ortografía de la tabla 2.1 ya redactada por el grupo (solo ortografía, puntuación y tipografía, sin revisar el contenido ni las valoraciones)
- **Apartado del plan:** 2.1
- **Prompt, copiado tal cual:**

  ```text
  Revisa la ortografía de la sección 2.1 para ver si está correcto todo. Recuerda siempre seguir las limitaciones de  [ruta omitida: enunciado-A02]
  ```

- **Qué hicimos con la respuesta:** Omitirla puesto que incluia revisiones menores no relevantes
- **Evidencia:** `ia/usos-01-14.txt` (exportación de la conversación, uso 11)

## Uso 12

- **Quién:** Eirik Rosete
- **Herramienta:** Claude Code (extensión de VS Code), modelo Claude Opus 5.5
- **Para qué:** rellenar este registro con los usos anteriores (prompts copiados tal cual). Los campos «Quién» y «Qué hicimos con la respuesta» los completa el grupo
- **Apartado del plan:** Registro de IA
- **Prompt, copiado tal cual:**

  ```text
  Puedes rellenar el registro-ia.md? Entiendo que no tiene que ver con la actividad y simplemente te estoy pidiendo actualizar el archivo de la manera en que te use
  ```

- **Qué hicimos con la respuesta:** Aceptar la propuesta y dejar que rellene este registro
- **Evidencia:** `ia/usos-01-14.txt` (exportación de la conversación, uso 12)

## Uso 13

- **Quién:** Eirik Rosete
- **Herramienta:** Claude Code (extensión de VS Code), modelo Claude Opus 5.5
- **Para qué:** sustituir las rutas locales de los prompts de este registro por referencias y pedir orientación sobre qué incluir en las capturas. La IA aplicó la sustitución de rutas, marcándola en la nota del principio, y rechazó omitir los prompts de consultas sobre el tema porque el enunciado exige declarar todos los usos
- **Apartado del plan:** Registro de IA
- **Prompt, copiado tal cual:**

  ```text
  Puedes omitir las rutas o simplemente hacer referencias en el registro ia? esto porque de cierta manera estoy dando informacion acerca de la distribucion de los directorios y de cierta manera tambien estan los usuarios de este ordenador y eso es informacion sensible; solo referencia los nombres de los archivos y a que estan dedicados (documentacion-tema-02) por ejemplo.

  Luego, hay ciertos prompts que son solo consultas acerca del tema, entonces no crees que tambien se podrian omitir? lo digo más que nada porque son como parentesis intermedios para comprension de lo que dice el tema y no como tal del ejercicio. Luego, revisa y dime qué debería incluir en las capturas
  ```

- **Qué hicimos con la respuesta:** Tomar en cuenta las limitaciones de uso de IA y tener presente la importancia de un registro completo de la conversación con el asistente, aun cuando entre medias se realizaron consultas breves
- **Evidencia:** `ia/usos-01-14.txt` (exportación de la conversación, uso 13)

## Uso 14

- **Quién:** Eirik Rosete
- **Herramienta:** Claude Code (extensión de VS Code), modelo Claude Opus 5.5
- **Para qué:** preguntar cómo exportar la conversación para usarla como evidencia del registro
- **Apartado del plan:** Registro de IA
- **Prompt, copiado tal cual:**

  ```text
  puedo exportar esta conversación?
  ```

- **Qué hicimos con la respuesta:** Exportar la conversación y colocarla en el registro
- **Evidencia:** `ia/usos-01-14.txt` (exportación de la conversación, uso 14)

## Uso 15

- **Quién:** Eirik Rosete
- **Herramienta:** Claude Code (extensión de VS Code), modelo Claude Opus 5.5
- **Para qué:** sustituir en `ia/usos-01-14.txt` las rutas locales y del repositorio por las referencias de la nota del principio, y actualizar este registro (evidencias y usos 13 a 15). No se modificó ningún otro texto de la conversación
- **Apartado del plan:** Registro de IA
- **Prompt, copiado tal cual:**

  ```text
  Listo, añadi el archivo en [ruta omitida: evidencia-historial]  , crees que puedas encargarte de censurar los directorios y lo que me marcaste? Siempre cumpliendo la normativa
  ```

- **Qué hicimos con la respuesta:** Aceptar la censura y releer el archivo para asegurarnos que no hubieran filtraciones de datos sensibles
- **Evidencia:** El propio archivo de `ia/usos-01-14.txt`