**JAVA-SCRIPT**
<p> <li>¿Qué es y cual es el funcionamiento del lenguaje de programación Java-Script y sus principales estructuras? </li> </p>

**OBJETIVO GENERAL**
<p> Investigar los usos y estructuras principales de Javascript, por medio de la abstracción de información, para así poder conocer los usos que este tiene y posteriormente dar una explicación a la clase </p>

**OBJETIVOS ESPECÍFICOS**
<p> <li>Identificar documentos recientes que tengan información acerca del lenguaje java script, para de esta manera conocer el objeto a investigar y las distintas aplicaciones en las que se encuentra.</li> </p>
<p> <li>Comprender los usos y funcionalidades del lenguaje de programación tratado, por medio de la abstracción de varias consultas acerca del tema.   </li></p>
<p> <li>Explicar las funcionalidades del lenguaje, de tal manera que esta sea comprensible y detallada. </li></p> 
<p> <li> Desarrollar ejemplos básicos donde se evidencie el  lenguaje ya antes mencionado. </li></p>

**ESTADO DEL ARTE**

**Repensar los bucles de JavaScript como combinadores**

*Prashant Singh,Rejo Mathew,Veerdhwaj Singh*

<p>16-19 de diciembre de 2015. </p>

<p>En la investigación se dice que los bucles son estructuras importantes y por ende es primordial que sean eficientes. Las estructuras de control de bucle tradicionales son for y while, estas  permiten a los programadores escribir un sin número de construcciones de iteración; es por ello que tanto  lla modularidad y la compatibilidad son claves para una programación exitosa, en conjunto  ayudan a combatir la complejidad del software.</p>

<p>Entonces se sugiere que los combinadores de bucle son más expresivos que las estructuras de control de bucle, no obstante  son menos eficientes. Un combinador de bucles es una función que transforma una cinta de entrada. Por ejemplo, map y ﬁlter son combinadores de bucles que transforman listas.</p>

<p>Los lenguajes orientados a objetos como JavaScript no tiene un operador de composición de funciones por lo que se plantea como opción una forma más orientada a objetos que  sería utilizar el método de encadenamiento. Es ampliamente conocido que (f ◦g◦h) (x) en lenguajes funcionales es equivalente a x · h () · g () · f () en lenguajes orientados a objetos donde x es un objeto, (·) es el operador de membresía y h (), g () y f () son llamadas a métodos. Por lo tanto, se puede  escribir (filtro (impar) ◦ mapa (inc)) (+) en JavaScript como cadena (+) · mapa (inc) · filtro (impar) · valor ():</p>

<p>Esto se conoce comúnmente como el patrón de valor de cadena en JavaScript, que se destacó debido a la popular biblioteca Underscore.js.</p>

<p>La contribución de este tema fue promover el uso de combinadores de bucle sobre las estructuras de control de bucle tradicionales para disminuir la complejidad del software al hacer que los combinadores de bucle sean más eficientes. Pese a que lo combinadores de bucle propuestos en este estudio son bastante eficientes, son más lentos que las bibliotecas de combinador más rápidas. Sin embargo, en el proceso de creación de esta biblioteca se descubrió varios hechos interesantes sobre el encadenamiento de métodos y la optimización de bucles que es información de gran utilidad para muchos.(Singh,2015)</p>

<p> Trivandrum, India </p>

**JavaScript: las partes (no) cubiertas**

<p>Amin Milani Fard,Ali Mesbah?</P>
<p>Univ. of British Columbia, Vancouver, BC, Canada<p/>

<p>JavaScript se ha convertido en uno de los lenguajes de programación más populares y se usa ampliamente para crear aplicaciones web tanto para el cliente como para el servidor,por lo que probar el código es importante. En este caso se presenta  el primer estudio empírico de pruebas de JavaScript para caracterizar su prevalencia, métricas de calidad abarcando cobertura del código y deficiencias. Se aplica la investigación en un conjunto de datos  representativo de 373 proyectos de JavaScript, con más de 5.4 millones de líneas de código JavaScript. Tras varios análisis se obtiene los siguientes resultados: el 22% de los sujetos estudiados no tienen el  código de prueba,alrededor del 40% de los proyectos con JavaScript en el lado del cliente no tienen una prueba, mientras que esto sucede en  sólo alrededor del 3% para los proyectos de JavaScript del lado del servidor.Además, las pruebas para el código del lado del servidor tienen alta calidad (en términos de cobertura del código, relación del código de prueba, relación de confirmación de la prueba y número promedio de afirmaciones por prueba), mientras que las pruebas para el código del lado del cliente tienen una calidad de moderada a baja. </p>
<p>Los  resultados muestran que las pruebas de JavaScript carecen de la cobertura adecuada para las devoluciones de llamada dependientes de eventos (36%), las devoluciones de llamada asíncronas (53%) y el código relacionado con DOM (63%). A partir de esto se asegura  que vale la pena que el desarrollador y la comunidad de investigación se centren en las técnicas y herramientas de prueba para lograr una mejor cobertura para el código JavaScript difícil de cubrir.Los resultados de este estudio pueden usarse para mejorar JavaScript herramientas de generación de prueba para producir casos de prueba más efectivos que apunte a partes del código difíciles de probar. (Fard,2017) </p>

