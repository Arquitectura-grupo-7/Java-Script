Java-Script

Javascript: Compilador, Variables, Entradas por teclado, Estructuras secuenciales, Estructuras condicionales. Desarrollo de 2 ejemplos de cada tema.

¿Qué es y cual es el funcionamiento del lenguaje de programación Java-Script y sus principales estructuras ?


OBJETIVO GENERAL:
Investigar los usos y estructuras principales de Javascript, por medio de la abstracción de información, para así poder conocer los usos que este tiene y posteriormente dar una explicación a la clase.

OBJETIVOS ESPECÍFICOS:
 - Identificar documentos recientes que tengan información acerca del lenguaje java script, para de esta manera conocer el objeto a investigar y las distintas aplicaciones en las que se encuentra.
- Comprender los usos y funcionalidades del lenguaje de programación tratado, por medio de la abstracción de varias consultas acerca del tema.
- Explicar las funcionalidades del lenguaje, de tal manera que esta sea comprensible y detallada.
- Desarrollar ejemplos básicos donde se evidencie el  lenguaje ya antes mencionado.
 
 
 











ESTADO DEL ARTE

Repensar los bucles de JavaScript como combinadores
 
Prashant Singh,Rejo Mathew,Veerdhwaj Singh

16-19 de diciembre de 2015. 
En la investigación se dice que los bucles son estructuras importantes y por ende es primordial que sean eficientes. Las estructuras de control de bucle tradicionales son for y while, estas  permiten a los programadores escribir un sin número de construcciones de iteración; es por ello que tanto  modularidad y la compatibilidad son claves para una programación exitosa, en conjunto  ayudan a combatir la complejidad del software.
Entonces se sugiere que los combinadores de bucle son más expresivos que las estructuras de control de bucle, no obstante  son menos eficientes. Un combinador de bucles es una función que transforma una cinta de entrada. Por ejemplo, map y ﬁlter son combinadores de bucles que transforman listas.
Los lenguajes orientados a objetos como JavaScript no tiene un operador de composición de funciones por lo que se plantea como opción una forma más orientada a objetos que  sería utilizar el método de encadenamiento. Es ampliamente conocido que (f ◦g◦h) (x) en lenguajes funcionales es equivalente a x · h () · g () · f () en lenguajes orientados a objetos donde x es un objeto, (·) es el operador de membresía y h (), g () y f () son llamadas a métodos. Por lo tanto, se puede  escribir (filtro (impar) ◦ mapa (inc)) (+) en JavaScript como cadena (+) · mapa (inc) · filtro (impar) · valor ():
Esto se conoce comúnmente como el patrón de valor de cadena en JavaScript, que se destacó debido a la popular biblioteca Underscore.js.
La contribución de este tema fue promover el uso de combinadores de bucle sobre las estructuras de control de bucle tradicionales para disminuir la complejidad del software al hacer que los combinadores de bucle sean más eficientes. Pese a que lo combinadores de bucle propuestos en este estudio son bastante eficientes, son más lentos que las bibliotecas de combinador más rápidas. Sin embargo, en el proceso de creación de esta biblioteca se descubrió varios hechos interesantes sobre el encadenamiento de métodos y la optimización de bucles que es información de gran utilidad para muchos.(Singh,2015)
 Trivandrum, India






JavaScript: las partes (no) cubiertas
 
Amin Milani Fard,Ali Mesbah
 
Univ. of British Columbia, Vancouver, BC, Canada

