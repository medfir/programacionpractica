export default function Tarjeta({
  documento,
  apellidos,
  nombres,
  alumno,
  anio,
  division,
  eliminar,
}) {
  return (
    <div
      className="tarjeta"
      style={{
        backgroundColor: alumno ? "red" : "blue",
        color: alumno ? "white" : "yellow",
      }}
    >
      <span className="eliminar" onClick={() => eliminar()}>
        x
      </span>
      <h2>{documento}</h2>
      <h3>
        {apellidos}, {nombres}
      </h3>
      <h3>
        {anio}, {division}
      </h3>
    </div>
  );
}
