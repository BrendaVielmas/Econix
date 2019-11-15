# **Open: Creando una Red Social Accesible**

En este nuevo proyecto el reto es crear una red social en la que podamos **leer y escribir datos.**
Y en dónde:

* Aplicaremos y profundizaremos todo lo que aprendimos en el proyecto anterior.
* Entenderemos las necesidades de los usuarios para los que crearemos el producto y
 que ayudaremos a resolver.
* Poner en juego nuestra creatividad para generar ideas que lleven a una solución
 original y valiosa del problema.
* Contar con el apoyo de nuestras compañeras, trabajaremos en equipo buscando
 _feedback_ constante.
* Definir como crear la estructura de nuestra propia data y de qué forma mostrarla en
 el producto.

Elegimos atender el problema de accesibilidad, y orientar los esfuerzos de este proyecto al desarrollo de una red social para personas con daltonismo y debilidad visual.

# **¿Cómo desarrollar tecnologías accesibles?**

Nos basamos en el Web Content Accesibility Guideliness (WACG), que es una guía desarrollada por el Web Accesibility Initiative (WAI), el cual a su vez es un grupo de trabajo dentro del W3C (World Wide Web Consortium).

La WACG se revisa constantemente, en la actualidad está vigente la versión 2.1.

La guía WACG indica que, para ser accesibles, los contenidos web deben ser:

  * PERCEPTIBLES
  * OPERABLES,
  * ENTENDIBLES,
  * ROBUSTOS.

El documento que hemos creado se puede consultar en https://github.com/PaulinaFranco/GDL003-social-network/wiki/Gu%C3%ADa-de-accesibilidad-para-la-red-social-Open


## **Preámbulo**

Las redes sociales son sitios de Internet formados por comunidades de individuos con intereses o actividades en común (como amistad, parentesco, trabajo) y que permiten el contacto entre estos, de manera que se puedan comunicar e intercambiar información.

Nosotras conocimos las redes sociales casi a la par que aprendimos a usar el internet, desde mensajearnos por messenger, compartir imágenes y publicaciones con metroflog, migrar a facebook y poder encontrar amigos y familiares, hasta las más recientes instagram, twitter, Snapchat.

Pero, ¿Te imaginas no poder usar "Facebook", "Twiter" o "Instagram" porque no puedes ver? ¿Te imaginas poder verlos y que no los puedas disfrutar como el resto de las personas?

Según el universal aproximadamente 2 millones de mexicanos padecen daltonismo. Datos del INEGI destacan que el 7% de la población mexicana padece debilidad visual y el 1.5% ceguera.

Con la información anterior decidimos abordar la problemática creando una red social especial para estas personas, en dónde la interfaz además de ser amigable con personas daltónicas y débiles visuales (o sus familiares) pueda ser escalable a ser accesible a personas con ceguera parcial y total. En las reuniones de equipo y confirmándolo con las encuestas realizadas coincidimos en que es una necesidad y un derecho de todas las personas tener acceso a las redes sociales y así comunicarse y sentirse integrados en la sociedad.

Lo primero que hicimos fue buscar usuarios con estas características y por medio de una encuesta les pedimos más información acerca de su uso de redes sociales y las problemáticas que abordan, así como su opinión acerca de qué mejoraría su experiencia.

