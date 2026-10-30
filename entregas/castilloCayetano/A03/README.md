# A03 · Huella pública

## Estudiante

- Nombre: Cayetano Castillo Ruiz
- Carpeta personal: entregas/castilloCayetano/A03/
- Modalidad: Modalidad A Organización
- Objetivo: Entidad Pública Empresarial Renfe-Operadora (Grupo Renfe)
- ¿Es el objetivo de tu proyecto final?: No
- Punto de partida (dominio principal o identificadores propios): renfe.com
- Periodo de obtención, con zona horaria: 30/10/2026 UTC+1 (Madrid)

---

## 1. Resumen ejecutivo

> **Qué debe contener.** Se escribe al final. Como máximo 250 palabras. Un párrafo que el destinatario pueda leer sin el resto del informe y una tabla que responda cada pregunta del apartado 2.3 con su nivel de confianza y sus referencias.

| Pregunta | Respuesta breve | Confianza | Referencias |
|---|---|---|---|
| | | | |

---

## 2. Encargo

### 2.1 Objetivo elegido

> **Qué debe contener.** La modalidad, por qué has elegido el objetivo, si coincide con el de tu proyecto final y cómo has comprobado que hay material suficiente para la A03 y la A04: consulta, fecha y resultado. Comprueba uno por uno los requisitos de tu modalidad en el apartado 3 del enunciado.

### 2.2 Requerimiento

| Componente | Contenido |
|---|---|
| Destinatario |Responsable de Seguridad de la Información (CISO / Dirección de Ciberseguridad) de Renfe. |
| Decisión |Determinar qué activos, canales web y relaciones institucionales expuestas pueden ser aprovechados por un actor hostil para preparar ataques de ingeniería social, suplantación o reconocimiento previo, y definir medidas defensivas de mitigación y reducción de superficie. |
| Objeto |La huella pública digital e institucional de Renfe-Operadora accesible mediante fuentes abiertas (OSINT). |
| Horizonte |Histórico consolidado y estado actual accesible en índices públicos. |
| Alcance |Dominios y subdominios corporativos públicos vinculados a renfe.com, perfiles oficiales en redes y registros mercantiles/oficiales de la entidad matriz y sus sociedades operativas. |
| Exclusiones |Datos personales de viajeros, tripulación y empleados; materiales o foros relacionados con incidentes operativos recientes; escaneos activos de puertos, vulnerabilidades o servicios. |
| Producto |Informe técnico de huella pública con registro trazable de obtención, grafo de entidades y matriz de perspectiva del atacante. |

**Requerimiento en una frase:**
Evaluar la exposición exterior de los canales web, la estructura societaria y las relaciones de Renfe-Operadora mediante fuentes abiertas para identificar vectores de suplantación y reconocimiento previo antes de que puedan ser explotados por terceros.

### 2.3 Preguntas de inteligencia

| Prioridad | Pregunta | Huella que cubre | Te ayuda a decidir |
|---:|---|---|---|
|1 |¿Cuál es la estructura societaria oficial de Renfe, qué filiales la componen y qué administradores o representantes figuran formalmente vinculados a la marca? |Corporativa / Institucional |Qué entidades jurídicas y marcas derivadas requieren supervisión de marca defensiva y monitorización contra registros fraudulentos. |
|2 |¿Qué dominios, subdominios y canales digitales oficiales tiene expuestos Renfe, y qué servicios obsoletos o desatendidos siguen indexados o archivados? |Canales |Qué portales, portales de empleo/proveedores o entornos legacy deben ser saneados, redirigidos o retirados de la visibilidad pública. |
|3 |¿Qué vínculos institucionales, proveedores tecnológicos o plataformas de terceros son reconocibles a través de su huella y documentos públicos? |Relaciones |Dónde reforzar medidas contra vectores de suplantación de identidad corporativa (phishing / BEC) o ataques a la cadena de suministro. |

---

## 3. Plan de obtención

### 3.1 Herramientas por pregunta

