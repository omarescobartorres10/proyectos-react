import "./App.css";
import { useState } from "react";

import { TwitterFollowCard } from "./TwitterFollowCard";

const App = () => {

    //const [name, setName] = useState("John Doe");


    return (
        <section className="App"> {/*Aquí se definen las propiedades de los componentes hijos*/}
            <TwitterFollowCard userName="jose" initialIsFollowing={true} >
                John Doe
            </TwitterFollowCard>
            <TwitterFollowCard userName="jsmith"  initialIsFollowing={false} >
                John Smith
            </TwitterFollowCard>
            <TwitterFollowCard userName="ajane"   >
                Alice Jane
            </TwitterFollowCard>

            {/* <button className="tw-followCard-button" onClick={() => setName('midudev')}>Cambiar nombre</button> */}

        </section>
//en este caso el padre es App y los hijos son TwitterFollowCard

    )
}

export default App; 

//Un componente es como una factoria de elemento. Un componente devuelve un elemento. 

//React NO RENDERISA funciones, sino lo que devuelven las funciones. Es decir, lo que hay dentro del return. O sea, elementos.  


//Props definición: Son las propiedades que le pasamos a un componente. Por ejemplo, en este caso, userName, name y isFollowing.

//las props son para pasar información de un componente padre a uno hijo. O sea, de arriba hacia abajo.

//las props deberían ser inmutables. Es decir, no deberían modificarse. 

//El componente padre no puede ver la información del componente hijo. El componente hijo puede ver la información del componente padre. 

//Un hook es una función que empieza con "use" y que sirve para añadir funcionalidad a un componente o poder ejecutar código arbitrario cuando ocurre ciertas cosas. 
//Por ejemplo, el hook useState sirve para añadir estado a un componente. 

//Al renderiar un componente padre también se renderiza el componente hijo independientemente de si ñas props hayan cambiado o no.  

//cuando queremos iniciarlizar un estado con una prop una buena practica es que comiencen con el mismo nombre de la prop pero con el prefijo "initial". Por ejemplo, initialName.


//si tú utilizas una prop para inicializar un estado se inicializa solo una vez. No se reinicia cuando se vuelve a renderizar el componente. Si queremos que se reinicie cada vez que se renderiza el componente deberíamos usar el estado directamente sin usar el prefijo "initial".


//no esperar que se vaya a renderizar porque cambió el estado cuando lo estás utiliznando.