JavaScript se ha convertido en uno de los lenguajes de programación más populares y se usa ampliamente para crear aplicaciones web tanto para el cliente como para el servidor,por lo que probar el código es importante. En este caso se presenta  el primer estudio empírico de pruebas de JavaScript para caracterizar su prevalencia, métricas de calidad abarcando cobertura del código y deficiencias. Se aplica la investigación en un conjunto de datos  representativo de 373 proyectos de JavaScript, con más de 5.4 millones de líneas de código JavaScript. Tras varios análisis se obtiene los siguientes resultados: el 22% de los sujetos estudiados no tienen el  código de prueba,alrededor del 40% de los proyectos con JavaScript en el lado del cliente no tienen una prueba, mientras que esto sucede en  sólo alrededor del 3% para los proyectos de JavaScript del lado del servidor.Además, las pruebas para el código del lado del servidor tienen alta calidad (en términos de cobertura del código, relación del código de prueba, relación de confirmación de la prueba y número promedio de afirmaciones por prueba), mientras que las pruebas para el código del lado del cliente tienen una calidad de moderada a baja.
Los  resultados muestran que las pruebas de JavaScript carecen de la cobertura adecuada para las devoluciones de llamada dependientes de eventos (36%), las devoluciones de llamada asíncronas (53%) y el código relacionado con DOM (63%). A partir de esto se asegura  que vale la pena que el desarrollador y la comunidad de investigación se centren en las técnicas y herramientas de prueba para lograr una mejor cobertura para el código JavaScript difícil de cubrir.Los resultados de este estudio pueden usarse para mejorar JavaScript herramientas de generación de prueba para producir casos de prueba más efectivos que apunte a partes del código difíciles de probar. (Fard,2017)

Fecha de la conferencia: 13-17 de marzo de 2017
Fecha añadida a IEEE Xplore: 18 de mayo de 2017








 
Una solución para la ejecución de JavaScript en servidores de aplicaciones Java EE
Milan Vidaković,Stefan Ćosić,Ognjen Ćosić,Ivan Kaštelan,Gordana Velikić
Lugar de la conferencia: Novi Sad, Serbia
Facultad de Ciencias técnicas, Universidad de Novi Sad, Novi Sad, Serbia


Este documento describe una solución para la ejecución de código JavaScript dentro de los servidores de aplicaciones Java Enterprise Edition (Java EE). La idea principal era permitir que los lenguajes de script como JavaScript se ejecuten dentro de la VM Java,la integración de JavaScript en Java VM comenzó con el proyecto Rhino el cual era el motor de secuencias de comandos predeterminado para JavaScript hasta que se reemplazó con el motor Nashorn en Java 8. Nashorn introdujo el código de operación JVM invocador , que fue diseñado para permitir el uso de lenguajes escritos dinámicamente dentro de Java VM . Como Java Virtual Machine (Java VM) puede ejecutar código JavaScript, es posible integrar JavaScript en Java EE.El proyecto tuvo como meta central  integrar el servidor Node.js en la máquina virtual Java como módulo de interfaz nativa de Java (JNI) . Node.js se compila como una biblioteca de enlaces dinámicos y se integra dentro del archivo jar, con la API correspondiente para invocar código JavaScript, permitir el intercambio de datos y devoluciones de llamadas, sin embargo,en lugar de implementar código JavaScript en el servidor Node.js, se  decidió integrar javaScript dentro del entorno Java EE. De esta manera, es posible llamar a otros módulos Java EE dentro del código JavaScript, ya que ahora forma parte del sistema empresarial. Para lograrlo,se ha diseñado una arquitectura que introduce un Middleware como un enlace entre el sistema Enterprise y el código JavaScript. Además se ha medido el rendimiento de tres plataformas habituales para la ejecución de JavaScript, es así que se  concluye que JavaScript dentro de Java VM no es significativamente más lento que el sistema Node.js.(Vidaković,2018)



Fecha de la conferencia: 30-31 de mayo de 2018
Fecha añadida a IEEE Xplore : 30 de agosto de 2018















MARCO TEÓRICO

¿Qué es javascript?
JavaScript es un lenguaje utilizado para dotar de efectos y procesos dinámicos e “inteligentes” a documentos HTML. Un documento HTML viene siendo coloquialmente “una página web”. Así, podemos decir que el lenguaje JavaScript sirve para ejecutar acciones rápidas y efectos animados en  páginas web.
 Las acciones controladas por JavaScript pueden ser el despliegue de un menú, hacer aparecer, desaparecer o cambiar texto e imágenes, realizar cálculos y mostrar resultados, mostrar mensajes de aviso (por ejemplo si faltan datos en un formulario) y “efectos animados” en general. 
