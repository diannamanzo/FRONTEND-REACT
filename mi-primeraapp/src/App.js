// Importaciones de las funciones de react
import React, { useEffect, useState } from "react";

// Importaciones de componentes externos
import { Boton } from "./components/boton";

// Importaciones de hojas de estilo
import "./App.css";

let urlApi = "https://jsonplaceholder.typicode.com/users";

// * Funcion que renderiza nuestra app
function App() {
// Cargar la peticion a la API
const [loading, setLoading] = useState(false);
// Error
const [error, setError] = useState(false);
// Data
const [data, setData] = useState ([]);

// Async -> funcion asincrona
// await -> esperar
const getUsers = async () => {
try {
  let response = await fetch(urlApi);
  let data = await response;
  console.log(data);
} catch (error) {
  console.log(error);
}
};
useEffect (()=>{
  getUsers();
},[])

return (
  <div className="App" id="App">
  <Boton text="Llamar a API"/>
  </div>
);
}

export default App;
