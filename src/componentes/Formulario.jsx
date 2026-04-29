import { useState } from "react";

export default function Formulario({guardar}) {
  const [documento, setDocumento] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [nombres, setNombres] = useState("");
  const [rol, setRol] = useState("");
  const [curso, setCurso] = useState("");
  const [divicion, setDivicion] = useState("");
  
  const hanlderSubmit = (e) => {
    e.preventDefault();
    console.log({ documento, apellidos, nombres, rol, curso, divicion });
    
    const persona = {
      documento,
      apellidos,
      nombres,
      rol,
      curso,
      divicion
    }
    guardar(persona);
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
          <option value="-1">Rol</option>
          <option value="alumno">Alumno</option>
          <option value="docente">Docente</option>
        </select>
        <select onChange={(e) => setCurso(e.target.value)} value={curso}>
          <option value="-1">Curso</option>
          <option value="1">1ro</option>
          <option value="2">2do</option>
          <option value="3">3ro</option>
          <option value="4">4to</option>
          <option value="5">5to</option>
          <option value="6">6to</option>
          <option value="7">7mo</option>
        </select>
        <select onChange={(e) => setDivicion(e.target.value)} value={divicion}>
          <option value="-1">Division</option>
          <option value="1">1ro</option>
          <option value="2">2do</option>
          <option value="3">3ro</option>
          <option value="4">4to</option>
          <option value="5">5to</option>
          <option value="6">6to</option>
          <option value="7">7mo</option>
          <option value="8">8vo</option>
          <option value="9">9no</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