Este lenguaje es principalmente utilizado por parte de programadores web para dar respuestas rápidas a las acciones del usuario sin necesidad de enviar la información de lo que ha hecho el usuario al servidor y esperar respuesta de éste (lo que haría más lento los procesos). El código JavaScript se carga al mismo tiempo que el código HTML en el navegador, y reside en el cliente (computador en el que nos encontramos), por lo que JavaScript sigue funcionando incluso aunque se produzca un corte en la conexión a internet (en este caso no podremos seguir navegando hacia otras direcciones web, pero sí podremos ejecutar procesos “locales” en nuestro computador para la página web en que nos encontráramos).
Compiladores
Google Closure Compiler

No es realmente un compilador de código en el sentido normal, pero sí que se puede considerar un compilador porque compila, junta diferentes fragmentos de código y transforma de JavaScript a JavaScript mejorado.
Google Closure Compiler es una herramienta que ayuda a optimizar y encontrar errores en el código JavaScript.
¿Qué hace? En el artículo Using Google’s Closure to Compile and Verify your JavaScript nos lo explican:
Junta diferentes ficheros de JavaScript en uno solo.
Elimina contenido innecesario para la ejecución, como los comentarios.
Detecta código inútil que no se usa.
Detecta código que contiene errores.

AngularJS
Se trata de un framework MVC (Modelo Vista Controlador) de JavaScript de código abierto, desarrollado por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. Su objetivo es aumentar las aplicaciones basadas en navegador con capacidad de Modelo Vista Controlador (MVC), en un esfuerzo para hacer que el desarrollo y las pruebas sean más fáciles. 
Al usar un patrón MVVM (model view view-model) separamos la lógica de la de diseño pero mantenemos ambas partes conectadas (data binding). De manera que la capa visual no sabe lo que está pasando en la capa lógica pero manteniendo control sobre el DOM (el cuerpo de la web) y actualizar su contenido como queramos. (Green,2013)

NodeJS
Es un entorno de tiempo de ejecución de JavaScript en tiempo real, que se encuentra de lado de servidor y utiliza un modelo asíncrono y dirigido por eventos. Incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript. 
Se trata de una Máquina Virtual rápida y de gran calidad. Además las capacidades de Node.js para I/O (Entrada/Salida) son realmente ligeras y potentes, dando al desarrollador la posibilidad de utilizar toda la I/O del sistema. 
Uno de sus puntos fuertes, es su capacidad de mantener muchas conexiones abiertas y esperando. (Gómez,2018)

Variables

Una variable es un espacio de memoria donde se almacena un dato y se puede guardar cualquier tipo de información necesaria para realizar las acciones de nuestros programas. 


Variables en Java Script
Los nombres de las variables han de construirse con caracteres alfanuméricos, donde también se pueden añadir los signos subrayado, guión bajo (_) y el  dólar ($). 
Algunas de las reglas para construir nombres para variables son:
No pueden comenzar por un carácter numérico, tampoco con los signos (+),(-) o un espacio. 
Se debe evitar utilizar nombres reservados como variables, así como return o for.
Los nombres son sensibles a mayúsculas y minúsculas, ya que al escribirlos con este error se creará una variable diferentes que no tendrá el dato que se espera.
Javascript es un lenguaje bastante permisivo, y en este caso otorga un poco de libertad a la hora de declarar las variables, puesto que no estamos obligados a hacerlo como en otros lenguajes que son muy estrictos en este punto.
Javascript cuenta con la palabra "var" la cual será utilizada para declarar una o varias variables.
También se permite declarar varias variables en la misma línea, siempre que se separen por comas.
Pueden ser globales, son accesibles en toda la página web. Pueden ser locales, son accesibles sólo en el ámbito en el que fueron declaradas

Javascript en su versión ES6, tiene otros modos de declarar variables:
Declaración let: Esta nueva manera de declarar las variables afecta a su ámbito, ya que son locales al bloque donde se están declarando.
Declaración const: En realidad "const" no declara una variable sino una constante, que no puede variar su valor a lo largo de la ejecución de un programa.(Pérez, 2019)

Estructuras secuenciales
Cuando en un problema sólo participan operaciones, entradas y salidas se la denomina estructura secuencial.
En JavaScript, como no se puede indicar el tipo de la variable, se requiere mucho más cuidado cuando operamos con sus contenidos.

Entrada repetitiva do while
La sentencia do/while es una estructura repetitiva, la cual se utiliza cuando conocemos de antemano que por lo menos una vez se ejecutará el bloque repetitivo, a diferencia del while que puede no ejecutar el bloque.
La condición de la estructura está abajo del bloque a repetir y finaliza la ejecución del bloque repetitivo cuando la condición retorna falso.
Ejemplo:
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"



