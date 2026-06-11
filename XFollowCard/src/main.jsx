import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

//Un componente es una función que devuelve un elemento. Es la unidad minima de lógica. 

//Los nombres de los componentes tienen que empezar con mayuscula, o sea, PascalCase. 

ReactDOM.createRoot(document.getElementById("root")).render(
    
    <React.StrictMode>
     <App />
    </React.StrictMode>
)