<p>Fecha de la conferencia: 13-17 de marzo de 2017</p>
<p>Fecha añadida a IEEE Xplore: 18 de mayo de 2017</P>

**Una solución para la ejecución de JavaScript en servidores de aplicaciones Java EE**

<p> Milan Vidaković,Stefan Ćosić,Ognjen Ćosić,Ivan Kaštelan,Gordana Velikić </p>
<p> Lugar de la conferencia: Novi Sad, Serbia</p>
<p> Facultad de Ciencias técnicas, Universidad de Novi Sad, Novi Sad, Serbia</p>

<p> Este documento describe una solución para la ejecución de código JavaScript dentro de los servidores de aplicaciones Java Enterprise Edition (Java EE). La idea principal era permitir que los lenguajes de script como JavaScript se ejecuten dentro de la VM Java,la integración de JavaScript en Java VM comenzó con el proyecto Rhino el cual era el motor de secuencias de comandos predeterminado para JavaScript hasta que se reemplazó con el motor Nashorn en Java 8. Nashorn introdujo el código de operación JVM invocador , que fue diseñado para permitir el uso de lenguajes escritos dinámicamente dentro de Java VM . Como Java Virtual Machine (Java VM) puede ejecutar código JavaScript, es posible integrar JavaScript en Java EE.El proyecto tuvo como meta central  integrar el servidor Node.js en la máquina virtual Java como módulo de interfaz nativa de Java (JNI) . Node.js se compila como una biblioteca de enlaces dinámicos y se integra dentro del archivo jar, con la API correspondiente para invocar código JavaScript, permitir el intercambio de datos y devoluciones de llamadas, sin embargo,en lugar de implementar código JavaScript en el servidor Node.js, se  decidió integrar javaScript dentro del entorno Java EE. De esta manera, es posible llamar a otros módulos Java EE dentro del código JavaScript, ya que ahora forma parte del sistema empresarial. Para lograrlo,se ha diseñado una arquitectura que introduce un Middleware como un enlace entre el sistema Enterprise y el código JavaScript. Además se ha medido el rendimiento de tres plataformas habituales para la ejecución de JavaScript, es así que se  concluye que JavaScript dentro de Java VM no es significativamente más lento que el sistema Node.js.(Vidaković,2018)</p>


<p>Fecha de la conferencia: 30-31 de mayo de 2018</p>
<p>Fecha añadida a IEEE Xplore : 30 de agosto de 2018</p>

**MARCO TEÓRICO**
<p> ¿Qué es javascript?</p>

<p>JavaScript es un lenguaje utilizado para dotar de efectos y procesos dinámicos e “inteligentes” a documentos HTML. Un documento HTML viene siendo coloquialmente “una página web”. Así, podemos decir que el lenguaje JavaScript sirve para ejecutar acciones rápidas y efectos animados en  páginas web.</p>
<p>Las acciones controladas por JavaScript pueden ser el despliegue de un menú, hacer aparecer, desaparecer o cambiar texto e imágenes, realizar cálculos y mostrar resultados, mostrar mensajes de aviso (por ejemplo si faltan datos en un formulario) y “efectos animados” en general.</p>
<p>Este lenguaje es principalmente utilizado por parte de programadores web para dar respuestas rápidas a las acciones del usuario sin necesidad de enviar la información de lo que ha hecho el usuario al servidor y esperar respuesta de éste (lo que haría más lento los procesos). El código JavaScript se carga al mismo tiempo que el código HTML en el navegador, y reside en el cliente (computador en el que nos encontramos), por lo que JavaScript sigue funcionando incluso aunque se produzca un corte en la conexión a internet (en este caso no podremos seguir navegando hacia otras direcciones web, pero sí podremos ejecutar procesos “locales” en nuestro computador para la página web en que nos encontráramos).</p>

*Compiladores*
<p>Google Closure Compiler</p>

<p>No es realmente un compilador de código en el sentido normal, pero sí que se puede considerar un compilador porque compila, junta     diferentes fragmentos de código y transforma de JavaScript a JavaScript mejorado.
 Google Closure Compiler es una herramienta que ayuda a optimizar y encontrar errores en el código JavaScript.
 ¿Qué hace? En el artículo Using Google’s Closure to Compile and Verify your JavaScript nos lo explican:
 Junta diferentes ficheros de JavaScript en uno solo.
 Elimina contenido innecesario para la ejecución, como los comentarios.
 Detecta código inútil que no se usa.
 Detecta código que contiene errores.</p>






 











