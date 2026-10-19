# Ejemplo docente · Operación Faro

Este material docente contiene un informe de inteligencia **basado en un caso real, censurado y adaptado para su uso en clase**. Se ha excluido la información sensible y se han sustituido los nombres, las fechas, los identificadores y las cifras por datos de prueba con ayuda de IA. El expediente publicado contiene evidencias simuladas; no reproduce documentación original ni permite utilizar sus datos para atribuir hechos a una organización o persona real. Las condiciones de elaboración se explican en el [anexo de autoría, adaptación y uso de IA](informe.md#anexo-e-autoría-adaptación-y-uso-de-ia).

Las vulnerabilidades y las referencias técnicas citadas sí son reales. Que figuren aquí no significa que se hayan explotado en el caso real de origen. Las señales de explotación, los accesos y sus relaciones se han creado expresamente para este expediente y se identifican como material simulado.

| Documento | Uso |
|---|---|
| [Informe completo](informe.md) | Ejemplo de análisis y comunicación con la estructura de la plantilla |
| [Expediente simulado](expediente.md) | Fuentes E-01 a E-32, su alcance y sus limitaciones |
| [Cronología](datos/cronologia.csv) | Fechas normalizadas en UTC |
| [Inventario](datos/inventario.csv) | Activos y relaciones docentes |
| [Accesos y custodia de la VPN](datos/vpn.csv) | Creación, uso y entrega de una credencial ficticia |
| [Estimación de impacto](datos/impacto.csv) | Supuestos económicos del ejemplo, sin precios de mercado actuales |
| [Corpus OSINT y SOCMINT](datos/osint-socmint.csv) | Organización, canales, publicaciones y una imagen reutilizada; la fecha de referencia se interpreta según el tipo de pieza y no siempre es la de publicación |
| [Relaciones de infraestructura](datos/infraestructura.csv) | Dominio, DNS, rangos, certificados e índice HTTPS simulados |
| [Datos en mensajería](datos/datos-en-mensajeria.csv) | Categorías y riesgos; sin valores personales ni contraseñas |
| [Verificación local](verificar-expediente.mjs) | Cálculos de tiempos e impacto a partir de los CSV, sin consultas de red |
| [Comprobaciones calculadas](comprobaciones.txt) | Salida del script local |
| [SHA-256](SHA256SUMS.txt) y [MD5](MD5SUMS.txt) | Dos huellas de la misma versión de cada archivo distribuido |
| [Gestor de huellas](gestionar-huellas.mjs) | Verifica ambos listados o los regenera tras revisar los cambios |

El caso se sitúa entre el 4 y el 22 de mayo de 2026. El informe se cierra el día 22 a las 12:00 UTC. Las referencias técnicas se comprobaron para preparar este material el 19 de octubre de 2026. Se trata de una reconstrucción docente posterior: esas fechas de consulta no se presentan como consultas realizadas en mayo.

La organización ficticia se llama **Red Internacional de Formación y Servicios Boreamar (RIFSB)**. Sus sedes, portales de venta y sistemas de gestión sirven para analizar compromisos de webs, borrado de repositorios, manipulación del consumo de eventos, extorsión y una atribución personal precipitada.

El informe está publicado en Markdown, con índice navegable. Es también el formato de entrega del estudiante: la extensión se cuenta en palabras, sin exigir paginación ni PDF, según los [requisitos del proyecto](../03-informe.md). El [contador local](../contar-palabras.mjs) registra **8.708 palabras de cuerpo** y **599 de resumen ejecutivo**, incluidas en el cuerpo. Se excluyen portada, índice, referencias y anexos.

Los resúmenes de logs del expediente son suficientes para practicar el razonamiento, pero no equivalen a imágenes forenses, volcados completos ni una cadena de custodia pericial. No contienen cargas de explotación, claves, credenciales, datos de clientes ni direcciones de sistemas reales. No hay que consultar los dominios `.example` ni conectarse a las IP reservadas del caso.

La revisión del modelo debe contrastar las afirmaciones del informe con las evidencias E-01 a E-32 del expediente. En el proyecto individual, cada conclusión deberá justificarse con las fuentes del caso estudiado y sus limitaciones; las conclusiones del modelo no pueden utilizarse como resultados de esa investigación.

## Verificación de los archivos

Desde esta carpeta, con Node.js instalado:

```powershell
node verificar-expediente.mjs
node gestionar-huellas.mjs --verificar
```

El primer comando comprueba los cálculos y las referencias de los CSV. El segundo calcula SHA-256 y MD5 sobre los mismos bytes y contrasta los dos listados completos, incluyendo la relación de archivos. Se excluyen únicamente los dos manifiestos, para evitar una dependencia circular. Un archivo añadido, eliminado o modificado hace que la verificación falle.

Solo quien mantenga el material debe usar `node gestionar-huellas.mjs --generar`, después de revisar y aceptar los cambios. Regenerar las huellas sin esa revisión eliminaría la referencia anterior. Si cambian los datos, debe actualizar primero `comprobaciones.txt` ejecutando `node verificar-expediente.mjs | Set-Content -Encoding utf8 comprobaciones.txt` y después regenerar ambos listados.

En este proyecto se piden dos huellas. SHA-256 es la referencia principal; MD5 permite una comparación complementaria, pero tiene limitaciones de seguridad frente a colisiones, descritas en el [RFC 6151](https://www.rfc-editor.org/rfc/rfc6151). Dos algoritmos no sustituyen la conservación segura de la referencia ni demuestran que los hechos narrados sean auténticos.

[Volver al proyecto](../README.md) · [Plantilla obligatoria](../plantillas/plantilla-informe-inteligencia.md)