| Pregunta | Herramienta | Alternativa descartada y motivo | Entrada | Qué expone y a quién | Resultado esperado |
|---|---|---|---|---|---|
|P1|BORME / OpenCorporates |Informes de solvencia de pago (Axesor, Informa): descartados para evitar costes y uso de plataformas con autenticación invasiva. |"Renfe-Operadora", "Renfe Viajeros" |Envía la cadena de búsqueda a los servidores de OpenCorporates/Boletín Oficial. No interactúa con Renfe. |Denominación social exacta, CIF, filiales formalmente constituidas e historial de publicaciones societarias. |
|P2|Google con operadores |Motores de indexación pasiva de certificados (crt.sh): descartados en esta fase porque el dorking permite identificar directamente contenidos y metadatos accesibles. |site:renfe.com -www, site:renfe.com filetype:pdf, site:renfe.com inurl:login |Envía las directivas a Google. No contacta con los servidores de Renfe. |Inventario de subdominios, áreas de acceso restringido públicas y documentos expuestos. |
|P2|Wayback Machine |Archive.today: descartado por menor volumen y menor granularidad histórica en portales corporativos españoles. |[https://www.renfe.com](https://www.renfe.com) |Envía la URL consultada a Internet Archive. No genera peticiones al objetivo. |Evolución de portales antiguos, subdominios en desuso o cambios estructurales en la exposición de canales. |
|P3|Maltego Community |SpiderFoot / Recon-ng: descartados para asegurar visualización clara de entidades y grafos conformes a la rúbrica sin lanzar sondas activas. |Dominio renfe.com y nombres de filiales |Consultas DNS públicas pasivas y llamadas API a transformaciones pasivas preconfiguradas. |Grafo con entidades categorizadas (dominios, filiales, resoluciones de nombres, correos de contacto público). |
|P3|Google Lens / TinEye (Opcional) |Intelligence X: descartada en esta fase para evitar el riesgo de consultar filtraciones o credenciales restringidas por las normas de la práctica. |Favicon corporativo o logotipos de campañas específicas de Renfe |Envía la imagen a los servidores del buscador. No toca al objetivo. |Comprobación de sitios externos o campañas que reutilicen identidades visuales oficiales. |

### 3.2 Herramientas que no se usan

| Herramienta | Motivo |
|---|---|
|Intelligence X / Serus |Descartadas para garantizar el cumplimiento estricto del límite del apartado 3.1 (prohibición de buscar credenciales, filtraciones o datos de incidentes). |
|OpenSanctions |Descartada por no ajustarse a las preguntas de inteligencia formuladas: Renfe es un operador estatal regulado sin alertas en listas internacionales de sanciones de cumplimiento directo para esta auditoría. |
|Babel Street / Hunchly |Descartadas por requerir licencias comerciales de pago o no aplicar directamente a la modalidad de huella organizativa abierta requerida en la práctica. |

### 3.3 Configuración y seguridad de la operación

**Modalidad B · Fecha y hora de cierre del plan:** (Modalidad tipo A)

**Identidad de investigación:** Navegación en perfil de análisis sin sesión iniciada en cuentas personales (Google Sandbox / perfil aislado).

**Navegador y perfil:** Firefox / Brave en ventana privada, con bloqueo de telemetría y geolocalización desactivada. Extensiones de protección de cabeceras habilitadas.

**Carpeta de trabajo:** Entorno local organizado fuera del árbol de Git (workspace_a03/evidencias/), asegurando que solo los archivos anonimizados y procesados se copien a entregas/[cayetanoCastillo]/A03/evidencias/.
---

## 4. Obtención

### 4.1 Registro de obtención

> **Qué debe contener.** Una fila por consulta o acción, incluidos los errores, los resultados vacíos y las restricciones. Fecha y hora en formato `AAAA-MM-DD HH:MM`, con la zona horaria indicada en la cabecera.

| ID | Herramienta | Consulta o acción exacta | Fecha y hora | Resultado | Límite | Evidencia |
|---|---|---|---|---|---|---|
| OBT-01 | | | | | | |

### 4.2 Resultados por herramienta

> **Qué debe contener.** Para Google, Wayback Machine, la fuente societaria, Maltego y la herramienta opcional: qué pregunta respondía, qué obtuviste, con referencias, y qué límite tiene.

### 4.3 Revisión de la elección

| Pregunta | Herramienta prevista | Herramienta utilizada | Evidencia obtenida | ¿Resuelve la pregunta? | Cambio justificado |
|---|---|---|---|---|---|
| | | | | | |

---

## 5. Análisis de la huella

### 5.1 Ficha del objetivo

> **Qué debe contener.** Es el punto de partida de la A04. Una fila por campo:
>
> - modalidad A: nombre legal, marcas, filiales o entidades relacionadas, dominios oficiales, canales y perfiles oficiales, proveedores observados;
> - modalidad B: nombre y alias, cuentas y perfiles, correos públicos, relaciones profesionales o académicas, webs y dominios, documentos publicados.

| Campo | Dato | Referencia | Fecha del dato | Precaución |
|---|---|---|---|---|
| | | | | |

### 5.2 Huella por dimensiones

> **Qué debe contener.** Para cada huella, dos partes separadas: **Observado**, con referencias, y **Valoración**, con fiabilidad de la fuente, credibilidad de la información y lo que falta.

#### Corporativa o profesional

#### De canales

#### De relaciones

### 5.3 Grafo de relaciones

> **Qué debe contener.** La imagen del grafo exportado desde Maltego, enlazada desde `evidencias/`, y una leyenda que distinga relaciones observadas, declaradas y pendientes, cada una con su referencia.

| Relación | Tipo | Referencia |
|---|---|---|
| | | |

### 5.4 Valoración de hallazgos clave

| Hallazgo | Referencias | Fiabilidad de la fuente | Credibilidad de la información | Hecho o inferencia | Contraste independiente |
|---|---|---|---|---|---|
| | | | | | |

---

## 6. Perspectiva del atacante

> **Qué debe contener.** Al menos tres filas, cada una a partir de un hallazgo propio. Describe el riesgo sin instrucciones operativas.

| Información visible | Referencia | Cómo podría aprovecharla un atacante | A qué afectaría | Medida defensiva | Prioridad |
|---|---|---|---|---|---|
| | | | | | |

---

## 7. Limitaciones, datos descartados e incidencias

> **Qué debe contener.** Preguntas que no has podido responder y por qué. Datos que has descartado por quedar fuera del alcance, incluidos los homónimos y los datos de terceros. Incidencias, solo con su categoría y su fila `OBT`, e indicación de si avisaste por el canal privado. Si no hubo incidencias, escríbelo.

---

## 8. Índice de evidencias

| Evidencia | Qué muestra | Fila del registro | Qué se ha ocultado |
|---|---|---|---|
| | | | |

---

## 9. Uso de inteligencia artificial

Ver [registro-ia.md](registro-ia.md).

---

## Comprobación

- [ ] El objetivo cumple los requisitos de mi modalidad y no investigo a ninguna otra persona.
- [ ] Cerré los apartados 2 y 3 antes de la obtención: *commit* en la modalidad A, fecha de cierre en la modalidad B.
- [ ] Cada afirmación lleva su referencia `OBT` y la he comprobado.
- [ ] Las capturas están recortadas y anonimizadas.
- [ ] Entrego antes del viernes 30 de octubre a las 23:59.
- [ ] Modalidad A: solo he modificado `entregas/apellidoNombre/A03/`. Modalidad B: nada está en el repositorio del curso.