![encuestaVictor1](https://i.ibb.co/RBqHcWF/encuestas-V.png)


Después buscamos documentarnos en accesibilidad para que nuestra red social realmente fuera para daltónicos y débiles visuales y cómo hacer esto posible.

Definimos a nuestro usuario y a nuestro producto, y creamos una lista de "Historias de usuario" para tener claro que funciones debería poder cumplir nuestra interfaz.

Lo siguiente fue crear un prototipo de baja fidelidad y testearlo con distintos usuarios

**Prototipo de baja fidelidad**
![prototipoDeBaja](https://i.ibb.co/K9Gz7mF/Whats-App-Image-2019-07-19-at-4-35-00-PM.jpg)

A la par de esto estuvimos investigando la parte técnica de como crear una red social como tal,
(continuará...)

## **Definición del producto**

**OpenDoors**

Se le dió su nombre por el libro de Hellen Keller
Es una red social pensada en daltónicos y personas con debilidad visual para hacer más sencilla su comunicación e interacción en línea.

## **Definición de usuario**

Personas con daltonismo y debilidad visual que busquen estar conectadas de una forma más accesible para ellos.

## **Historias de usuario**

1.- El usuario requiere poder registrarse en la red social a través de un formulario dando su nombre su correo y su contraseña.

2.- El usuario requiere que su contraseña sea secreta

3.- El usuario requiere que una vez que esté registrado poder ingresar a la red social con su usuario y contraseña.

4.- El usuario quiere registrarse e ingresar con su cuenta facebook.

5.- El usuario quiere registrarse e ingresar con su cuenta gmail.

6.- El usuario requiere poder cerrar sesión de su cuenta.

7.- El usuario quiere poder hacer publicaciones en su muro.

8.- El usuario requiere poder editar un post ya publicado.

9.- El usuario requiere que se guarde la edición de su post.

10.- El usuario requiere que al refrescar la página se visualice el post editado.

11.- El usuario quiere personalizar la privacidad de sus publicaciones como públicas o privadas.

12.- El usuario quiere poder eliminar un publicación de su muro.

13.- El usuario quiere poder ver las publicaciones de otros usuarios en el muro.

14.- El usuario desea poder interactuar con las publicaciones de otros usuarios a través de likes.

15.- El usuario desea ver un contador de sus likes y los likes que reciben otras publicaciones





## **Instrucciones**

## **Interfaz de usuario (UI)**
La interfaz del usuario en la versión 1.0 permite:

#### Creación de cuenta (sign up)

* [ ] Permite crear cuenta.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

#### Inicio de sesión (sign in)

* [ ] Permite iniciar sesión.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

#### Muro (wall/feed)

* [ ] Muestra _muro_, o lista de publicaciones.
* [ ] Permite hacer nuevas publicaciones.
* [ ] Permite eliminar publicaciones.
* [ ] Pide confirmación antes de borrar publicación.
* [ ] Permite editar publicación en el mismo lugar (in place).
* [ ] Permite filtrar publicaciones por público/privado.
* [ ] Permite marcar publicaciones como _gustados_ (like, corazón, estrella,
  etc...).
* [ ] Permite ver cuántas marcas, likes, estrellas, corazones o lo que se haya
  elegido, ha recibido una publicación.

## **Scripts / Archivos**

Este proyecto contiene los siguentes archivos.

README.md: Explica cómo acceder y ejecutar la aplicación a travéz de la liga. Así como una introducción a la aplicación, su funcionalidad y decisiones de diseño.

src/index.html: Este archivo contiene el markup (HTML) e incluye el enlace al CSS y JavaScript necesario.

src/data.js:


src/main.js:

test/:

///////////////////////////////////////////////////////////////////////////////////////////////Esto lo dejé para ir viendo que nos falta...

## Checklist

### General

* [ ] Producto final sigue los lineamientos del diseño.

### `README.md`

* [ ] Definición del producto
* [ ] Resumen de entrevistas con usuarios.
* [ ] Link/screenshots prototipo de baja fidelidad.
* [ ] Conclusiones de pruebas con el producto en HTML.

### Pruebas / tests

* [ ] Pruebas unitarios cubren un mínimo del 70% de statements, functions,
  lines, y branches.
* [ ] Pasa tests (y linters) (`npm test`).

### Creación de cuenta (sign up)

* [ ] Permite crear cuenta.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Inicio de sesión (sign in)

* [ ] Permite iniciar sesión.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Muro (wall/feed)

* [ ] Muestra _muro_, o lista de publicaciones.
* [ ] Permite hacer nuevas publicaciones.
* [ ] Permite eliminar publicaciones.
* [ ] Pide confirmación antes de borrar publicación.
* [ ] Permite editar publicación en el mismo lugar (in place).
* [ ] Permite filtrar publicaciones por público/privado.
* [ ] Permite marcar publicaciones como _gustados_ (like, corazón, estrella,
  etc...).
* [ ] Permite ver cuántas marcas, likes, estrellas, corazones o lo que se haya
  elegido, ha recibido una publicación.

### Hacker Edition

* [ ] Permite agregar amigos.
* [ ] Permite eliminar amigos.
* [ ] Permite compartir publicación (en twitter esto es retwittear, en facebook
  es compartir).
* [ ] Permite comentar o responder una publicación.
* [ ] Permite editar perfil.
* [ ] Permite ver perfil o resumen desde el _muro_ o lista de publicaciones.
* [ ] Permite ver cuántas marcas, likes, estrellas, corazones o lo que se haya
  elegido, ha recibido una publicación.
* [ ] Single Page Application (Incluye refactorización)
