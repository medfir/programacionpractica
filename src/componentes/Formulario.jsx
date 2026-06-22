import usePersona from "../hooks/usePersona";
import axios from "axios";
export default function Formulario() {
  const [persona, setDatoPersona] = usePersona();

  const hanlderSubmit = (e) => {
    e.preventDefault();
    const url = "https://backend-septimos.ctpoba.edu.ar/api/personas";
    const config = {
      headers: { Authorization: "48354503" },
    };

    axios
      .post(url, persona, config)
      .then((resp) => {
        console.log(resp);
        alert("Persona guardada");
      })
      .catch((error) => {
        console.error(error);
        alert("Error al guardar");
      });
  };

  return (
    <div className="formulario">
      <h2>componente de formulario</h2>

      <form onSubmit={hanlderSubmit}>
        <input
          type="text"
          placeholder="Documento"
          onChange={(e) => setDatoPersona("documento", e.target.value)}
          value={persona.documento}
        />
        <input
          type="text"
          placeholder="Apellidos"
          onChange={(e) => setDatoPersona("apellidos", e.target.value)}
          value={persona.apellidos}
        />
        <input
          type="text"
          placeholder="Nombres"
          onChange={(e) => setDatoPersona("nombres", e.target.value)}
          value={persona.nombres}
        />
        <select
          onChange={(e) => setDatoPersona("rol", e.target.value)}
          value={persona.rol}
        >
          <option value="-1">Rol</option>
          <option value="alumno">Alumno</option>
          <option value="docente">Docente</option>
        </select>
        <select
          onChange={(e) => setDatoPersona("anio", e.target.value)}
          value={persona.anio}
        >
          <option value="-1">Año</option>
          <option value="1">1ro</option>
          <option value="2">2do</option>
          <option value="3">3ro</option>
          <option value="4">4to</option>
          <option value="5">5to</option>
          <option value="6">6to</option>
          <option value="7">7mo</option>
        </select>
        <select
          onChange={(e) => setDatoPersona("division", e.target.value)}
          value={persona.division}
        >
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