Entrada repetitiva For
Un bucle for se repite hasta que la condición especificada se evalúa como falsa.
Cuando un bucle for se ejecuta, ocurre lo siguiente:
La expresión de inicialización, si existe, se ejecuta. Esta expresión habitualmente inicializa uno o más contadores del bucle, pero la sintaxis permite una expresión con cualquier grado de complejidad. Esta expresión puede también declarar variables.
Se evalúa la expresión condición. Si el valor de condición es verdadero, se ejecuta la sentencia del bucle. Si el valor de condición es falso, el bucle for finaliza. Si la expresión condición es omitida, la condición es asumida como verdadera.
Se ejecuta la sentencia. Para ejecutar múltiples sentencias, use un bloque de sentencias ({ ... }) para agruparlas.
Se ejecuta la expresión expresionIncremento, si hay una, y el control vuelve al paso 2. (Mohedano,2012)

Ejemplo:
for (var i = 0; i < 9; i++) {
   n += i;
   mifuncion(n);
}
         

 Entradas por teclado 

En Informática, la "entrada" de un programa son los datos que llegan al programa desde el exterior. Actualmente, el origen más habitual es el teclado(Sintes,2018).

Prompt()
El método prompt () se utiliza para mostrar un cuadro de diálogo con un mensaje opcional que  nos permite solicitar información al visitante de la página. A menudo se usa si el usuario desea ingresar un valor antes de ir a una página.Entonces devuelve una cadena que contiene el texto ingresado por el usuario, o nulo.
Sintaxis:
mensaje (mensaje, predeterminado)
-El mensaje es una cadena de texto para mostrar al usuario. Se puede omitir si no hay nada que mostrar en la ventana de solicitud, es decir, es opcional.
-Default es una cadena que contiene el valor predeterminado que se muestra en el campo de entrada de texto. También es opcional.
Ejemplo:
prompt("Indique su edad");
Si se  prueba en el editor online (entre etiquetas <script></script>), saldrá un pop-up con el texto que se haya incluido y una casilla para introducir la información solicitada (datos numéricos o texto).Se puede incluir una respuesta por defecto. Esta se mostrará en la casilla y puede ser modificada por el visitante(Barrena,2017).
 Ejemplo:
prompt("Indique su edad", 25);
Normalmente se asignará  la respuesta del usuario a una variable, para realizar alguna acción definida en el programa. 
Textarea
El textarea es un elemento que presenta un lugar para escribir texto, igual que los campos text, pero con la particularidad de  que puede escribir varias líneas a la vez.
Un campo textarea se consigue con la etiqueta <TEXTAREA>. Con el atributo name se puede  dar un nombre para acceder al campo textarea mediante Javascript. Otros atributos  son cols y rows que sirven para indicar la anchura y altura del campo textarea en caracteres, cols indica el número de columnas y rows el de filas. Sin embargo, no se puede acceder a ellos con Javascript. El valor por defecto de un campo textarea se coloca entre las etiqueta <TEXTAREA> y su correspondiente cierre(Álvarez,2003).
Propiedades de textarea
Se puede ver una lista de las propiedades disponibles en un textarea a continuación, que son los mismos que un campo de texto.
defaultValue: que contiene el valor por defecto del textarea.
value:que contiene el texto que hay escrito en el textarea.
Además tiene las conocidas propiedades de elementos de formulario form, name y type.
El ejemplo que se muestra a continuación presenta un formulario que tiene un textarea y un botón. Al apretar el botón se cuenta el número de caracteres y se coloca en un campo de texto.Para acceder al número de caracteres lo hacemos a partir de la propiedad value del objeto textarea. Cómo value contiene un string podemos acceder a la propiedad length que tienen todos los strings para averiguar su longitud.
<html>
<head>
   	<title>Ejemplo textarea</title>
<script>
function cuenta(){
    numCaracteres = document.formul.textito.value.length
   	document.formul.numCaracteres.value = numCaracteres}
