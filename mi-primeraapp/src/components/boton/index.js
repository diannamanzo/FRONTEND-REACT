import React, {useState} from "react";
import "./styles.css";
export function Boton (){
  const [textoboton, setTextoboton] = useState ("Soy un boton");
    return (
        <button
        className="boton-componente"
        onClick={() => {
            setTextoboton("Soy Diana");
        }}
          >  
        { textoboton}
        </button>
    );

}