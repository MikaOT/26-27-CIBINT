# Entregas

Esta carpeta recibe las actividades publicables mediante *pull request*. Cada estudiante trabaja en un *fork* personal y modifica únicamente su propia carpeta.

El **proyecto final** se entrega aquí mediante pull request, dentro de `entregas/apellidoNombre/PF/`, con las subcarpetas `TEMA`, `P1`, `P2`, `P3`, `FINAL` y `PRESENTACION`. Cada hito tiene su propio pull request. **La excepción son las investigaciones sobre uno mismo y los casos personales autorizados:** su propuesta y todas sus entregas utilizan el canal privado previamente acordado, sin publicar archivos en el fork público. Consulta las [instrucciones del proyecto](../proyecto-final/02-proceso-y-entregas.md#procedimiento-de-entrega).

## Nombre de la carpeta personal

Formato:

```text
apellidoNombre
```

Ejemplos:

| Nombre | Carpeta |
|---|---|
| María García | `garciaMaria` |
| Daniel Pérez Gómez | `perezDaniel` |
| María García, si ya existe `garciaMaria` | `garciaLopezMaria` |

Reglas:

- primer apellido seguido del nombre;
- sin espacios, tildes, guiones ni caracteres especiales;
- apellido en minúscula y nombre iniciado en mayúscula;
- se añade el segundo apellido solo para resolver coincidencias;
- la misma carpeta se utiliza durante todo el curso.

## Una carpeta por actividad

```text
entregas/
└── garciaMaria/
    ├── A01/
    │   └── README.md
    ├── A02/
    │   ├── README.md
    │   └── diagrama.puml
    └── PF/
        ├── README.md
        ├── TEMA/
        ├── P1/
        ├── P2/
        ├── P3/
        ├── FINAL/
        └── PRESENTACION/
```

El nombre de la actividad debe coincidir exactamente con el código de su enunciado. No se agrupan varias actividades en una misma carpeta.

## Qué puede modificarse

| Ruta | Permiso del estudiante |
|---|---|
| `entregas/apellidoNombre/**` | Sí, dentro de su propia carpeta |
| `entregas/grupos/CODIGO/grupoN/**` | Solo el portavoz de ese grupo, en las actividades en grupo |
| `entregas/otraPersona/**` | No |
| `entregas/grupos/CODIGO/otroGrupo/**` | No |
| Cualquier otra ruta del repositorio | No |

En las actividades individuales, un *pull request* que contenga cambios fuera de la carpeta personal deberá corregirse antes de su revisión. En las actividades en grupo se aplica una regla más estricta, descrita en el apartado siguiente.

## Actividades en grupo

Las entregas en grupo se organizan en [`entregas/grupos/`](grupos/README.md), con una carpeta por actividad y, dentro, una por grupo:

```text
entregas/grupos/
└── A02/
    ├── grupo1/
    └── grupo2/
```

Cuando un enunciado indique que la actividad es en grupo:

- las carpetas de los grupos **se crearán previamente**, con los archivos de partida que indique el enunciado;
- cada grupo trabaja **solo** dentro de su carpeta;
- **solo el portavoz** abre el *pull request*, desde su propio *fork*;
- el resto de miembros deja un comentario en ese *pull request* indicando que ha revisado la entrega y que está conforme;
- ningún otro miembro abre un *pull request* para la misma actividad.

> **Si el *pull request* de un grupo modifica, añade o elimina cualquier archivo fuera de la carpeta de ese grupo, la actividad no se evalúa para el grupo.**

## Contenido mínimo

Cada entrega tendrá un `README.md` con:

- identificación de la actividad;
- respuesta o enlace a los archivos solicitados;
- fuentes y fecha de consulta cuando corresponda;
- decisiones o limitaciones relevantes;
- declaración de colaboración y uso de inteligencia artificial exigida por el enunciado.

La [plantilla de entrega](../plantillas/README-entrega.md) sirve como punto de partida. El enunciado de la actividad siempre prevalece sobre la plantilla general.

## Información publicable

El repositorio es público. Solo se admite información ficticia, reservada para documentación, abiertamente publicable o correctamente anonimizada.

No se suben:

- datos personales innecesarios;
- credenciales, secretos, tokens o claves;
- volcados, filtraciones o evidencias de acceso restringido;
- capturas que expongan identificadores o sesiones;
- proyectos personales autorizados para entrega privada e informes que el enunciado derive a un canal privado.

## Flujo de entrega

1. Actualizar el *fork* desde el repositorio original.
2. Crear una rama para una única actividad.
3. Añadir o modificar solo `entregas/apellidoNombre/CODIGO/`.
4. Comprobar todos los archivos y datos antes de publicar.
5. Abrir el *pull request* con el título solicitado.
6. Mantener la misma rama si se piden correcciones.
