# Casos de la actividad A02

Material de partida de los dos casos. Cada grupo trabaja **solo el suyo**.

| Grupo | Caso | Carpeta |
|---|---|---|
| Grupo 1 | Supuesta sustracción de datos de contribuyentes atribuida al Ministerio de Hacienda (febrero de 2026) | [hacienda/](hacienda/README.md) |
| Grupo 2 | Filtración de datos de clientes de Naturgy a través de un proveedor y posterior oferta de venta (mayo y septiembre de 2026) | [naturgy/](naturgy/README.md) |

## Qué contiene cada caso

| Archivo | Contenido |
|---|---|
| `README.md` | Presentación breve del caso |
| `hechos.csv` | Afirmaciones publicadas sobre el caso, cada una atribuida a quien la hace y a la fuente donde aparece |
| `fuentes.csv` | Las fuentes de las que proceden esas afirmaciones |

## Diccionario de datos

### `hechos.csv`

| Columna | Contenido |
|---|---|
| `id` | Identificador de la afirmación: `H01`, `H02`… en Hacienda; `N01`, `N02`… en Naturgy |
| `fecha` | Fecha de publicación o del hecho, según la fuente |
| `quien_lo_afirma` | Quién hace la afirmación. Si un medio reproduce lo que dice otro, se indican ambos |
| `contenido` | La afirmación, redactada sin valoraciones añadidas |
| `fuente_ref` | Fuente donde aparece, con el identificador de `fuentes.csv` |

Cada fila recoge **lo que alguien dice**, no lo que ha ocurrido.

### `fuentes.csv`

| Columna | Contenido |
|---|---|
| `fuente_ref` | Identificador de la fuente: `F01`, `F02`… |
| `organizacion` | Quién publica |
| `titulo` | Título tal como se publicó |
| `fecha_publicacion` | Fecha de publicación |
| `nota` | Observación sobre la fuente, cuando la hay |
| `url` | Dirección de la fuente |

## Cómo usar el material

- Lee las fuentes, enlazadas en el README de cada caso: las filas de `hechos.csv` las resumen, pero no las sustituyen.
- Si una fila y su fuente no coinciden, prevalece la fuente; señálalo en el plan.
- Cita siempre con identificador: `(H05)`, `(N09)`, `(F04)`.
- Este es el único material que se utiliza en la actividad.
