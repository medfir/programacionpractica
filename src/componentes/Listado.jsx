import { useState, useEffect } from "react";
import axios from "axios";
import Tarjeta from "./Tarjeta";

export default function Listado() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    const url = "https://backend-septimos.ctpoba.edu.ar/api/personas";
    const config = {
      headers: { Authorization: "48354503" },
    };

    axios
      .get(url, config)
      .then((resp) => {
        console.log(resp);
        setPersonas(resp.data.personas);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const eliminar = (persona_id) => {};

  return (
    <div style={{ flex: 3 }}>
      <h1>Listado we :V</h1>
      <div className="listado">
        {personas.map((persona) => (
          <Tarjeta
            key={persona.id}
            documento={persona.documento}
            apellidos={persona.apellidos}
            nombres={persona.nombres}
            alumno={persona.alumno}
            anio={persona.anio}
            division={persona.division}
            eliminar={() => eliminar(persona.id)}
          />
        ))}
      </div>
    </div>
  );
}