</script>
</head>
<body>
<form name="formul">
<textarea name=textito cols=40 rows=3>
Este es el texto por defecto
</textarea>
<br>
<br>
Número de caracteres <input type="Text" name="numCaracteres" size="4">
<br>
<br>
<input type=button value="Cuenta caracteres" onclick="cuenta()">
</form>
</body>
</html>


Campo Text
Es el campo que resulta de escribir la etiqueta <INPUT type="text">. Se la usa para solicitar datos al usuario de la página.
Propiedades del campo text
defaultValue
Es el valor por defecto que tiene un campo. Lo que contiene el atributo VALUE de la etiqueta <INPUT>.
form:Hace referencia al formulario.
name:Contiene el nombre de este campo de formulario
type:Contiene el tipo de campo de formulario que es.
value:El texto que hay escrito en el campo.
A continuación se visualiza un ejemplo sobre lo que puede hacer la propiedad defaultValue. En este ejemplo se tiene un formulario y un botón de reset. Si se pulsa el botón de reset el campo de texto se vacía porque su value de HTML era un string vacío. Pero si pulsamos el botón siguiente llamamos a una función que cambia el valor por defecto de ese campo de texto, de modo que al pulsar el botón de reset mostrará el nuevo valor por defecto(Álvarez,2002).
ESTRUCTURAS CONDICIONALES 

Un script consiste en una lista de enunciados que se van ejecutando a medida que se cargan. Sin embargo, en ocasiones es necesario controlar el flujo de la ejecución estableciendo alternativas, es decir, que una serie de enunciados se ejecuten en algunas ocasiones y en otras no. Para permitir esto existen las estructuras condicionales.

if … else
Por medio de if se puede indicar una condición que, de cumplirse, permite la ejecución de uno o más enunciados(Castillo,2017). Por medio de else se puede establecer una alternativa, aunque su uso es opcional.La sintaxis de esta estructura es la siguiente:

    if(condición){
        …enunciados a ejecutar si se cumple la condición…
    } 
else {
        …enunciados a ejecutar si NO se cumple la primera condición…
    }
            
Ejemplo:
En un programa  se desea lanzar una advertencia si el valor de una variable es mayor que 100, y otra si es mayor:

    if (variable _a_ comparar>100){
        alert("El valor de la variable es mayor que 100");
    } else {
        alert("El valor de la variable es menor o igual que 100");
    }
            
Además, las instrucciones se pueden vincular:

    if (variable _a_ comparar>100){
        alert("El valor de la variable es mayor que 100");
    } else if (variable _a_ comparar==100){
        alert("El valor de la variable es exactamente 100");
    } else {
        alert("El valor de la variable es menor que 100");
    }
            
Switch
Por medio de switch se puede listar una serie de bloques de enunciados que se ejecuten dependiendo del valor de una variable(Pérez,2019).La sintaxis es:

    switch (variable){
        case(valor1):
            …enunciados a ejecutar para ese valor…
            break;
        case(valor2):
            …enunciados a ejecutar para ese valor…
            break;
        case(valor3):
            …enunciados a ejecutar para ese valor…
            break;
        default:
            …enunciados a ejecutar cuando el valor no 
            coincida con ninguno de los anteriores…
            break;
    }
            
Ejemplo, analizar el valor de una variable y que dependiendo de éste se lanza un mensaje de alerta:
    switch (nombrePersonaje){
        case('Harry Mason'):
            alert('El protagonista del primer «Silent Hill»');
            break;
        case('James Sunderland'):
            alert('El protagonista de «Silent Hill 2»');
            break;
        case('Maria'):
            alert('Protagonista de «Silent Hill 2: Born from a Wish»');
            break;
        case('Heather Mason'):
            alert('Protagonista de «Silent Hill 3», hija de Harry Mason');
            break;
        case('Henry Townshend'):
            alert('Protagonista de «Silent Hill 4: The Room»');
            break;
        case('Travis Grady'):
            alert('Protagonista de «Silent Hill Origins»');
            break;
        default:
            alert('El nombre no corresponde a ningún protagonista de «Silent Hill»');
            break;
    }        
            
