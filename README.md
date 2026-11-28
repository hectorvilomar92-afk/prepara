# prepara
pase de lista 

## Conexión con Appwrite

La aplicación requiere una cuenta de Appwrite y conexión a Internet; ya no ofrece un modo de trabajo sin Appwrite. Las cuentas y calificaciones se consultan y guardan en la base compartida. Debe abrirse desde una dirección `http://` o `https://`; abrir `index.html` directamente como archivo (`file://`) impide que el navegador se comunique con Appwrite.

Para probarla en esta computadora, inicia un servidor estático desde la carpeta del proyecto con `python -m http.server 8765` y abre `http://127.0.0.1:8765/index.html`. En producción, publícala bajo HTTPS y agrega el origen exacto del sitio en Appwrite Console > Settings > Platforms.

## Calificaciones por competencias

La tabla conserva cuatro grupos PC1–PC4, cada uno con P1–P4 y sus recuperaciones (RP1–RP4); cada PC es el promedio de los cuatro períodos y la calificación final es el promedio de PC1–PC4, redondeado al entero más cercano. Cuando hay RP, esa nota reemplaza la nota P del período correspondiente en el promedio.

En cada grupo se puede seleccionar una competencia específica oficial por grado y asignatura, tomada de los registros de grado del MINERD para 1ro–6to. La descripción se carga al seleccionar el código; también se puede elegir **Personalizada** y guardar texto propio en el navegador actual. Las asignaturas optativas no incluidas en el catálogo general deben configurarse como personalizadas. Los datos oficiales se encuentran en `minerd-competencies.js`; sus enlaces de origen se muestran en la sección Calificaciones. Al imprimir, las competencias aparecen en cuatro bloques contiguos; la tabla apaisada reserva espacio para que los nombres de estudiantes y las notas se lean mejor.

Para reutilizar o corregir notas ya guardadas, en **Calificaciones** pulsa **Buscar calificaciones guardadas**, selecciona el grado y la asignatura, y elige **Abrir para corregir**. Se cargan las notas actuales en la tabla; al pulsar **Guardar Notas**, se actualizan esos registros.

## Boletines oficiales y versiones guardadas

En **Boletines**, selecciona grado y estudiante y pulsa **Generar boletín oficial completo**. El sistema usa el PDF original MINERD del grado (1.º–6.º) como fondo y superpone los datos disponibles para producir un PDF de dos páginas listo para imprimir. Los archivos oficiales están en `assets/boletines-oficiales/` y proceden de la publicación de [Educando sobre los boletines de secundaria](https://educando.edu.do/2023/09/boletines-de-calificaciones-del-nivel-secundario/). Las firmas se dejan en blanco para completarlas a mano.

Se rellenan el estudiante, sección, número de orden, ID SIGERD, docente asignado al grado, datos del centro, año escolar, observaciones y calificaciones disponibles. Las notas de recuperación reemplazan la nota del período correspondiente en el boletín; las evaluaciones completiva y extraordinaria se muestran con sus ponderaciones impresas (50/50 y 30/70). La asistencia se calcula por fecha a partir de los pases guardados; si hay varios pases de asignaturas en un mismo día, se cuenta como presente si alguno indica P, T o E, y como ausente sólo si los registros del día indican A.

Completa los datos permanentes del centro en **Admin > Datos del centro educativo**. Se guardan en el navegador actual. Asigna el docente al grado desde la configuración de grados. Para cada estudiante, escribe el ID SIGERD al agregarlo o selecciónalo en **Boletines**; el valor se conserva en Appwrite.

Para habilitar los campos añadidos, actualiza estas tablas/colecciones existentes en Appwrite:

- Estudiantes (`6ae945fa003800d397bd`): atributo opcional `sigerd_id`, String de hasta 50 caracteres.
- Calificaciones (`6ae946bc0013569424af`): atributo opcional `special_score`, Double (Float), para guardar notas de evaluación especial. Si no está creado, las demás calificaciones se guardan si esa nota está vacía; la app avisa que no puede guardar una evaluación especial hasta añadirlo.

Para conservar y buscar versiones históricas, crea en Appwrite una tabla con ID `bulletin_records` dentro de la base configurada en `DB_ID`. Añade estas columnas:

| Columna | Tipo | Obligatoria |
| --- | --- | --- |
| `owner_id` | String (36) | Sí |
| `student_id` | String (36) | Sí |
| `grade_id` | String (36) | Sí |
| `student_name` | String (255) | Sí |
| `grade_name` | String (100) | Sí |
| `school_year` | String (20) | Sí |
| `snapshot` | String (10,000) | Sí |

La app serializa el boletín como JSON dentro de `snapshot` y lo convierte de nuevo al abrir una versión guardada. El logo del centro no se copia al historial porque no forma parte del PDF oficial y puede ocupar decenas de miles de caracteres. Los datos pequeños se guardan directamente; los grandes se comprimen en gzip y, si aún superan el límite, se suben como archivo JSON a Appwrite Storage. En ese caso `snapshot` contiene `storage:<fileId>`. Los boletines guardados anteriormente como JSON o gzip siguen siendo compatibles.

Crea un bucket de Storage con ID `bulletin-snapshots`, activa la seguridad por archivo y permite **Create** a usuarios autenticados. No habilites lectura pública ni permisos globales de lectura: cada archivo recibe lectura y eliminación solo para la cuenta que lo guardó. En `bulletin_records`, activa RLS, permite **Create** a usuarios autenticados y no otorgues lectura global; la app asigna lectura por fila al dueño. No uses el rol `Any`.

Cada guardado crea una nueva versión histórica, que conserva los datos y calificaciones tal como estaban al generarse. Después, usa **Guardar boletín** y **Buscar boletines guardados** desde la sección Boletines.
