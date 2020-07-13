# week7_day1

> React | create-react-app
>
> React | Intro, JSX and Elements
>
> React | Components and Props

## Main points: React
- Librería de Javascript para componer plataformas **Single Page Application**.
- La transmisión de información se realiza a través de `props` en base a un **single way data flow**.
- El paquete global `create-react-app` cubre todos los requerimientos para comenzar un proyecto de React.

## Main points: Componentes

- Existen dos tipos de componentes en React:
 - Componentes funcionales:
   * Funciones de Javascript
   * Stateless
   * Retornan JSX
   * Disponen de las propiedades en el parámetro `props`

 * Componentes de clase:
   * Clases de Javascript
   * Stateful
   * Retornan JSX a través de su método `.render()`
   * Disponen de las propiedades en `this.props`, en cuyo caso requiere de constructor y método `.super()`

- Desarrollo de componentes:
  * Importar React y, en caso de componentes de clase, `{ Component }`
  * Declaración del componente.
  * Exportación (por defecto o nominal) del componente.

## Main points: JSX
   * Javavascript eXtension que produce *React elements* para ser renderizados en el DOM.
   * Todas las etiquetas disponen de apertura y cierre.
   * La sintaxis de algunos atributos se ve alterada (`class` -> `className`).
   * No es posible retornar elementos adyacentes.
   * Es posible interpolar JS en elementos de JSX entre llaves.
   * Para interpolar el valor de un atributo es necesario omitir las comillas del mismo.