Es importante finalizar con un break en cada caso ya este  indica que el bloque de código puede dejar de interpretarse cuando se haya dado una coincidencia.Por otra parte la especificación de default: es opcional. En este caso, si no se emplease simplemente no se lanzaría ninguna alerta en caso de que el valor de nombrePersonaje no coincidiese con ninguno de los nombres recogidos en switch.
Operadores lógicos
Los operadores lógicos amplían las posibilidades de establecer condiciones. Son:
-Operadores lógicos, sus significados y su sintaxis
En el caso de !, se emplea cuando lo que se quiere comprobar no es la existencia de un objeto o variable, sino su no existencia. 

!Negación
&&   	Y         


||      	O         


if(!condición1) { 
        …enunciados…
    }
    Los enunciados se ejecutan 
   si no se cumple la condición


if((condición1)&&(condición2)) {
        …enunciados…
    }
   Los enunciados se ejecutan 
   si se cumplen ambas condiciones


  if((condición1)||(condición2))
{
        …enunciados…
    }
Los enunciados se ejecutan 
  si se cumple una de las condiciones





DIAGRAMAS

Diagrama de flujo aplicación: “Adivina el número”



Diagrama casos de uso-clase de la aplicación “Calculadora” 


LISTA DE COMPONENTES
Estos son los recursos que se han utilizado a lo largo del desarrollo del trabajo de investigación.
 
COMPONENTES
1.
Atom:entorno de desarrollo para  los programas.
2.
Navegador:para la ejecución de los programas.
3.
Github:repositorio para el informe.
4.
Trello:herramienta usada para organizar los trabajos de cada integrante.
5.
Google meet
6.
Google documentos
7.
LucidChart:herramienta usada para la elaboración de diagramas.
 
MAPA DE VARIABLES
 
Variables “Calculadora”
Variables “Adivina numero”
numero1 = Int

Crea un espacio de memoria que se convertirá en el primer número a operar dentro de la calculadora
numeroCPU = int

Crea un espacio de memoria para el número aleatorio que disponga el programa para posteriormente ser comparado
numero2 =Int

Crea un espacio de memoria que se convertirá en el segundo número a operar dentro de la calculadora 
numeroUsuario = int

Crea un espacio de memoria para el número que el Usuario ingrese para posteriormente ser comparado
resultado = Int

Crea un espacio de memoria que se convertirá en la respuesta producto de la operación de los primeros números


valor = Int

Crea un espacio de memoria que se convertirá en la respuesta producto de la operación de los primeros números


 
 EXPLICACIÓN DE CÓDIGO FUENTE
Programa “Adivina número”
Primero el programa crea un número aleatorio del 1 al 10 mediante la función Math.floor((Math.random() *10) + 1); este número se compara con el valor ingresado por el usuario realizando una entrada por teclado mediante la función parseInt(prompt('Adivina el número que estoy pensando del 1 al 10')) 
si la comparación de estos dos números son distintos surgirá un alert mediante una condición if en donde si el número es mayor mostrará el mensaje 'el número es mayor' y si no lo es mostrara lo contrario. 
El proceso está condicionado por un while que mantendrá un bucle hasta que el número generado aleatoriamente por el computador deje de ser distinto al del usuario y en este caso surgirá un alert con las palabras: 'haz acertado'
 
Programa “Calculadora”
Primero el programa solicita que el usuario elija la operación a ejecutar mediante una estructura HTML posicionando botones, del mismo modo, se condiciona al botón a ejecutar cierta función una vez se dé click en él por ejemplo :
<input type="button" class="boton rojo" value="suma" onclick="suma()" >
para la función suma una vez el usuario digite mediante la función prompt el primer y segundo número a operar esta crea una segunda función la cual realiza la operación denominada suma 2
function suma(){
  numero1 = prompt('Introduce el primer numero entero');
  numero2 = prompt('Introduce el segundo numero entero');
  resultado = suma2(numero1,numero2);
  alert(resultado);
}
En la operación suma dos se lleva a cabo todo el proceso por el cual las dos variables van a ser sometidas para poder conseguir el resultado o valor que se mostrará mediante un alert.
function suma2(num1, num2){
  var valor;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  valor = num1 + num2;
  return(valor);
}
El proceso se repite con el resto de operaciones en donde al momento de llegar a operaciones más avanzadas como potencia o raíz cuadrada se hizo vital la utilización de dos funciones preestablecidas llamadas  Math.pow y Math.sqrt respectivamente las cuales permiten el retorno del valor respuesta. 
DESCRIPCIÓN DE PRERREQUISITOS Y CONFIGURACIÓN
Aquí se especifica todas las herramientas necesarias tanto de hardware como software para el desarrollo y ejecución del proyecto.
                            PRERREQUISITOS Y CONFIGURACIÓN
