import { useState } from "react";

export default function Formulario() {
  const [documento, setDocumento] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [nombres, setNombres] = useState("");
  const [rol, setRol] = useState("");

  const hanlderSubmit = (e) => {
    e.preventDefault();
    console.log({ documento, apellidos, nombres, rol });
  };

  return (
    <div className="formulario">
      <h2>componente de formulario</h2>

      <form onSubmit={hanlderSubmit}>
        <input
          type="text"
          placeholder="Documento"
          onChange={(e) => setDocumento(e.target.value)}
          value={documento}
        />
        <input
          type="text"
          placeholder="Apellidos"
          onChange={(e) => setApellidos(e.target.value)}
          value={apellidos}
        />
        <input
          type="text"
          placeholder="Nombres"
          onChange={(e) => setNombres(e.target.value)}
          value={nombres}
        />
        <select onChange={(e) => setRol(e.target.value)} value={rol}>
          <option value="alumno">Alumno</option>
          <option value="docente">Docente</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
