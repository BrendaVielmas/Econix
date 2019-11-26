# Econix

## Preámbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
sociales han invadido nuestras vidas. Las amamos y/u odiamos, y muchos no podemos vivir sin ellas.

Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo,
en una ronda de financiamiento con inversionistas, se presentó una red social
para químicos en la que los usuarios podían publicar artículos sobre sus
investigaciones, comentar en los artículos de sus colegas, y filtrar artículos
de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo
más comentado.

## Introducción

Econix es una red social sobre el medio ambiente en la cual se podrá dialogar, compartir y recomendar productos acerca de el mundo ecológico.
La lógica del proyecto está implementada completamente en JavaScript (ES6),
HTML y CSS. Para este proyecto no se utilizaron frameworks de JS.

### Historias de usuario

#### Creación de cuenta de usuario e inicio de sesión

* Login con Firebase:
  - Para el login y las publicaciones en el muro se utilizó [Firebase](https://firebase.google.com/products/database/)
  - Autenticación con Facebook y/o Google y/o Email.
* Validaciones:
  - No hay usuarios repetidos.
  - La cuenta de usuario es un correo electrónico válido.
  - Lo que se escribe en el campo (_input_) de contraseña es secreto.
* Comportamiento:
  - Al enviarse un formulario de registro o inicio de sesión, se valida.
  - En caso haya errores, el sistema muestra mensajes de error para
    ayudar al usuario a corregirlos.
  - La aplicación solo permite el acceso a usuarios con cuentas válidas.
  - Al recargar la aplicación, se verifica si el usuario está
    logueado antes de mostrarle el contenido privado.

#### Muro/timeline

* Validaciones:
  - Al apretar el botón de publicar, se valida que existe contenido en el input.
* Comportamiento:
  - Publicar un post.
  - Poner like a una publicación.
  - Llevar un conteo de los likes.
  - Eliminar un post específico.
  - Pedir confirmación antes de eliminar un post.
  - Al darle click en el botón editar, cambia el texto por un input que
    permite editar el texto y cambia el link por guardar.
  - Al darle guardar cambia de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página se pueden ver los textos editados

#### Extras

* La aplicación no deja hacer publicaciones vacías de ningun tipo.
* El usuario puede agregar, editar y eliminar contenido de la red
  social.
* El usuario puede definir la privacidad de lo que publica.
* Al editar contenido, el contenido editado se verá automáticamente,
  inmediatamente después de guardar.
* Al recargar la página se pueden ver los contenidos editados.

## Documentación

* [_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Firebase](https://firebase.google.com/).
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)