HARDWARE
SOFTWARE
Laptop
Atom


Atom es un editor de código fuente de código abierto para macOS, Linux, y Windows​ con soporte para múltiples plug-in escritos en Node.js y control de versiones Git integrado, desarrollado por GitHub.
Navegador 
El código de JavaScript se ejecuta en el navegador web del visitante de la página,por lo que ,es necesario tener cualquier navegador instalado en la laptop o PC.


 
APORTACIONES
Java Script controla todo los procesos que hacen posible por ejemplo sumar en una calculadora, sin embargo, la interfaz es creada por un lenguaje de estilo para Javascript este lenguaje se conoce como CSS es por eso que se puede decorar de colores los botones para el programa de la calculadora, otro agregado es el estudio de funciones pues con estas el programador es capaz de crear un proceso y llamarlo cuando sea necesario ahorrando recursos y tiempo en el acto. 



  
CONCLUSIONES
Se establece las conclusiones de cada asunto investigado, implicaciones para la teoría y resultados de las experiencias. Estos siempre estarán en relaciona los objetivos generales y específicos.
Javascript es un lenguaje de programación que se emplea en la creación de páginas web, y que funciona integrándose con el HTML,además no necesita de compiladores ya que son los navegadores los que se encargan de leer el código.
Las   estructuras condicionales de Javascript como if-else y switch,permiten ejecutar ciertas partes del código dependiendo si se cumplen o no con las condiciones establecidas,estos conceptos se fueron comprendiendo a través del desarrollo de los programas .
Se cumplió nuestro objetivo acerca de desarrollar ejemplos básicos donde se evidencie el  lenguaje Javascrip, esto debido a las investigaciones realizadas referentes a este lenguaje, su funcionamiento y características. De esta manera nuestras dos aplicaciones, tanto “calculadora” como “adivina número” se encuentran con un buen funcionamiento y listas para ser usadas. 
 




RECOMENDACIONES
-El editor de código fuente o id en múltiples ocasiones puede representar una ayuda para el programador puesto que cuentan con múltiples facilidades para hacer el desarrollo más ameno, por tal motivo se escogió atom este es un editor de código fuente que cuenta con un autocompletado inteligente y en muchas ocasiones agiliza el trabajo 
-Se recomienda que el programador tenga tendencias investigativas puesto que en la actualidad existen múltiples formas de desarrollar programas unas más eficientes que otras, por tal motivo, encontrar una manera de facilitar tu trabajo o hacerlo más eficaz siempre es recomendado para un programador.
-Java Script es un lenguaje de programación interpretado,por tal motivo, su estructura amerita de un lenguaje de etiquetado como HTML y CSS para poder ofrecer de una interfaz más amigable al usuario, se recomienda tener una idea base de un lenguaje HTML o CSS para poder realizar trabajos de mayor envergadura. 
CRONOGRAMA

 
BIBLIOGRAFÍA:
Green, B., & Seshadri, S. (2013). AngularJS. " O'Reilly Media, Inc.".
Gómez, D., Flores, Á., & Ureta, R. (2018). Programación Node. JS. Caribeña de Ciencias Sociales, (mayo).
Pérez, J. E. (2019). introducción a JavaScript.
Mohedano, J., Saiz, J. M., & Román, P. S. (2012). Iniciación a javascript. Ministerio de Educación.
Castillo, A. A. (2017). Curso de Programación Web: JavaScript, Ajax y jQuery. IT Campus Academy.
Pérez, J. E. (2019). introduccion a JavaScript.
Navarrete, T. (2006). El lenguaje JavaScript. Argentina.
Singh,P.(2015).Repensar los bucles de JavaScript como combinadores.
Fard,A.M.(2017)JavaScript: las partes (no) cubiertas.
Vidaković,M.(2018).Una solución para la ejecución de JavaScript en servidores de aplicaciones Java EE
 
 
 
 
Anexos





