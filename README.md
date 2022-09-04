![Points badge](../../blob/badges/.github/badges/points.svg)

![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)
>Manhattan Bridge, New York, United States <span>Photo by <a href="https://unsplash.com/@impatrickt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Patrick Tomasso</a> on <a href="https://unsplash.com/s/photos/city?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

# Ejercicio: Encapsulamiento

El objetivo de este ejercicio poner en práctica el principio y proceso de encapsulamiento de clases.

## Requerimientos funcionales

1. (45 Puntos) Programar la clase `Student`. Deberá estar encapsulada e incluir los siguientes:
   - (15 puntos) Atributos:
     - `String name (RW)` el nombre completo del estudiante.
     - `Number id (W)` número de cuenta del estudiante
     - `Date birthDate (R)` fecha de nacimiento del estudiante
   - Métodos
     - (10 puntos) `constructor()` recibe valores iniciales para `name`, `id`, y `birthDate`.  
     - (10 puntos) `setName(name)` actualiza el valor de `name` del estudiante. Al actualizarlo deberá asegurarse de que la primer letra de cada palabra del `name` debe ser mayúscula, el resto minúsculas. Por ejemplo: Juan Pérez González.
     - (10 puntos) `getBirthDate()` regresa la `birthDate` con el siguiente formato:  `25/Feb/21`
  
2. (55 Puntos) Programar la clase `Grade`. Deberá estar encapsulada e incluir los siguientes:
   - (15 puntos) Atributos:
     - `String subject (W)` el nombre de la materia.
     - `Number partials (R)` número de periodos parciales
     - `Number[] grades (-)` calificaciones de los periodos parciales
   - Métodos
     - (10 puntos) `constructor()` recibe valores iniciales para `subject` y `partials`  
     - (10 puntos) `setGrade(partial, grade)` establece la calificación para el parcial indicado. Regresa `true` si la calificación se actualizó o `false` si no se actualizó.
     - (10 puntos) `getAverage()` regresa la el promedio de las calificaciones parciales. El promedio se calcula solamente tomando en cuenta los parciales que tienen registrada una calificación`
     - (10 puntos) `getAsString()` regresa la calificación promedio de la materia en un formato como el siguiente: Matemáticas 9
  
## Requerimientos no funcionales

- Las clases, métodos y atributos deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- Se deberán utilizar las convenciones de estilo para clases, métodos, atributos, parámetros y variables
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola

## Entregable

- Código fuente en este repositorio
  
## Evaluación

- Para que el examen sea considerado como válido, el repositorio deberá tener por lo menos 1 commit por cada método.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y tendrán calificación cero
