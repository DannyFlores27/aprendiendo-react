# aprendiendo-react
Fundamentos y primeros pasos con React.
![image](https://github.com/user-attachments/assets/b8fcaf90-d8b6-4151-a39a-9d8383889f2c)
![image](https://github.com/user-attachments/assets/663bdef1-c9cb-4469-977f-b35caab2bd30)
![image](https://github.com/user-attachments/assets/4570a4eb-eccc-41dc-8343-c01689603e09)
![image](https://github.com/user-attachments/assets/6dc04d28-c30e-4932-b842-7fdc10659f4e)
![image](https://github.com/user-attachments/assets/2cd4b645-d2f1-48a2-a43f-5cd06be019fa)
![image](https://github.com/user-attachments/assets/1f05e6d4-1896-4762-bae4-b32a42d13898)

React al ser declarativo le dices que quieres obtener o que haga, pero sin darle el paso a paso o el como hacerlo.  Ejemplo: onClick={handleClick} en lugar de AddEventListener...

DECLARAMOS LO QUE ESPERAMOS QUE HAGA. SOLO onClick

![image](https://github.com/user-attachments/assets/f205f77b-df73-4699-9869-8d59ec0c9216)

Imperativo: dar las instrucciones paso a paso
  Quiero pan
    Levantate
    Toma dinero
    Abre la puerta
    Camina a la panaderia
    Pide el pan
    Paga el pan
    Camina de regreso
    Tengo el pan

Declarativo: declarar lo que quiero
  Quiero pan
    Si tengo dinero y hay pan
      Lo obtengo
    Sino
      No lo obtengo

Todo en función del ESTADO.

ESTADO SIRVE PARA REENDERIZAR.

Valores del estado: se asigna un estado inicial, useState devuelve un array de 2 posiciones: 1 valor del estado y 2 función para actualizar el estado.
  const state = useState(false)
  const isFollowing = state[0]
  const setIsFollowing = state[1]

En React la actualización de los estados es asincrona, el cambio de un estado no bloquea el re enderizado.

Cuidar no usar el valor del estado anterior.

React es reactivo por eso su nombre, cada vez que hay un cambio reacciona.

Los cambios se propagan a nivel estado interno del componente, y también como un arbol, desde una rama padre que esta cerca de la raíz hacia todo sus hijos. React solo actualiza los cambios y lo demás lo deja igual, pero si reenderiza todo en el Dom virtual luego compara con el Dom actual.
![image](https://github.com/user-attachments/assets/762161b2-0a7e-4e8f-8736-62e49fc7d73e)

React trabaja con un DOM virtual, el cual renderiza solo los cambios ya que compara el Dom actual con el nuevo y dice: solo son estos cambios no vale la pena reenderizar todo solo voy a reederizar lo nuevo.

![image](https://github.com/user-attachments/assets/d628f9d3-7dac-43a5-9c6b-61698feba05f)
![image](https://github.com/user-attachments/assets/88613695-d586-40e8-b338-8f32f0402289)
![image](https://github.com/user-attachments/assets/6794743d-24fa-49de-b3d7-a47ad6f2f4b4)

HOOKS FUNCIONES DE DIFRENTE TIPO, NO SOLO STATE.

Hooks son funciones que dotan de más vida los componentes. 
Permite usar estado y otras caracteríasticas en el renderizado.
Se asigna un estado incial, useState devuelve un array de 2 posiciones: 1 valor del estado y 2 función para actualizar el estado.

Del padre al hijo podemos pasar funciones, mientras que del hijo al padre no. Pero si lo podemos llegar hacer con CALLBACK.

Callback dentro del useState es una función que tiene que devolver un valor con el que se desea incializar el estado.

Estado Inicial solo se inicializa una vez, por lo cual si el estado de un componente padre que es enviado como Prop para inicializar el estado de un componente hijo, no influye más de 1 vez en el hijo porque el estado inicial solo ocurre una vez, cuando inicia el app y no cuando se vuelve a re enderizar.

No esperar que un componente hijo se vuelva a reenderizar por el cambio del estado de un componente padre, cuando el estado del padre es enviado como prop estadoInicial al hijo, esto solo ocurre 1 vez cuando inicia el app.

Renderizar una lista de elementos. 

Key es importante para decirle a react en el dom virtual cual sera un identificador unico para cada elemento.

No puede ser un index, a menos que sepamos que siempre será el mismo y es único. De lo contrario usar id de db, uuid (creado desde la lista de elementos) o cualquier otro elemento o fusión de elementos para hacer uno único. No algo aleatorio. No soporta símbolos.

Porque de no tener un key único, habrán problemas de reenderizado, información duplicada, en estado incorrecto, etc.

React por defecto usa el index como key, pero es problema por lo anterior y mala práctica.

-----------------------------------------------------------------------------------------------------------------------------------------
NO mutar las Prop´s ni los Estados. Tratar como si fuesen inmutables.

Ejemplo: 
const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

Spread y Rest Operator copia superficial
[...board]

Copia profunda
structuredClone[board]

Crear una nueva variable en lugar de modificar el valor de la variable de la Prop o el Estado.

ESTO ES PORQUE EN REACT CAMBIAR EL ESTADO DIRECTAMENTE CAUSA PROBLEMAS DE RE ENDERIZADO, SE DEBE CAMBIAR CON setEstado (setBoard)

Los datos del nuevo re enderizado deben ser nuevos. Si se ha modificado un elemento nuevo, objeto, array, etc. Sino ha cambiado puede ser el mismo.
---------------------------------------------------------------------------------------------------------------------------------------------
Dividir en componentes y constantes, después de ya tener funcional nuestra app.

Componetizar.

Hacerlo cuando ya tengamos algo funcionando y avanzado. No detenerse por ello desde el principio.

--------------------------
Buenas prácticas

if (winner === null) return null
    // winner !== null && (

Para anidar menos código
Dejar lo más limpio posible el renderizado
También facilita ver lo que se re enderiza y lo que se necesita, ejemplo variables.

------------------------

Importar de forma nombrada cuando no son default functions

------------------------

React es componetizar
Repetir constantemente y ver las oportunidades que podemos ir separando.
TODO LO QUE PUEDE SER REUTILIZABLE, CON REACT SE PUEDE COMPONETIZAR. NO METER TODO EN UN COMPONENTE Y YA.

--------------------------

Componetizar y tratar de dejar JS por aparte y así poder reutilizar en otros frameworks. Porque es JS.

Enum y constante, potencia de cambio en un solo lugar
export const TURNS = {
    X: 'a',
    O: 'b'
}

---------------------------

Local Storage
2 variables: 1 nombreDeLoQueGuardoUnObjetoEjemplo, 2 string conElValorDelObjeto.

Esto es para que luego lo recuperemos y lo podamos volver a usar.

Remover especificamente del localStorage
window.localStorage.removeItem('board')
Buena práctica no borrar todo sino es necesario.

Leer del localEstorage es LENTO, SINCRONO Y BLOQUEA. Evitar que en cada render vuelva a leer local storage, sino lo necesita.

Esto es localStorage del lado del cliente, falta manejarlos en conjunto con DB.

Todos los Hooks no pueden estar dentro de un if: UseState, useEffect, etc.

Porque React guarda la posición, en un array interno en memoria, la posición de cada Hook. Por lo cual con un if se perdería las posiciones correctas, ya que el if no siempre se ejecutaria su interior.

HOOK´S SIEMPRE DEBEN ESTAR EN EL CUERPO DEL COMPONENTE, NUNCA DENTRO DE CONDICIONALES, BUCLES, DE NADA QUE IMPIDA ACCEDER A SU POSICIÓN.

|| mira si esto es False
?? mira si esto es Null o Undefine.

Alert bloquea la ejecución del código, no es recomendable usar. Solo para pruebas.

-----------------------------------------------
